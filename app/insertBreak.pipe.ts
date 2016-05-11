import {Pipe} from 'angular2/core'

@Pipe({
	name: "insertBreak"
})
export class InsertBreakPipe {
	transform(str) {
		return str.replace(/\s/g, '<br/>')
	}
}