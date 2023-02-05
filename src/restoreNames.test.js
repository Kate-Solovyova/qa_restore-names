'use strict';

describe('restoreNames', () => {
  const { restoreNames } = require('./restoreNames');
  
  it(`should be declared`, () => {
    expect(restoreNames)
      .toBeInstanceOf(Function);
  });

  it('result should have firstName', () => {
    const users = [
      {
        firstName: undefined,
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
      {
        lastName: 'Adams',
        fullName: 'Mike Adams',
      },
    ];
    
    restoreNames(users);
    
    expect(users)
      .toEqual([
        {
          firstName: 'Jack',
          lastName: 'Holy',
          fullName: 'Jack Holy',
        },
        {
          firstName: 'Mike',
          lastName: 'Adams',
          fullName: 'Mike Adams',
        },
      ]);
  });

  it('negative case: if firstname is set, should not change firstName', () => {
    const users = [
      {
        firstName: 'Kate',
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];
    
    restoreNames(users);
    
    expect(users)
      .toEqual([
        {
          firstName: 'Kate',
          lastName: 'Holy',
          fullName: 'Jack Holy',
        },
      ]);
  });

  it('negative case: if firstname is number, should not change firstName', () => {
    const users = [
      {
        firstName: 666,
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];
    
    restoreNames(users);
    
    expect(users)
      .toEqual([
        {
          firstName: 666,
          lastName: 'Holy',
          fullName: 'Jack Holy',
        },
      ]);
  });

  it('if firstname is empty string, should have firstName', () => {
    const users = [
      {
        firstName: '',
        lastName: 'Holy',
        fullName: 'Jack Holy',
      },
    ];
    
    restoreNames(users);
    
    expect(users)
      .toEqual([
        {
          firstName: 'Jack',
          lastName: 'Holy',
          fullName: 'Jack Holy',
        },
      ]);
  });
  
});
