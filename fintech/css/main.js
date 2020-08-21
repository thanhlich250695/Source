const inputFile = document.getElementById("inputFile");
const previewContainer = document.getElementById("imagePreview");
const imagePreview = previewContainer.querySelector("#image-preview__image");
const textPreview = previewContainer.querySelector(".image-preview__text");
inputFile .addEventListener('change',function(){
	// const file = thông tin file 
	const file = this.files[0];
	console.log(file)
	if(file){
		const reader = new FileReader();
		// style cho sự kiện sau khi load ảnh
		textPreview.style.display = "none";
		imagePreview.style.display = "block";
		// reader.readAsDataURL làm nhiệm vụ nhận đầu vào là đối tượng File, đọc thông tin và lưu vào bộ nhớ. 
		reader.readAsDataURL(file);

		reader.addEventListener('load',function(){
			console.log(this);
			imagePreview.setAttribute('src',this.result);
			// this.result = FileReader.result :  trả về nội dung của file được truyền vào FileReader

			// download
			var down = document.getElementById("download");
				down.setAttribute('href',this.result);
				down.setAttribute('download',this.result);
		})
		// download
		}
		// canvas first
		var canvas = document.getElementById("canvas");
			canvas.addEventListener('click',function(){
			var c = document.getElementById("myCanvas");
			var ctx = c.getContext("2d");
			ctx.drawImage(imagePreview, 10, 10, imagePreview.width/3, imagePreview.height/3);
			var canvasToimage = c.toDataURL("image/png");
			var downCanvas = document.getElementById("downloadCanvas");
			downCanvas.setAttribute('href',canvasToimage);
			downCanvas.setAttribute('download',canvasToimage);
		});
});

