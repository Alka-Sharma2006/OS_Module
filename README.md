# Real-Time System Monitor

A beginner-friendly Node.js project that displays real-time system information using Node.js's built-in `os` module.

## Features

* Displays operating system platform
* Displays system architecture
* Displays hostname
* Displays username
* Displays OS type and release
* Displays system uptime
* Displays CPU model and number of CPU cores
* Displays CPU load
* Displays total, used, and free RAM
* Displays RAM usage percentage
* Displays CPU and RAM usage using progress bars
* Refreshes the dashboard every 5 seconds

## Technologies Used

* Node.js
* Built-in `os` module
* JavaScript

## Project Structure

```text
system-monitor/
│
├── monitor.js
└── README.md
```

## How to Run

Make sure Node.js is installed on your system.

Open the project folder in the terminal and run:

```bash
node monitor.js
```

The system monitor dashboard will appear in the terminal and automatically refresh every 5 seconds.

## Example Output

```text
=================================
REAL TIME SYSTEM MONITOR
=================================

Time: 9:29:30 am
Hostname: LAPTOP-K9O2TUPQ
User: 91628
Platform: win32
Uptime: 59h 20m 39s

-------------------------------------------------

CPU Model : Intel(R) Core(TM) 5 120U
CPU Cores : 12
CPU Load : [----------] 0.0%

-------------------------------------------------

Total RAM  : 15.69 GB
Used RAM   : 12.44 GB
Free RAM   : 3.25 GB
RAM Usage  : [########--] 79.3%

=================================================
Refreshing every 5s...
```

## Notes

The project uses only Node.js built-in modules, so no external npm packages are required.

On Windows, `os.loadavg()` may return `0`, so CPU load can appear as `0.0%`.
