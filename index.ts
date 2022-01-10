import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { EmbedVideoService } from './src/embed-video.service';

export * from './src/embed-video.service';

@NgModule({
	imports: [
    CommonModule,
    HttpClientModule,
  ],
	declarations: [],
	exports: [],
	providers: [
    EmbedVideoService
  ]
})
export class EmbedVideo {
	static forRoot(): ModuleWithProviders<EmbedVideo> {
		return {
			ngModule: EmbedVideo,
			providers: [EmbedVideoService]
		};
	}
}
