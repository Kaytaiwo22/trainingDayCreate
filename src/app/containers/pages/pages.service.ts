import { ComponentFactoryResolver, ComponentRef, Inject, Injectable, ViewContainerRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HeroComponent } from '../../components/hero/hero.component';
import { HalfInfoComponent } from '../../components/half-info/half-info.component';
import { SmallHalfInfoComponent } from '../../components/small-half-info/small-half-info.component';
import { ContactComponent } from '../../components/contact/contact.component';
import {BlogTextComponent} from '../../components/blog-text/blog-text.component';
import {ParallaxComponent} from '../../components/parallax/parallax.component';
import { CommonModule } from '@angular/common';
import {Call2actionComponent} from '../../components/call2action/call2action.component';
import {MenuComponent} from '../../components/menu/menu.component';
import {TextBlobComponent} from '../../components/text-blob/text-blob.component';
import {ImageComponent} from '../../components/image/image.component';
import {ExplainerHeroModule} from '../../components/explainer-hero/explainer-hero.module';
import {BlogTextModule} from '../../components/blog-text/blog-text.module';
import {ExplainerHeroComponent} from '../../components/explainer-hero/explainer-hero.component';
import {ProductCardComponent} from '../../components/product-card/product-card.component';
import {ProductListingComponent} from '../../pages/product-listing/product-listing.component';
import {UploadFileModule} from '../../components/upload-file/upload-file.module';
import {UploadFileComponent} from '../../components/upload-file/upload-file.component';
import {ProductDetailModule} from '../../pages/product-detail/product-detail.module';
import {ProductDetailComponent} from '../../pages/product-detail/product-detail.component';
import {ProductInfoComponent} from '../../components/product-info/product-info.component';
import {CartComponent} from '../../pages/cart/cart.component';
import {HeaderComponent} from '../../components/header/header.component';
import {WelcomeVideoComponent} from '../../components/welcome-video/welcome-video.component';
import {FooterComponent} from '../../components/footer/footer.component';
import {AccountComponent} from '../../components/account/account.component';
import {MyAccountComponent} from '../myAccount/myAccount.component';
import {RegisterFormComponent} from '../../components/register-form/register-form.component';
import {ProgrammeFeedComponent} from '../../components/programme-feed/programme-feed.component';
import {ProgramFeedHeaderComponent} from '../../components/program-feed-header/program-feed-header.component';
import {ProgramVideoComponent} from '../../components/program-video/program-video.component';
import {ProgramDocumentDownloadComponent} from '../../components/program-document-download/program-document-download.component';
import {ProgramDocumentNodownloadComponent} from '../../components/program-document-nodownload/program-document-nodownload.component';
import {FullWidthImageComponent} from '../../components/full-width-image/full-width-image.component';
import {LoginFormComponent} from '../../components/login-form/login-form.component';


@Injectable({
  providedIn: 'root',
})
export class PagesService {
  public factoryResolver: ComponentFactoryResolver;
  public rootViewContainer: ViewContainerRef;

  constructor(@Inject(ComponentFactoryResolver) factoryResolver, private http: HttpClient, private router: Router) {
    this.factoryResolver = factoryResolver;
  }

  /**
   * Gets one selected page
   */
  getPage(slug) {
    if (this.router.url.indexOf('/articles/') === 0) {
      slug = '/articles' + slug;
    }

    return this.http.get(
      'https://api2.createdigitalsolutions.com/websites/60dafcc14b162471912edc48/pages?slug=' + slug
    );
  }

  /**
   * Sets up this state to display components dynamically
   */
  setRootViewContainerRef(viewContainerRef) {
    this.rootViewContainer = viewContainerRef;
  }

