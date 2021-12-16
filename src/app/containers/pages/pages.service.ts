import { ComponentFactoryResolver, ComponentRef, Inject, Injectable, ViewContainerRef } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { HeroComponent } from '../../components/hero/hero.component';
import { HalfInfoComponent } from '../../components/half-info/half-info.component';
import { SmallHalfInfoComponent } from '../../components/small-half-info/small-half-info.component';
import { ContactComponent } from '../../components/contact/contact.component';
import {BlogTextComponent} from '../../components/blog-text/blog-text.component';
import {ParallaxComponent} from '../../components/parallax/parallax.component';
import {Call2actionComponent} from '../../components/call2action/call2action.component';
import {ColorBoxOffersComponent} from '../../components/color-box-offers/color-box-offers.component';
import {BannerWithButtonComponent} from '../../components/banner-with-button/banner-with-button.component';
import {ChristmasComponent} from '../../components/christmas/christmas.component';


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
      'https://api2.createdigitalsolutions.com/websites/5fc8b88c4a963931074481fd/pages?slug=' + slug
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

    if (componentSelector === '5fc8eaf74a96393107448203') {
      component = this.factoryResolver.resolveComponentFactory(HeroComponent).create(this.rootViewContainer.injector);

      return this.addInputsToComponent(component, inputs);
    } else if (componentSelector === '5fc8eb574a96393107448204') {
      component = this.factoryResolver
        .resolveComponentFactory(HalfInfoComponent)
        .create(this.rootViewContainer.injector);

      return this.addInputsToComponent(component, inputs);
    } else if (componentSelector === '5fc8c9024a963931074481ff') {
      component = this.factoryResolver
        .resolveComponentFactory(ParallaxComponent)
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
    } else if (componentSelector === '5fca26c44b162471912ed6e9') {
      component = this.factoryResolver
        .resolveComponentFactory(BannerWithButtonComponent)
        .create(this.rootViewContainer.injector);

      return this.addInputsToComponent(component, inputs);
    }else if (componentSelector === '5fce74714b162471912ed6f0') {
      component = this.factoryResolver
        .resolveComponentFactory(ChristmasComponent)
        .create(this.rootViewContainer.injector);

      return this.addInputsToComponent(component, inputs);
    } else if (componentSelector === '5fca21584b162471912ed6e8') {
      component = this.factoryResolver
        .resolveComponentFactory(ColorBoxOffersComponent)
        .create(this.rootViewContainer.injector);

      return this.addInputsToComponent(component, inputs);
    } else if (componentSelector === '5fd7381f4b162471912ed6f4') {
      component = this.factoryResolver
        .resolveComponentFactory(HalfInfoComponent)
        .create(this.rootViewContainer.injector);

      return this.addInputsToComponent(component, inputs);
    } else if (componentSelector === '5fc8ee494a96393107448206') {
      component = this.factoryResolver
        .resolveComponentFactory(ContactComponent)
        .create(this.rootViewContainer.injector);

      return this.addInputsToComponent(component, inputs);
    } else if (componentSelector === '5fc8ea184a96393107448202') {
      component = this.factoryResolver
        .resolveComponentFactory(Call2actionComponent)
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
