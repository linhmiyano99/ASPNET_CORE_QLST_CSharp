import { AfterViewChecked, Component, ElementRef, EventEmitter, Injector, Output, ViewChild } from '@angular/core';
import { AppComponentBase } from '@shared/common/app-component-base';
// import { AppEditionExpireAction } from '@shared/AppEnums';
// import {
//     ComboboxItemDto,
//     CommonLookupServiceProxy,
//     CreateOrUpdateEditionDto,
//     EditionEditDto,
//     EditionServiceProxy
// } from '@shared/service-proxies/service-proxies';
import { ModalDirective } from 'ngx-bootstrap';
import { finalize } from 'rxjs/operators';

@Component({
    selector: 'createRouteModal',
    templateUrl: './create-route-modal-group4.component.html'
})
export class ScheduleCarModal extends AppComponentBase implements AfterViewChecked {

    @ViewChild('createRouteModal') modal: ModalDirective;

    @Output() modalSave: EventEmitter<any> = new EventEmitter<any>();

    active = false;
    saving = false;

    constructor(
        injector: Injector,
    ) {
        super(injector);
    }

    ngAfterViewChecked(): void {
        //Temporary fix for: https://github.com/valor-software/ngx-bootstrap/issues/1508
        $('tabset ul.nav').addClass('m-tabs-line');
        $('tabset ul.nav li a.nav-link').addClass('m-tabs__link');
    }

    show(editionId?: number): void {
        this.active = true;
        this.modal.show();
    }

    onShown(): void {
        // $(this.editionNameInput.nativeElement).focus();
    }

    save(): void {
        this.saving = true;
        // this._editionService.createOrUpdateEdition(input)
        //     .pipe(finalize(() => this.saving = false))
        //     .subscribe(() => {
        //         this.notify.info(this.l('SavedSuccessfully'));
        //         this.close();
        //         this.modalSave.emit(null);
        //     });
    }

    close(): void {
        this.active = false;
        this.modal.hide();
    }
}
