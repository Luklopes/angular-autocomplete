import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
    standalone: true,
    imports: [CommonModule],
    templateUrl: './autocomplete.component.html',
    styleUrls: ['./autocomplete.component.css'],
})
export class AutoCompleteComponent {
    inputValue = '';
    suggestions: string[] = [];
    selectedTags: string[] = [];

    handleInputChange(value: string): void {
        this.inputValue = value;
        console.log('Input value changed:', this.inputValue);

        const fakeSuggestions = ['Angular', 'React', 'Vue', 'TypeScript', 'HTML', 'CSS'];
        this.suggestions = fakeSuggestions.filter((suggestion) =>
            suggestion.toLowerCase().includes(this.inputValue.toLowerCase()),
        );
    }

    handleEnterKey(): void {
        if (this.inputValue.trim() !== '') {
            console.log('Value to be added:', this.inputValue);

            const isTagSelected = this.selectedTags.includes(this.inputValue);
            if (!isTagSelected) {
                this.selectedTags.push(this.inputValue);
                console.log('Tag added successfully.');
            } else {
                console.log('Tag already exists.');
            }

            this.inputValue = '';
        }
    }

    handleKeyDown(event: KeyboardEvent): void {
        console.log('Key pressed:', event.key);
        console.log('Key pressed:', event);

        if (event.key === 'Enter') {
            this.handleEnterKey();
        } else if (event.key === 'Backspace' && this.inputValue === '' && this.selectedTags.length > 0) {
            this.selectedTags.pop();
            console.log('Last tag removed.');
        }
    }

    handleTagClick(tag: string): void {
        this.selectedTags = this.selectedTags.filter((selectedTag) => selectedTag !== tag);
    }

    handleSuggestionClick(suggestion: string): void {
        const isTagSelected = this.selectedTags.includes(suggestion);

        if (!isTagSelected) {
            this.selectedTags.push(suggestion);
            this.inputValue = '';
        }
    }
}
