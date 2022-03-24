function useCurrentDate() {
    const dateArray = new Date().toJSON().slice(0, 10).split('-');
    const formatDate = `${dateArray[2]}.${dateArray[1]}.${dateArray[0]}`;

    return formatDate;
}

export default useCurrentDate