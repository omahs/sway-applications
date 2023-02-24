mod commands;
mod utils;

use clap::{Parser, ValueEnum};
use commands::{build, bump, fmt, test};
use utils::{read_applications, repo_root};

#[derive(Parser)]
#[command(about = "Utility crate for maintaining the repository")]
struct Cli {
    #[arg(value_enum)]
    command: Mode,
}

#[derive(Clone, ValueEnum)]
enum Mode {
    /// Build the Sway contracts for each project
    Build,
    /// Bump each project from its current `fuel-toolchain.toml` to the one in this repository
    Bump,
    /// Format the Sway and Rust files in each project
    Fmt,
    /// Run the Rust tests for each project
    Test,
}

fn main() -> anyhow::Result<()> {
    let cli = Cli::parse();

    let apps = read_applications();
    let root = repo_root();

    match cli.command {
        Mode::Build => build::run(apps, root),
        Mode::Bump => bump::run(apps, root),
        Mode::Fmt => fmt::run(apps, root),
        Mode::Test => test::run(apps, root),
    }
}
