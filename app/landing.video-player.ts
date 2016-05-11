import {Component} from 'angular2/core'
import {VideoPlayerSelector} from './landing.video-player.selector'
import {VideoPlayerPlayer} from './landing.video-player.player'
import {LoggerService} from './services/logger.service'
import {AppDataService} from './services/appdata.service'

@Component({
    selector: 'videoplayer',
    template: `
    	<h2 class="{{!enabled ? 'hide': ''}}">{{title}}</h2>
		<videoplayer-player class="{{!enabled ? 'hide': ''}}" [data]="videos" [currentId]="currentId"></videoplayer-player>
		<ul class="{{!enabled ? 'hide': ''}}">
			<li *ngFor="#video of videos; #i=index">
				<videoplayer-selector (selectedVideo)="select($event)" [data]="video" [id]="i" [selected]="currentId == i"></videoplayer-selector>
			</li>
		</ul>
    `,
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