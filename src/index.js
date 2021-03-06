import unfetch from 'unfetch';

const chicky = () => {

    const methods = [
        'get',
        'post',
        'put',
        'patch',
        'delete'
    ];

    const fly = () => {
        return methods.reduce((list, verb) =>  Object.assign({}, list, {
            [verb]: methods[verb] = verb === 'get' ?
                request.bind(null, verb.toUpperCase()) :
                requestWithBody.bind(null, verb.toUpperCase())
        }), {});
    };

    const request = (method, url, options = {}) =>
        unfetch(
            url,
            Object.assign({}, options, {
                method
            })
        );

    const requestWithBody = (method, url, body, options) =>
        request(method, url, Object.assign({}, { body }, options));

    return fly();
};

export default chicky();