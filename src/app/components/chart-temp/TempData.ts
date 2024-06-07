export class TempItem {
    public constructor(init: Partial<TempItem>) {
        Object.assign(this, init);
    }

    public month!: string;
    public temp!: number;
    public room!: string;
}


export class TempData extends Array<TempItem> {
    public constructor(items: Array<TempItem> | number = -1) {
        if (Array.isArray(items)) {
            super(...items);
        } else {
            const newItems = [
                new TempItem(
                {
                    month: 'Jan',
                    temp: 20,
                    room: 'Sala 1'
                }),
                new TempItem(
                {
                    month: 'Feb',
                    temp: 25,
                    room: 'Sala 1'
                }),
                new TempItem(
                {
                    month: 'Mar',
                    temp: 22,
                    room: 'Sala 1'
                }),
                new TempItem(
                {
                    month: 'Apr',
                    temp: 30,
                    room: 'Sala 1'
                }),
                new TempItem(
                {
                    month: 'May',
                    temp: 32,
                    room: 'Sala 1'
                }),
                new TempItem(
                {
                    month: 'Jun',
                    temp: 40,
                    room: 'Sala 1'
                }),
                new TempItem(
                {
                    month: 'Jul',
                    temp: 38,
                    room: 'Sala 1'
                }),
                new TempItem(
                {
                    month: 'Aug',
                    temp: 31,
                    room: 'Sala 1'
                }),
                new TempItem(
                {
                    month: 'Sep',
                    temp: 28,
                    room: 'Sala 1'
                }),
                new TempItem(
                {
                    month: 'Oct',
                    temp: 21,
                    room: 'Sala 1'
                }),
                new TempItem(
                {
                    month: 'Nov',
                    temp: 18,
                    room: 'Sala 1'
                }),
                new TempItem(
                {
                    month: 'Dec',
                    temp: 15,
                    room: 'Sala 1'
                }),
            ];
            super(...(newItems.slice(0, items)));
        }
    }
}