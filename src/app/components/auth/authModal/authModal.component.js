import {AuthModalController} from './authModal.controller';
import authModalTemplate from './authModal.html';

export const authModal = {
  bindings: {
    modalName: '<'
  },
  template: authModalTemplate,
  controller: AuthModalController
};
