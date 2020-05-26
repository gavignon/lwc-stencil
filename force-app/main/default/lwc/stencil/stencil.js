/*
    @author Gil Avignon
    @date 2020-05-25
    @description Stencil component for skeleton loading
*/
import { LightningElement, track, wire, api } from 'lwc';

export default class Stencil extends LightningElement {
    @api animated=false;
    @api width;
    @api height;
    @api color;
    @api customClass;
    @api radius;
    
    get componentStyle(){
        let compStyle = '';
        if(this.width !== undefined){
            compStyle += 'width:' + this.width + ';';
        }
        if(this.height !== undefined){
            compStyle += 'height:' + this.height + ';';
        }
        if(this.radius !== undefined){
            compStyle += 'border-radius:' + this.radius + ';';
        }

        return compStyle;
    }

    get componentClass(){
        let compClass = 'stencil';
        if(this.animated){
            compClass += ' animated';
        }
        if(this.customClass !== undefined){
            compClass += ' ' + this.customClass;
        }

        return compClass;
    }
}