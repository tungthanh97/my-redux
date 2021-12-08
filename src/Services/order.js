import { ORDER_URL } from './url';
import {
  getAllEntity,
  createEntity,
  getEntityById,
  deleteEntity,
  updateEntity,
} from './base';

export const getAllOrder = getAllEntity(ORDER_URL);

export const getOrderById = getEntityById(ORDER_URL);

export const deleteOrder = deleteEntity(ORDER_URL);

export const createOrder = createEntity(ORDER_URL);

export const updateOrder = updateEntity(ORDER_URL);
