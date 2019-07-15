import { Directive, ElementRef, Input, AfterViewInit, HostListener   } from '@angular/core';

@Directive({
  selector: '[hilight]'
})
export class HilightDirective {
  @Input() hilightColor: string; //@input(hilight) hilightColor: string
  constructor(private el: ElementRef) {
    if(this.hilightColor == null)
      this.hilightColor = 'yellow';
  }
  ngAfterViewInit(): void {
    this.changeBackgroundColor(this.hilightColor);
  }
  @HostListener('mouseover') onMouseOver() {
    this.changeBackgroundColor('red');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.changeBackgroundColor(this.hilightColor);
  }
  private changeBackgroundColor(color: string) {
    this.el.nativeElement.style.backgroundColor = color;
  }
}
