    // =============== Time ======================================
    // Function to update time for a specific timezone
    function updateTime() {
        // Jordan Time (UTC+3)
        let jordanDate = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Amman" }));
        let jordanTime = jordanDate.toLocaleTimeString();
        document.getElementById("jordan-time").innerText = jordanTime;
  
        // Nepal Time (UTC+5:45)
        let nepalDate = new Date(new Date().toLocaleString("en-US", { timeZone: "Asia/Kathmandu" }));
        let nepalTime = nepalDate.toLocaleTimeString();
        document.getElementById("nepal-time").innerText = nepalTime;
      }
      // Update time every second
      setInterval(updateTime, 1000);
      updateTime();


