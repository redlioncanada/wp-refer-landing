import {Component} from 'angular2/core'
import {VideoPlayerSelector} from './landing.video-player.selector'
import {VideoPlayerPlayer} from './landing.video-player.player'
import {LoggerService} from './services/logger.service'
import {AppDataService} from './services/appdata.service'

@Component({
    selector: 'videoplayer',
    templateUrl: 'app/views/landing.video-player.view.html',
	directives: [VideoPlayerPlayer, VideoPlayerSelector]
})
export class VideoPlayer {
	public title
	public videos
	public currentId = 0
	private enabled: boolean

	constructor(private appdata: AppDataService, private logger: LoggerService) {
		this.enabled = true
		var data = appdata.get()
		this.enabled = data.videoplayer.enabled
		this.title = data.videoplayer.title
		this.videos = data.videoplayer.videos
	}

	select(id) {
		this.currentId = id
	}
}