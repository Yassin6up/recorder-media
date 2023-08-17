// credit : Yassine Ait Elhrdouf 
// facebook : YassinLkokabi 
// instagram : YassinLhrdoufi
// any ask call me in whatsapp  : +212687802700


class Recorder {
  constructor(VedioTag) {
    this.VedioTag = VedioTag
  }

  async setUpRecord() {
      this.stream = await navigator.mediaDevices.getDisplayMedia({
    video: {
      mediaSource: "screen"
    },
    audio: true
  })
  
    this.data = [];
    this.mediaRecorder = new MediaRecorder(this.stream)
    this.mediaRecorder.ondataavailable = (e) => {
      this.data.push(e.data);
    }
    return this.data
  }
  onstart(){
    this.mediaRecorder.onstart = (e) => {
      return e
    }
  }
  async onstop(){
    this.videoData = URL.createObjectURL(
      new Blob(this.data, {
        type: this.data[0].type
      })
    )
  this.VedioTag.src = this.videoData

  }
  async start(){
    await this.setUpRecord()
    this.mediaRecorder.start()
    return true
  }
  stop(){
    this.mediaRecorder.stop();
    this.mediaRecorder.onstop = ()=>{
     this.onstop()
    }

    return true
  }
  pause(){
    this.mediaRecorder.pause()
    return true
  }
  onpause(){
    this.mediaRecorder.onpause = (e)=>{
      return e
    }
  }
  
  resume(){
    this.mediaRecorder.resume()
    return true
  }
  onresume(){
    this.mediaRecorder.onresume = (e)=>{
      return e
    }
  }


  time(){
    return setTimeout(()=>{
      this.mediaRecorder.videoBitsPerSecond
    },1000)
  }

  state(){
    return this.mediaRecorder.state
  }


}
export default Recorder