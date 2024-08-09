import ItemColumn from "./item-column";
import Commands from "./commands";
import CodeBlock from "./codeBlock";

const codeBlock = `
# Initialize a new Git repository
git init
# Clone and create a local copy of a remote repository
git clone <url>
# Configure global Git settings
git config --global <setting_name> <value>
# Configure local Git settings for a specific repo
git config --local <setting_name> <value>
`;

export default function Home() {
  return (
    <main className="bg-gray-900">
      <div className="flex gap-4">
        <div className="max-w-[250px] bg-gray-700 h-screen px-8 py-12 text-white">
          <h1 className="mb-4">Github</h1>
          <p className="text-sm">Cheatsheet for git commands</p>
        </div>
        <div className="w-full pt-8">
          <ItemColumn>
            <Commands title="Setup and Configuration">
              <CodeBlock codeBlock={codeBlock} />
            </Commands>
          </ItemColumn>
        </div>
      </div>
    </main>
  );
}
