# timer.js
A Web Worker timer designed for in-browser timing

## Usage
See `demo.html` for a working demonstration.

### Configuration

    <div id="container">
        This script has been running for <span id="secondsLabel">0</span> seconds.
    </div>
<!-- break -->
    var worker;
    if (window.Worker) {
        worker = new Worker('./path/to/timer.js');
        worker.onmessage = (e) => { // capture messages from the worker
            document.getElementById('secondsLabel').value = e.data.elapsedTime;
        }
    }

### Start the timer (`action: 'start'`)
    worker.postMessage({action: 'start'});