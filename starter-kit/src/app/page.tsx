export default function Home() {
  return (
    <main className="min-h-screen p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-4">Connect 2.0 Assessment</h1>
        <p className="text-gray-600 mb-4">
          Welcome to the Connect 2.0 platform assessment starter kit.
        </p>
        <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
          <p className="font-semibold mb-2">Getting Started:</p>
          <ol className="list-decimal list-inside space-y-1 text-sm">
            <li>Read the instructions in <code>docs/assessment/INSTRUCTIONS.md</code></li>
            <li>Create your assessment branch</li>
            <li>Build the ProjectSearch component</li>
            <li>Submit a pull request when complete</li>
          </ol>
        </div>
      </div>
    </main>
  )
}
