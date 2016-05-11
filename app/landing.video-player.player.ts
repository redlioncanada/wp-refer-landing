import {Component, Input} from 'angular2/core'
import {LoggerService} from './services/logger.service'
import {VideoPlayerVideo} from './landing.video-player.video'

@Component({
	selector: 'videoplayer-player',
    template: `
    	<div>
			<ul>
				<li *ngFor="#video of data; #i=index" class="{{currentId !== i ? 'hide' : 'show'}}">
					<videoplayer-video [image]="video.image" [id]="video.id" [selected]="currentId == i" [width]="video.width" [height]="video.height"></videoplayer-video>
				</li>
			</ul>
		    <div class="wp-refer-landing-videoplayer-text">
		    	<h2 class="wp-refer-landing-videoplayer-title" [innerHTML]="data[currentId].title">
		    	</h2>
		    	<div class="wp-refer-landing-videoplayer-description" [innerHTML]="!!data[currentId].desc ? data[currentId].desc : ''">
		        </div>
		    </div>
		</div>
    `,
	directives: [VideoPlayerVideo]
})
export class VideoPlayerPlayer {
	@Input() data
	@Input() currentId

	constructor(private logger: LoggerService) {
	}
}