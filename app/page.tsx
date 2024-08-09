import ItemColumn from "./item-column";
import Commands from "./commands";
import CodeBlock from "./codeBlock";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const setup = `
# Initialize a new Git repository
git init

# Clone and create a local copy of a remote repository
git clone <url>

# Configure global Git settings
git config --global <setting_name> <value>

# Configure local Git settings for a specific repo
git config --local <setting_name> <value>
`;

const fileOperations = `
# Show working tree status
git status

# Add files to the staging area
git add <file(s)>

# Remove files from working tree and staging area
git rm <file(s)>

# Move or rename a file
git mv <old_file> <new_file>

# Commit changes with a message
git commit -m "commit message"

# Show differences between working tree and last commit
git diff
`;

const branching = `
# List all branches
git branch

# Create a new branch
git branch <branch_name>

# Switch to a specific branch
git checkout <branch_name>

# Merge a branch into the current branch
git merge <branch_name>

# Delete a specific branch
git branch -d <branch_name>

# List all remote branches
git branch -r
`;

const remote = `
# List remote repositories
git remote

# Add a remote repository
git remote add <name> <url>

# Fetch from a remote repository
git fetch <remote_name>

# Pull changes from a remote branch
git pull <remote_name> <remote_branch>

# Push changes to a remote repository
git push <remote_name> <local_branch>

# Remove a remote repository
git remote rm <remote_name>

# Display information about a specific remote repository
git remote show <remote_name>

# Show the tracking branches for remote repositories
git remote show <remote_name> --verbose
`;

export default function Home() {
  return (
    <main className="bg-gray-900 overflow-x-hidden">
      <div className="flex">
        <div className="w-[250px] bg-gray-700 h-screen px-8 py-12 text-white">
          <h1 className="mb-4">Github</h1>
          <p className="text-sm">Cheatsheet for git commands</p>
        </div>
        <div className="pt-8 flex gap-4 grow px-4">
          <ItemColumn>
            <Commands title="Setup and Configuration">
              <CodeBlock codeBlock={setup} />
            </Commands>
            <Commands title="Remote Repositores">
              <CodeBlock codeBlock={remote} />
            </Commands>
          </ItemColumn>
          <ItemColumn>
            <Commands title="File Operations">
              <CodeBlock codeBlock={fileOperations} />
            </Commands>
          </ItemColumn>
          <ItemColumn>
            <Commands title="Branching and Merging">
              <CodeBlock codeBlock={branching} />
            </Commands>
          </ItemColumn>
        </div>
      </div>
    </main>
  );
}
