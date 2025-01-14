import { Directive, TemplateRef } from '@angular/core';
import { CdkFooterCellDef } from '@angular/cdk/table';

@Directive({
  standalone: true,
  selector: '[brnFooterDef]',
  exportAs: 'brnFooterDef',
})
export class BrnFooterDefDirective extends CdkFooterCellDef {
  constructor(public override template: TemplateRef<unknown>) {
    super(template);
  }
}
