
/**
 * 将对象转换为表单格式数据
 * @param {Object} data 需要转换的表单数据
 */
export default function (data) {
    return Object.keys(data)
        .map((key) => {
            return (
                encodeURIComponent(key) +
                "=" +
                encodeURIComponent(data[key])
            );
        })
        .join("&");
}