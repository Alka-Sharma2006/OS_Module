const os = require("os");
// Platform
function getPlatform() {
    return os.platform();
}
// Architecture
function getArchitecture() {
    return os.arch();
}
// Hostname
function getHostname() {
    return os.hostname();
}
// OS Type
function getOSType() {
    return os.type();
}
// OS Release
function getOSRelease() {
    return os.release();
}
// Username
function getUsername() {
    return os.userInfo().username;
}
//System Information
console.log("hostname:", os.hostname());
console.log("Type:", os.type());
console.log("Release:", os.release());
console.log("Architecture:", os.arch());
console.log("userInfo:", os.userInfo());
console.log("Username:", os.userInfo().username);
// Uptime
function formatUptime(seconds) {
    const hours = Math.floor(seconds / 3600);
    const remainingSeconds = seconds % 3600;
    const minutes = Math.floor(remainingSeconds / 60);
    const secs = remainingSeconds % 60;
    return `${hours}h ${minutes}m ${secs}s`;
}
function getUptime() {
    return formatUptime(os.uptime());
}
function getCPUInfo() {
    const cpuInfo = os.cpus();

    return {
        model: cpuInfo[0].model,
        cores: cpuInfo.length
    };
}
//Memory 
function getMemoryInfo() {
    const totalMemory = os.totalmem();
    const freeMemory = os.freemem();
    const usedMemory = totalMemory - freeMemory;
    const ramUsage = (usedMemory / totalMemory) * 100;
    return {
        totalMemory,
        freeMemory,
        usedMemory,
        ramUsage
    };
}
function toGB(bytes) {
    return (bytes / (1024 ** 3)).toFixed(2);
}
//cpu load
function getCPULoad() {
    const load = os.loadavg()[0];
    const cpuCores = os.cpus().length;
    const cpuLoad = Math.min((load / cpuCores) * 100, 100);
    return cpuLoad;

}
//progress bar
function bar(percent) {
    const filled = Math.round(percent * 10 / 100);
    const empty = 10 - filled;
    return `[${"#".repeat(filled)}${"-".repeat(empty)}] ${percent}%`;
}
//dashboard
function showDashboard() {
    console.clear();
    //function calls
    const cpu = getCPUInfo();
    const memory = getMemoryInfo();
    const cpuLoad = getCPULoad();

    console.log("=================================");
    console.log("REAL TIME SYSTEM MONITOR");
    console.log("=================================");

    console.log("Time:", new Date().toLocaleTimeString());
    console.log("Hostname:", getHostname());
    console.log("User     :", getUsername());
    console.log("Platform:", getPlatform());
    console.log("Uptime  :", getUptime());
    console.log("-------------------------------------------------");
    console.log("CPU Model :", cpu.model);
    console.log("CPU Cores :", cpu.cores);
    console.log("CPU Load :", bar(cpuLoad));
    console.log("-------------------------------------------------");
    console.log("Total RAM  :", toGB(memory.totalMemory), "GB");
    console.log("Used RAM   :", toGB(memory.usedMemory), "GB");
    console.log("Free RAM   :", toGB(memory.freeMemory), "GB");
    console.log("RAM Usage  :", bar(memory.ramUsage));
    console.log("=================================================");
    console.log("Refreshing every 5s...");
}
showDashboard();
setInterval(showDashboard, 5000);






