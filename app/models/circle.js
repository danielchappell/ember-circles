import Ember from 'ember';

export default Ember.Object.extend({
    radius: null,
    diameter: Ember.computed('radius', {
        get() {
            return this.get('radius') * 2;
        },
        set(key, value) {
            this.set('radius', value / 2);
            return value;
        }
    }),
    circumference: Ember.computed('diameter', {
        get() {
            return this.get('diameter') * Math.PI;
        },
        set(key, value) {
            this.set('diameter', value / Math.PI);
            return value;
        }
    }),
    area: Ember.computed('radius', {
        get() {
            return Math.pow(this.get('radius'), 2) * Math.PI;
        },
        set(key, value) {
            this.set('radius', Math.sqrt(value / Math.PI));
            return value;
        }
    })
});
