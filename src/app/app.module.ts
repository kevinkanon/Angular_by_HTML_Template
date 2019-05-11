import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ConfigService } from './services/config.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContentComponent } from './content/content.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { FooterComponent } from './footer/footer.component';
import { PricingComponent } from './pricing/pricing.component';
import { ClientsComponent } from './clients/clients.component';
import { HeaderComponent } from './header/header.component';
import { SocialComponent } from './social/social.component';
import { NavigationComponent } from './navigation/navigation.component';
import { BlogComponent } from './blog/blog.component';
import { PostComponent } from './post/post.component';
import { ArticleComponent } from './article/article.component';

@NgModule({
    declarations: [
        AppComponent,
        IntroComponent,
        GalleryComponent,
        ContentComponent,
        TestimonialComponent,
        FooterComponent,
        PricingComponent,
        ClientsComponent,
        HeaderComponent,
        SocialComponent,
        NavigationComponent,
        BlogComponent,
        PostComponent,
        ArticleComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [ConfigService],
    bootstrap: [AppComponent]
})
export class AppModule { }
