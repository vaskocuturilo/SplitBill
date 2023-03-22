export class process {
    startProcessing() {
      let img = document.querySelector('#ocr-img');
      Tesseract.recognize(
        img,
        'eng',
        { logger: m => this.scanningProgress(m) }
      ).then((res) => res
      ).then(({ data }) => {
        const resultDiv = document.querySelector('.draggable');
        resultDiv.style.display = 'block'; 
        resultDiv.innerHTML = `
          <div">  
          ${data.text.match(/\$[0-9]+/g,'')}
          </div>
        `;
      })
    }

    scanningProgress(m) {
      document.querySelector('#progress').innerText = 'Reading...'
      if (m.status === 'recognizing text') {
        const progress = Math.round(m.progress * 100);

        document.querySelector('#progress').innerText = 'Parcing Text...'

        if (progress >= 100) {
          document.querySelector('#progress').innerText = '';
        }

        this.animateProgressBar(progress);
      }
    }

    readURL() {
        const input = this;

        if (input.files && input.files[0]) {
          const reader = new FileReader();

          reader.onload = function (e) {
            const uploadedImg = document.querySelector('#ocr-img');
            const selectedFileName = document.querySelector('.file-name');
            const startScanBtn =  document.querySelector('#start-scan');

            uploadedImg.src = e.target.result;
            uploadedImg.style.display = 'block';
            selectedFileName.innerText = input.files[0].name;

            startScanBtn.classList.remove('disabled');
          };

          reader.readAsDataURL(input.files[0]);
        }
    }

    animateProgressBar(progress) {
        const progressBar = document.querySelector('#myBar');
        progressBar.style.display = 'block';

        if (progress >= 100) {
          progressBar.style.width = progress + "%";
          progressBar.innerHTML = progress  + "%";

          progressBar.style.display = 'none';
        } else {
          progressBar.style.width = progress + "%";
          progressBar.innerHTML = progress  + "%";
        }
    }
}
