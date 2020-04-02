import React from "react";
import { shallow } from 'enzyme';
import { Sitsit, createTables } from "../../src/components/Sitsit";

describe('<Sitsit />', () =>
{
    it('should shallowly render without errors', () => {
        const nTables = 10;
        const tables = createTables(nTables);
        const wrapper = shallow(
            <Sitsit
                tables={tables}
                numberOfTables={nTables}
            />
        );
        expect(wrapper.find('.tablesDiv')).toHaveLength(1);
    });
});
