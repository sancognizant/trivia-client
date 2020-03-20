
/*
import images from public folder using fetch api for respective components 
*/ 
const getDashBoardImages = () => {
    return fetch('./jsonFiles/dashBoardImages.json', {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }

    })
        .then(response => response.json())
        .then(response => {
            return response;
        });
};

const getAnalyticsImages = () => {
    return fetch('./jsonFiles/analyticsImages.json', {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }

    })
        .then(response => response.json())
        .then(response => {
            return response;
        });
};

const getCloudImages = () => {
    return fetch('./jsonFiles/cloudImages.json', {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }

    })
        .then(response => response.json())
        .then(response => {
            return response;
        });
};

const getCyberSecurityImages = () => {
    return fetch('./jsonFiles/cyberSecurityImages.json', {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }

    })
        .then(response => response.json())
        .then(response => {
            return response;
        });
};

const getdataScienceImages = () => {
    return fetch('./jsonFiles/dataScienceImages.json', {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }

    })
        .then(response => response.json())
        .then(response => {
            return response;
        });
};

const getMobileImages = () => {
    return fetch('./jsonFiles/mobileImages.json', {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }

    })
        .then(response => response.json())
        .then(response => {
            return response;
        });
};

const getTestingImages = () => {
    return fetch('./jsonFiles/testingImages.json', {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }

    })
        .then(response => response.json())
        .then(response => {
            return response;
        });
};
const getUIImages = () => {
    return fetch('./jsonFiles/uiImages.json', {
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        }

    })
        .then(response => response.json())
        .then(response => {
            return response;
        });
};



export {getDashBoardImages, getAnalyticsImages,
     getCloudImages, getCyberSecurityImages,
      getdataScienceImages, getMobileImages, getTestingImages, getUIImages};
