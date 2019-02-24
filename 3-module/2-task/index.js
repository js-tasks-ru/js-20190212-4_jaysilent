let calendar = {
    from: new Date('2018-01-01T15:09:10Z'),
    to: new Date('2018-02-01T10:09:10Z')
};

calendar[Symbol.iterator] = function () {

    let current = this.from;
    let end = this.to;

    return {
        next() {

            if( current < end ) {

                current.setDate( current.getDate() + 1 );

                let result = ( ~[0,6].indexOf(current.getDay()) ) ? `[${current.getDate()}]` : `${current.getDate()}` ;

                return { done: false,
                    value: result };

            } else {
                return { done: true };
            }

        }
    }

};


