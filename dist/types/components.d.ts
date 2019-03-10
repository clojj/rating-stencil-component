/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import './stencil.core';




export namespace Components {

  interface MyRating {
    'maxValue': number;
    'value': number;
  }
  interface MyRatingAttributes extends StencilHTMLAttributes {
    'maxValue'?: number;
    'onOnRatingUpdated'?: (event: CustomEvent) => void;
    'value'?: number;
  }
}

declare global {
  interface StencilElementInterfaces {
    'MyRating': Components.MyRating;
  }

  interface StencilIntrinsicElements {
    'my-rating': Components.MyRatingAttributes;
  }


  interface HTMLMyRatingElement extends Components.MyRating, HTMLStencilElement {}
  var HTMLMyRatingElement: {
    prototype: HTMLMyRatingElement;
    new (): HTMLMyRatingElement;
  };

  interface HTMLElementTagNameMap {
    'my-rating': HTMLMyRatingElement
  }

  interface ElementTagNameMap {
    'my-rating': HTMLMyRatingElement;
  }


}
