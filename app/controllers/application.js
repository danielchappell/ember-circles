import Ember from 'ember';
import Circle from '../models/circle';

export default Ember.Controller.extend({
    circles: [],
    radius: null,
    area: null,
    circumference: null,
    diameter: null,
    isFormValid: Ember.computed.or('radius', 'diameter', 'circumference', 'area'),
    isFormInvalid: Ember.computed.not('isFormValid'),
    actions: {
        createCircle() {
            let options = {};
            let radius = this.get('radius');
            let area = this.get('area');
            let circumference = this.get('circumference');
            let diameter = this.get('diameter');

            if (radius) {
                options.radius = radius;
            }
            if (diameter) {
                options.diameter = diameter;
            }
            if (circumference) {
                options.circumference = circumference;
            }
            if (area) {
                options.area = area;
            }

            this.get('circles').pushObject(Circle.create(options));

            this.setProperties({
                radius: null,
                diameter: null,
                circumference: null,
                area: null
            });
        },
        removeCircle(index) {
            this.get('circles').removeAt(index, 1);
        }
    }
});
