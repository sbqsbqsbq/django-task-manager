import apiRequest from './apiRequest';

// 모든 태스크를 가져오는 API 함수
export const getTasks = async () => {
    const response = await apiRequest.get('/');
    return response.data;
};

// 새로운 태스크를 생성하는 API 함수
export const createTask = async (task) => {
    const response = await apiRequest.post('/', task);
    return response.data;
};

// 기존 태스크를 업데이트하는 API 함수
export const updateTask = async (id, task) => {
    const response = await apiRequest.put(`/${id}`, task);
    return response.data;
};

// 기존 태스크를 삭제하는 API 함수
export const deleteTask = async (id) => {
    const response = await apiRequest.delete(`/delete/${id}`);
    return response.data;
};

export const markAsDone = async (id) => {
    const response = await apiRequest.put(`/done/${id}`);
    return response.data;
};