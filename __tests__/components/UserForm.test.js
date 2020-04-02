import React from "react";
import { shallow } from 'enzyme';
import { UserForm } from "../../src/components/UserForm";

describe('<UserForm />', () =>
{
    it('should shallowly render without errors', () => {
        const userInfoName = 'Rias Gremory';
        const userFormInfoName = 'Rias-Chan~';
        const userInfo = {
            name: userInfoName,
        };
        const userFormInfo = {
            name: userFormInfoName,
        };
        const wrapper = shallow(
            <UserForm
                info={userInfo}
                form={userFormInfo}
                submitUserInfoAction={() => false}
                updateUserInfoFormAction={() => false}
            />
        );
        const inputSelector = 'input.inputUserFormName';
        const inputUserFormName = wrapper.find(inputSelector);

        expect(inputUserFormName).toHaveLength(1);
        expect(inputUserFormName.prop('value')).toEqual(userFormInfoName);
    });
});
