import { ReservePipe } from './reserve.pipe';

describe('Pipe: Reservee', () => {
  it('create an instance', () => {
    let resersePipe = new ReservePipe();
    expect(resersePipe).toBeTruthy();
    expect(resersePipe.transform('hello')).toBe('olleh');
  });
});
