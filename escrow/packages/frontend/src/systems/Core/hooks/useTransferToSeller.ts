import type { BigNumberish } from 'fuels';
import { bn } from 'fuels';
import { useAtomValue } from 'jotai';
import toast from 'react-hot-toast';
import { useMutation, useQueryClient } from 'react-query';

import { useWallet } from './useWallet';
import { walletIndexAtom } from '../jotai';
import { txFeedback } from '../utils/feedback';
import { contractCheck } from '../utils/helpers';

import { useContract } from './useContract';

interface UseTransferToSellerProps {
  escrowId: BigNumberish;
}

export function useTransferToSeller({ escrowId }: UseTransferToSellerProps) {
  const queryClient = useQueryClient();
  const wallet = useWallet();
  const walletIdx = useAtomValue(walletIndexAtom);
  const contract = useContract();
  const successMsg = 'Transfer to seller successful.';

  const mutation = useMutation(
    async () => {
      contractCheck(contract);

      const scope = await contract!.functions
        .transfer_to_seller(escrowId)
        .txParams({
          gasPrice: bn(5),
          gasLimit: 100_000_000,
          variableOutputs: 3,
        })
        .fundWithRequiredCoins();

      const response = await contract!.wallet?.sendTransaction(scope.transactionRequest);
      const result = await response?.waitForResult();

      return result;
    },
    {
      onSuccess: txFeedback(successMsg, handleSuccess),
      onError: handleError,
    }
  );

  function handleSuccess() {
    // Trigger queries to update components
    queryClient.invalidateQueries(['EscrowPage-balances', walletIdx]);
    queryClient.invalidateQueries(['BuyerEscrows', wallet?.address.toHexString()]);
  }

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  function handleError(e: any) {
    const errors = e?.response?.errors;

    if (errors?.length) {
      if (errors[0].message === 'enough coins could not be found') {
        toast.error('Not enough balance in your wallet to deposit');
      } else {
        toast.error(errors[0].message);
      }
    } else {
      toast.error('Error when trying to transfer to seller');
    }
  }

  return mutation;
}
