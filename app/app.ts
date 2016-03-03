///<reference path="../node_modules/angular2/typings/browser.d.ts"/>
import {bootstrap}    from 'angular2/platform/browser'
import {HTTP_PROVIDERS} from 'angular2/http'
import {Logger} from './services/logger.service'
import {GoogleApi} from './services/googleapi.service'
import {AppData} from './services/appdata.service'
import {Component} from 'angular2/core';

import {VideoPlayer} from './landing.video-player';
import {AppMasthead} from './landing.masthead';
import {Features} from './landing.feature';
import {ProductSelector} from './product.selector'
import {MoreFeatures} from './landing.morefeatures'
import {Banner} from './landing.banner'
import {Header} from './landing.header'
import {Footer} from './landing.footer'


@Component({
    selector: 'rl-ka-refer-landing',
    templateUrl: 'app/views/app.view.html',
    directives: [VideoPlayer, AppMasthead, Features, ProductSelector, Banner, MoreFeatures, Header, Footer]
})
class AppComponent {
	public language: string;

    constructor(private appdata: AppData) {
    	this.language = appdata.language
    }
 }

bootstrap(AppComponent, [HTTP_PROVIDERS, Logger, GoogleApi, AppData])