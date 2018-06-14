# Demo notes

I've written code for all of the tasks.

Task 1 - I'm displaying a list of the servers. I didn't spend much effort on making it "pretty" for this demo, but I think it's good enough layout. I figured I'd render the "off" servers last in the list.

Task 2 - The PowerToggle component shows a nice(ish) power status and button to toggle it.

Task 3 - I used responsive columns to wrap the disks under the server attributes. I added one extra case to the header to ensure the PowerToggle will wrap under the title on a very small width viewport.


I installed the following additional modules/libraries:
- axios (http requests)
- bulma (a simple css lib for basic components and responsiveness)


#### commit history (after sanitizing)

- Install axios, bulma
- Add API module
- Import bulma css, update index with meta tag
- Add dumb ServerList component tree; fetch servers on app mount"
- Include fontawesome in index.html
- [Task 1] Update ServerList/Server to display server information
- Add PowerToggle UI to Server
- Hook up PowerToggle functionality; style tweaks
- Clean up
- Server style improvements
- Refactor icons to common component
- Improve some docs/comments
- Add DEMO.md

