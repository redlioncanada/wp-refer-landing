import {Component, Input} from 'angular2/core'
import {LoggerService} from './services/logger.service'

@Component({
	selector: 'videoplayer-video',
    template: `
    	<iframe *ngIf="hasVideo()" id="{{id}}" src="http://www.youtube.com/embed/{{id}}?enablejsapi=1&playerapiid={{id}}&rel=0" width="100%" height="425" allowfullscreen frameborder="0"></iframe>
		<img *ngIf="hasImage()" src="{{image}}"/>
    `
})
export class VideoPlayerVideo {
	@Input() id: string
	@Input() image: string
	@Input() selected: boolean
	public player
	public ready: boolean
	public ended: boolean

	constructor(private logger: LoggerService) {
		this.ready = false
		this.selected = true
		this.ended = false
	}

	ngAfterViewInit() {
		let self = this
		if (this.hasVideo()) {
			this.player = new YT.Player(this.id, {
				events: {
					onReady: function() {
						self._onReady(self)
					},
					onStateChanged: function(state) {
						switch (state) {
							case 0:
								//ended
								self._onEnded(self)
								break;
							case 1:
							//playing
							case 2:
							//paused
							case 3:
							//buffering
							case 4:
							//video cued
						}
					}
				}
			})
		}
	}

	ngOnChanges(changes) {
		if (this.hasVideo()) {
			if ("selected" in changes) {
				if (changes.selected.currentValue) {
					//if (this.ended) {
					this.ended = false
					this.restart(this)
					//} else {
					//	this.play(this)
					//}
				} else {
					this.pause(this)
					this.reset(this)
				}
			}
		}
	}

	hasVideo() {
		return this.id && this.id.length
	}

	hasImage() {
		return this.image && this.image.length
	}

	_onReady(self) {
		//need to pass a ref of `this` since this is a callback on YT.Player
		self.ready = true
	}

	_onEnded(self) {
		this.ended = true
	}

	play(self) {
		if (!self) self = this
		if (!self.ready || !self.hasVideo()) return
		self.player.playVideo()
	}

	pause(self) {
		if (!self) self = this
		if (!self.ready || !self.hasVideo()) return
		self.player.pauseVideo()
	}

	restart(self) {
		if (!self) self = this
		if (!self.ready || !self.hasVideo()) return

        self.player.seekTo(0)
		self.play(self)
	}

	reset(self) {
		if (!self) self = this
		if (!self.ready || !self.hasVideo()) return
	}
}