  /**
   * Contains all of the allowed components that can be rendered via the API - this is where
   * any new components that we want to use will be added
   */
  private getComponentBySelector<ComponentRef>(
    componentSelector: string,
    inputs?: {
      name: string;
      value: any;
    }[]
  ) {
    let component;

    if (componentSelector === '61169df54b162471912edc52') {
      component = this.factoryResolver.resolveComponentFactory(MenuComponent).create(this.rootViewContainer.injector);

      return this.addInputsToComponent(component, inputs);
    } else if (componentSelector === '5fc8eaf74a96393107448203') {
      component = this.factoryResolver.resolveComponentFactory(HeroComponent).create(this.rootViewContainer.injector);

      return this.addInputsToComponent(component, inputs);
    } else if (componentSelector === '611a65c64b162471912edc54') {
      component = this.factoryResolver
        .resolveComponentFactory(TextBlobComponent)
        .create(this.rootViewContainer.injector);

      return this.addInputsToComponent(component, inputs);
    } else if (componentSelector === '611cec1c4b162471912edc55') {
      component = this.factoryResolver
        .resolveComponentFactory(ImageComponent)
        .create(this.rootViewContainer.injector);

      return this.addInputsToComponent(component, inputs);
    } else if (componentSelector === '614462414b162471912edc92') {
      component = this.factoryResolver
        .resolveComponentFactory(ProgramVideoComponent)
        .create(this.rootViewContainer.injector);

      return this.addInputsToComponent(component, inputs);
    } else if (componentSelector === '614464bd4b162471912edc93') {
      component = this.factoryResolver
        .resolveComponentFactory(ProgramDocumentDownloadComponent)
        .create(this.rootViewContainer.injector);

      return this.addInputsToComponent(component, inputs);
    } else if (componentSelector === '614a3cc04b162471912edca4') {
      component = this.factoryResolver
        .resolveComponentFactory(FullWidthImageComponent)
        .create(this.rootViewContainer.injector);

      return this.addInputsToComponent(component, inputs);
    } else if (componentSelector === '614c41e34b162471912edca5') {
      component = this.factoryResolver
        .resolveComponentFactory(RegisterFormComponent)
        .create(this.rootViewContainer.injector);

      return this.addInputsToComponent(component, inputs);
    } else if (componentSelector === '614c42224b162471912edca6') {
      component = this.factoryResolver
        .resolveComponentFactory(LoginFormComponent)
        .create(this.rootViewContainer.injector);

      return this.addInputsToComponent(component, inputs);
    } else if (componentSelector === '614466084b162471912edc94') {
      component = this.factoryResolver
        .resolveComponentFactory(ProgramDocumentNodownloadComponent)
        .create(this.rootViewContainer.injector);

      return this.addInputsToComponent(component, inputs);
    } else if (componentSelector === '611cf7ef4b162471912edc57') {
      component = this.factoryResolver
        .resolveComponentFactory(ExplainerHeroComponent)
        .create(this.rootViewContainer.injector);

      return this.addInputsToComponent(component, inputs);
    } else if (componentSelector === '611d6adf4b162471912edc59') {
      component = this.factoryResolver
        .resolveComponentFactory(BlogTextComponent)
        .create(this.rootViewContainer.injector);

      return this.addInputsToComponent(component, inputs);
    } else if (componentSelector === '60defe314b162471912edc4c') {
      component = this.factoryResolver
        .resolveComponentFactory(HalfInfoComponent)
        .create(this.rootViewContainer.injector);

      return this.addInputsToComponent(component, inputs);
    } else if (componentSelector === '612f284f4b162471912edc65') {
      component = this.factoryResolver
        .resolveComponentFactory(UploadFileComponent)
        .create(this.rootViewContainer.injector);

      return this.addInputsToComponent(component, inputs);
    } else if (componentSelector === '5fc8c9024a963931074481ff') {
      component = this.factoryResolver
        .resolveComponentFactory(ParallaxComponent)
        .create(this.rootViewContainer.injector);

      return this.addInputsToComponent(component, inputs);
    } else if (componentSelector === '612f214b4b162471912edc63') {
      component = this.factoryResolver
        .resolveComponentFactory(ProductListingComponent)
        .create(this.rootViewContainer.injector);

      return this.addInputsToComponent(component, inputs);
    }  else if (componentSelector === '612f22284b162471912edc64') {
      component = this.factoryResolver
        .resolveComponentFactory(ProductCardComponent)
        .create(this.rootViewContainer.injector);

      return this.addInputsToComponent(component, inputs);
    } else if (componentSelector === '612fa7a24b162471912edc68') {
      component = this.factoryResolver
        .resolveComponentFactory(ProductDetailComponent)
        .create(this.rootViewContainer.injector);

      return this.addInputsToComponent(component, inputs);
    } else if (componentSelector === '6130024b4b162471912edc6b') {
      component = this.factoryResolver
        .resolveComponentFactory(CartComponent)
        .create(this.rootViewContainer.injector);

      return this.addInputsToComponent(component, inputs);
    } else if (componentSelector === '6140a9824b162471912edc81') {
      component = this.factoryResolver
        .resolveComponentFactory(MyAccountComponent)
        .create(this.rootViewContainer.injector);

      return this.addInputsToComponent(component, inputs);
    } else if (componentSelector === '614090cb4b162471912edc7e') {
      component = this.factoryResolver
        .resolveComponentFactory(FooterComponent)
        .create(this.rootViewContainer.injector);

      return this.addInputsToComponent(component, inputs);
    } else if (componentSelector === '61408ff14b162471912edc7c') {
      component = this.factoryResolver
        .resolveComponentFactory(WelcomeVideoComponent)
        .create(this.rootViewContainer.injector);

      return this.addInputsToComponent(component, inputs);
    } else if (componentSelector === '61445f144b162471912edc91') {
      component = this.factoryResolver
        .resolveComponentFactory(ProgramFeedHeaderComponent)
        .create(this.rootViewContainer.injector);

      return this.addInputsToComponent(component, inputs);
    } else if (componentSelector === '614089c34b162471912edc7b') {
      component = this.factoryResolver
        .resolveComponentFactory(HeaderComponent)
        .create(this.rootViewContainer.injector);

      return this.addInputsToComponent(component, inputs);
    } else if (componentSelector === '613003eb4b162471912edc6c') {
      component = this.factoryResolver
        .resolveComponentFactory(CartComponent)
        .create(this.rootViewContainer.injector);

      return this.addInputsToComponent(component, inputs);
    } else if (componentSelector === '612fa76d4b162471912edc67') {
      component = this.factoryResolver
        .resolveComponentFactory(ProductInfoComponent)
        .create(this.rootViewContainer.injector);

      return this.addInputsToComponent(component, inputs);
    } else if (componentSelector === '61264a194b162471912edc5c') {
      component = this.factoryResolver
        .resolveComponentFactory(ContactComponent)
        .create(this.rootViewContainer.injector);

      return this.addInputsToComponent(component, inputs);
    } else if (componentSelector === '5fc8edbd4a96393107448205') {
      component = this.factoryResolver
        .resolveComponentFactory(SmallHalfInfoComponent)
        .create(this.rootViewContainer.injector);

      return this.addInputsToComponent(component, inputs);
    } else if (componentSelector === '5f32b9ef7a4aacf4d4d4c881') {
      component = this.factoryResolver
        .resolveComponentFactory(Call2actionComponent)
        .create(this.rootViewContainer.injector);

      return this.addInputsToComponent(component, inputs);
    } else if (componentSelector === '5fc8ee494a96393107448206') {
      component = this.factoryResolver
        .resolveComponentFactory(ContactComponent)
        .create(this.rootViewContainer.injector);

      return this.addInputsToComponent(component, inputs);
    } else if (componentSelector === '5f3f718e7a4aacf4d4d4c8a6') {
        component = this.factoryResolver.resolveComponentFactory(BlogTextComponent)
            .create(this.rootViewContainer.injector);

        const convertedInputs = [];

        convertedInputs.push(inputs);

        return this.addInputsToComponent(component, {paragraphs: convertedInputs});
    }
  }

  /**
   * Manages the inputs and passes them to the component where applicable
   * then returns the component ready for injection into the DOM
   */
  private addInputsToComponent(component: ComponentRef<any>, inputs?: any) {
    if (inputs && Object.entries(inputs).length) {
      for (const [key, value] of Object.entries(inputs)) {
        component.instance[key] = value;
      }
    }

    return component;
  }

  /**
   * Injects a given component into the DOM dynamically, allowing us to compose pages
   * from JSON
   */
  addDynamicComponent(componentSelector, inputs?) {
    this.rootViewContainer.insert(this.getComponentBySelector(componentSelector, inputs).hostView);
  }
}
