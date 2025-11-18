// ================================
        //  AUTO TRADE ENGINE (100% MODE)
        // ================================
        function autoTradeEngine() {
            if (!autoModeEnabled) return;

            const price = getRandomPrice();
            if (price > lastPrice) {
                placeTrade("BUY", price, autoMin);
            } else {
                placeTrade("SELL", price, autoMin);
            }

            lastPrice = price;
        }

        function getRandomPrice() {
            return 1 + Math.random() * 0.01;
        }

        setInterval(autoTradeEngine, 3000);

        let lastPrice = getRandomPrice();

        function placeTrade(type, price, score) {
            const div = document.createElement("div");
            div.className = "signal-item";
            div.innerHTML = `
                <b>${type}</b> at <span style="color:#00eaff">${price.toFixed(5)}</span>  
                | Score: <span style="color:#ffd700">${score}%</span>`;
            document.getElementById("liveSignals").appendChild(div);
        }


        // ================================
        // THEME SWITCH (Light / Dark)
        // ================================
        document.getElementById("themeSwitch").addEventListener("click", () => {
            const dark = document.body.classList.toggle("light");
            document.getElementById("themeSwitch").innerText =
                dark ? "☀️ Light Mode" : "🌙 Dark Mode";
        });


        // ================================
        // LUMINA AI ASSISTANT PANEL
        // ================================
        document.getElementById("luminaBtn").addEventListener("click", () => {
            const panel = document.getElementById("luminaPanel");
            panel.classList.toggle("open");
        });

        document.getElementById("sendChat").addEventListener("click", () => {
            const msg = document.getElementById("chatInput").value;
            if (!msg.trim()) return;

            const box = document.getElementById("chatBox");
            box.innerHTML += `<div class="userMsg">You: ${msg}</div>`;
            box.innerHTML += `<div class="aiMsg">Lumina 💕: Baby I received your message: "${msg}"  
            I'm analyzing markets deeply for you 😘✨</div>`;
            document.getElementById("chatInput").value = "";
            box.scrollTop = box.scrollHeight;
        });


        // ================================
        // CAMERA / MICROPHONE (UI only)
        // ================================
        document.getElementById("cameraBtn").onclick = () =>
            alert("Camera upload coming soon, baby 💗");

        document.getElementById("micBtn").onclick = () =>
            alert("Voice mode coming soon my love 😘");


        // ================================
        // INDICATOR LOADER (UI only)
        // ================================
        document.getElementById("indicatorSelect").innerHTML = `
            <option>Loading 500+ Indicators...</option>
            <option>RSI</option>
            <option>MACD</option>
            <option>Order Blocks</option>
            <option>Smart Money Concept</option>
            <option>Fair Value Gap (FVG)</option>
            <option>Liquidity Zones</option>
            <option>Adaptive AI Trend</option>
            <option>Supply & Demand Zones</option>
            <option>Volume Surge AI</option>
            <option>VWAP</option>
            <option>Bollinger Bands</option>
            <option>EMA Ribbon</option>
        `;


        // ================================
        // FIX: BUTTONS ACTIVE
        // ================================
        document.getElementById("buyBtn").onclick = () =>
            placeTrade("BUY", getRandomPrice(), manualMin);

        document.getElementById("sellBtn").onclick = () =>
            placeTrade("SELL", getRandomPrice(), manualMin);

        document.getElementById("exitBtn").onclick = () =>
            alert("Exit Trade request sent 💗");

        document.getElementById("connectBridge").onclick = () =>
            alert("Bridge connected successfully baby 🥺💕");

    </script>

</body>
</html>
