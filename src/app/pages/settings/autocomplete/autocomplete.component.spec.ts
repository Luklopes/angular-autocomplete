/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AutoCompleteComponent } from './autocomplete.component';

describe('AutoCompleteComponent', () => {
    let component: AutoCompleteComponent;
    let fixture: ComponentFixture<AutoCompleteComponent>;

    beforeEach(async () => {
        await TestBed.configureTestingModule({
            declarations: [AutoCompleteComponent],
            imports: [FormsModule],
        }).compileComponents();

        fixture = TestBed.createComponent(AutoCompleteComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });

    it('should update inputValue when input changes', () => {
        const inputElement = fixture.nativeElement.querySelector('input');
        inputElement.value = 'Test Input';
        inputElement.dispatchEvent(new Event('input'));

        fixture.detectChanges();

        expect(component.inputValue).toEqual('Test Input');
    });

    it('should add a tag when Enter key is pressed', () => {
        spyOn(component, 'handleEnterKey');

        const inputElement = fixture.nativeElement.querySelector('input');
        inputElement.value = 'New Tag';
        inputElement.dispatchEvent(new KeyboardEvent('keydown', { key: 'Enter' }));

        fixture.detectChanges();

        expect(component.handleEnterKey).toHaveBeenCalled();
        expect(component.selectedTags).toContain('New Tag');
        expect(component.inputValue).toEqual('');
    });

});
