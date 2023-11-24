export interface paths {
  "/v1/voucher/promotion-voucher/{voucher_id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put: operations["updatePromotionVoucher"];
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/voucher/event-voucher/{voucher_id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put: operations["updateEventVoucher"];
    post?: never;
    delete: operations["deleteEventVoucher"];
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/verification/code-resend": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put: operations["resendCode"];
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/verification/code-confirm/{code}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put: operations["confirmCode"];
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/user/current": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["getCurrentUser"];
    put: operations["updateCurrentUser"];
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/user/current/password-update/process": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put: operations["updatePassword"];
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/user/current/password-update/code-request": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put: operations["requestCodeForUpdatingPassword"];
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/user/bank-accounts/{bank_account_id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put: operations["updateBankAccountById"];
    post?: never;
    delete: operations["deleteBankAccountById"];
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/ta/current": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["getCurrentTA"];
    put: operations["updateCurrentTA"];
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/register/ta": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put: operations["updateTARegistration"];
    post: operations["registerTA"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/private-group/teaching-register": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put: operations["registerTeachingPrivateGroup"];
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/password-forget/account/{email}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put: operations["getAccountByEmailToChangePassword"];
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/password-forget/account/{email}/new-password": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put: operations["updatePasswordWhenForgetting"];
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/password-forget/account/{email}/code-resend": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put: operations["resendCodeForChangingPasswordWhenForgetting"];
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/password-forget/account/{email}/code-confirm/{code}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put: operations["confirmCodeForChangingPasswordWhenForgetting"];
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/manager/unban/ta/{user_id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put: operations["unbanTaById"];
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/manager/unban/student/{user_id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put: operations["unbanStudentById"];
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/manager/unban/manager_account/{manager_id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put: operations["unbanManagerById"];
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/manager/ta/registration/reject": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put: operations["rejectTARegistration"];
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/manager/ta/registration/confirm": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put: operations["confirmTARegistration"];
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/manager/manager_account/{manager_id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put: operations["updateOtherManagerAccount"];
    post?: never;
    delete: operations["deleteManagerById"];
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/manager/current": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["getCurrentManager"];
    put: operations["updateCurrentManager"];
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/manager/ban/ta/{user_id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put: operations["banTaById"];
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/manager/ban/student/{user_id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put: operations["banStudentById"];
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/manager/ban/manager_account/{manager_id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put: operations["banManagerById"];
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/institution/{institution_id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["getInstitutionById"];
    put: operations["updateInstitutionById"];
    post?: never;
    delete: operations["deleteInstitutionById"];
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/institution/major/{major_id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["getMajorById"];
    put: operations["updateMajorById"];
    post?: never;
    delete: operations["deleteMajorById"];
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/institution/major/subject/{subject_id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["getSubjectById"];
    put: operations["updateSubjectById"];
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/institution/major/subject/{subject_id}/restore": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put: operations["restoreSubjectById"];
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/institution/major/subject/{subject_id}/hide": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put: operations["hideSubjectById"];
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/google/register/institution": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put: operations["registerInstitution"];
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/fixed-classroom/{class_id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["getFixedClassroomById"];
    put: operations["updateFixedClassroom"];
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/fixed-classroom/teaching-register": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put: operations["registerTeachingFixedClassroom"];
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/fixed-classroom/reopen/{class_id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put: operations["reopenCanceledFixedClassroom"];
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/fixed-classroom/cancel/{class_id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put: operations["cancelFixedClassroom"];
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/discount/{discount_id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["getDiscountById"];
    put: operations["updateDiscountById"];
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/voucher/event-voucher": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["getAllEventVouchers"];
    put?: never;
    post: operations["createEventVoucher"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/user/bank-accounts": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["getCurrentBankAccounts"];
    put?: never;
    post: operations["addMoreBankAccount"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/register/student": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post: operations["registerStudent"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/private-group": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["getAllPrivateGroups"];
    put?: never;
    post: operations["createPrivateGroup"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/manager/manager-account": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post: operations["createManagerAccount"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/login": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post: operations["loginUser"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/login/google": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post: operations["loginUserViaGoogle"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/institution": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["getAllInstitutions"];
    put?: never;
    post: operations["createInstitution"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/institution/major": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post: operations["createMajor"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/institution/major/subject": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post: operations["createSubject"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/fixed-classroom": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["getAllFixedClassroom"];
    put?: never;
    post: operations["createFixedClassroom"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/fixed-classroom/study-register": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["getAllStudyingRegistrationOfCurrentStudent"];
    put?: never;
    post: operations["registerStudyingFixedClassroom"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/discount": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["getAllDiscounts"];
    put?: never;
    post: operations["createDiscount"];
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/welcome": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["welcomeUser"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/voucher/{voucher_id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["getVoucherById"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/voucher/promotion-voucher": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["getAllPromotionVouchers"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/user/{userId}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["getUserById"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/ta": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["getAllTAs"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/ta/{user_id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["getTAById"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/study-location": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["getStudyLocationList"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/study-location/{study_location_id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["getStudyLocationById"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/student": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["getAllStudents"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/student/{user_id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["getStudentById"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/student/current": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["getCurrentStudent"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/role": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["getAllRole"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/role/{role_id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["getRoleById"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/register/ta/current": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["getCurrentTARegistration"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/private-group/{group_id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["getPrivateById"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/payment": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["getPaymentList"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/payment/{payment_id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["getPaymentById"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/new-access-token": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    /**
     * Get new Access token by Refresh token
     * @description Include refresh token as bearer token in request header to get new access token together with new refresh token
     */
    get: operations["getNewAccessTokenFromRefreshToken"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/manager/{manager_id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["getManagerById"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/manager/ta/registration": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["getAllTARegistrations"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/manager/ta/registration/{ta_id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["getTARegistrationById"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/manager/all": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["getAllManagers"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/institution/{institution_id}/major": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["getAllMajorsOfInstitution"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/institution/major/{major_id}/subject": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["getAllSubjectsOfMajor"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/fixed-classroom/study-register/{class_id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["getStudyingRegistrationOfCurrentStudentById"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/department": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["getAllDepartments"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/department/{department_id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get: operations["getDepartmentById"];
    put?: never;
    post?: never;
    delete?: never;
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/manager/ta/{user_id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post?: never;
    delete: operations["deleteTaById"];
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
  "/v1/manager/student/{user_id}": {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    get?: never;
    put?: never;
    post?: never;
    delete: operations["deleteStudentById"];
    options?: never;
    head?: never;
    patch?: never;
    trace?: never;
  };
}
export type webhooks = Record<string, never>;
export interface components {
  schemas: {
    CreatedByResponse: {
      /** Format: uuid */
      userId?: string;
      fullName?: string;
      phoneNumber?: string;
      email?: string;
      avatar?: string;
      /** @enum {string} */
      status?:
        | "DELETED"
        | "BANNED"
        | "VERIFICATION_REQUIRED"
        | "INSTITUTION_REQUIRED"
        | "FULL_INFORMATION_REQUIRED"
        | "SUCCEED";
      enabled?: boolean;
      roleId?: string;
      permissions?: string[];
    };
    PromotionVoucherResponse: {
      voucherResponse?: components["schemas"]["VoucherResponse"];
      /** Format: int32 */
      usedQuantity?: number;
      /** Format: int32 */
      numberOfStudying?: number;
    };
    VoucherResponse: {
      /** Format: int32 */
      voucherId?: number;
      content?: string;
      /** @enum {string} */
      valueType?: "PERCENTAGE" | "EXACT_MONEY";
      value?: number;
      maxRange?: number;
      code?: string;
      /** @enum {string} */
      voucherType?: "EVENT_VOUCHER" | "PROMOTION_VOUCHER";
      forInstitutions?: string[];
      forClassTypes?: string[];
      /** Format: date-time */
      createdAt?: Date;
      createdBy?: components["schemas"]["CreatedByResponse"];
    };
    CreateEventVoucherRequest: {
      content?: string;
      /** @enum {string} */
      valueType: "PERCENTAGE" | "EXACT_MONEY";
      value: number;
      maxRange?: number;
      code: string;
      /** @description Including conditions: for institutions */
      forInstitutions: string[];
      /** @description Including conditions: for class types */
      forClassTypes: string[];
      /** Format: date-time */
      validFrom: Date;
      /** Format: date-time */
      validThru: Date;
      /** Format: int32 */
      totalQuantity?: number;
      minRange?: number;
    };
    EventVoucherResponse: {
      voucherResponse?: components["schemas"]["VoucherResponse"];
      /** Format: date-time */
      validFrom?: Date;
      /** Format: date-time */
      validThru?: Date;
      /** Format: int32 */
      totalQuantity?: number;
      /** Format: int32 */
      usedQuantity?: number;
      minRange?: number;
    };
    GeneralResponseObject: {
      returnObject?: Record<string, never>;
      message?: string;
    };
    UpdateUserRequest: {
      fullName: string;
      phoneNumber: string;
      avatar?: string;
      description?: string;
      /** @enum {string} */
      gender: "MALE" | "FEMALE";
    };
    UserResponse: {
      /** Format: uuid */
      userId?: string;
      institutionId?: string;
      institutionName?: string;
      fullName?: string;
      phoneNumber?: string;
      email?: string;
      avatar?: string;
      description?: string;
      /** @enum {string} */
      gender?: "MALE" | "FEMALE";
      /** Format: date-time */
      createdAt?: Date;
      /** Format: date-time */
      updatedAt?: Date;
      /** @enum {string} */
      status?:
        | "DELETED"
        | "BANNED"
        | "VERIFICATION_REQUIRED"
        | "INSTITUTION_REQUIRED"
        | "FULL_INFORMATION_REQUIRED"
        | "SUCCEED";
      enabled?: boolean;
      roleId?: string;
      permissions?: string[];
      havingPassword?: boolean;
    };
    ChangePasswordRequest: {
      /** @description Required when forgetting password */
      signature: string;
      /** @description Can be omitted when using for forgetting password */
      oldPassword?: string;
      newPassword: string;
      confirmNewPassword: string;
    };
    RegisterTARequest: {
      studentCode: string;
      linkFacebook: string;
      usedToBeTA?: boolean;
      teachingExperience?: string;
      personalImage?: string;
      /** @description This field is required when registering to be TA */
      subjectRegisters: components["schemas"]["SubjectRegister"][];
      /** @description Not required when registering. When updating registration and updating TA info, this field cannot be used */
      referenceTAPhoneNumber?: string;
    };
    /** @description This field is required when registering to be TA */
    SubjectRegister: {
      /** Format: int32 */
      subjectId: number;
      gpa: number;
      linkResource: string;
    };
    TARegistrationResponse: {
      userResponse?: components["schemas"]["UserResponse"];
      studentCode?: string;
      linkFacebook?: string;
      referenceTAPhoneNumber?: string;
      referenceTAName?: string;
      usedToBeTA?: boolean;
      teachingExperience?: string;
      personalImage?: string;
      /** Format: int32 */
      numberOfRegisteredSubjects?: number;
      taSubjectRegisters?: components["schemas"]["TASubjectRegisterResponse"][];
      /** Format: date-time */
      createdAt?: Date;
      /** @enum {string} */
      status?: "PENDING" | "FAIL" | "SUCCEED" | "CANCEL";
    };
    TASubjectRegisterResponse: {
      /** Format: int32 */
      taSubjectRegisterId?: number;
      /** Format: int32 */
      subjectId?: number;
      subjectName?: string;
      gpa?: number;
      linkResource?: string;
      confirmed?: boolean;
      /** Format: date-time */
      createdAt?: Date;
    };
    VerifyTARequest: {
      /** Format: uuid */
      taId: string;
      message?: string;
      /** @description Required when confirm TA request */
      contractLink: string;
    };
    CreateInstitutionRequest: {
      /** @description Only required when create new institution */
      institutionId: string;
      name: string;
      image?: string;
      description?: string;
    };
    InstitutionResponse: {
      institutionId?: string;
      name?: string;
      description?: string;
      image?: string;
      status?: boolean;
      /** Format: int32 */
      numberOfMajors?: number;
    };
    CreateMajorRequest: {
      name: string;
      description?: string;
      /** @description Only required when create new major in an institution */
      institutionId: string;
    };
    MajorResponse: {
      /** Format: int32 */
      majorId?: number;
      name?: string;
      description?: string;
      institutionId?: string;
      institutionName?: string;
      status?: boolean;
      /** Format: int32 */
      numberOfSubjects?: number;
    };
    CreateSubjectRequest: {
      name: string;
      subjectCode?: string;
      description?: string;
      /**
       * Format: int32
       * @description Not required, default is 1
       * @example 1
       */
      recommendedSessionNumber?: number;
      resource?: string;
      exams?: string;
      ebook?: string;
      image?: string;
      /**
       * Format: int32
       * @description Only required when create new subject
       */
      majorId: number;
    };
    SubjectResponse: {
      /** Format: int32 */
      subjectId?: number;
      name?: string;
      subjectCode?: string;
      description?: string;
      /** Format: int32 */
      recommendedSessionNumber?: number;
      resource?: string;
      exams?: string;
      ebook?: string;
      image?: string;
      /** Format: int32 */
      majorId?: number;
      majorName?: string;
      institutionId?: string;
      institutionName?: string;
      status?: boolean;
    };
    RegisterInstitutionRequest: {
      institutionId: string;
    };
    CreateDiscountRequest: {
      content?: string;
      /** @enum {string} */
      valueType: "PERCENTAGE" | "EXACT_MONEY";
      value: number;
      /** Format: date-time */
      validFrom: Date;
      /** Format: date-time */
      validThru: Date;
      /** @description Including conditions: for institutions */
      forInstitutions: string[];
      /** @description Including conditions: for class types */
      forClassTypes: string[];
    };
    DiscountResponse: {
      /** Format: int32 */
      discountId?: number;
      content?: string;
      /** @enum {string} */
      valueType?: "PERCENTAGE" | "EXACT_MONEY";
      value?: number;
      /** Format: date-time */
      validFrom?: Date;
      /** Format: date-time */
      validThru?: Date;
      forInstitutions?: string[];
      forClassTypes?: string[];
      /** Format: date-time */
      createdAt?: Date;
      createdBy?: components["schemas"]["CreatedByResponse"];
    };
    RegisterUserRequest: {
      /** @example example@gmail.com */
      email: string;
      password: string;
      confirmPassword: string;
      institutionId: string;
    };
    GeneralResponseLoginResponse: {
      returnObject?: components["schemas"]["LoginResponse"];
      message?: string;
    };
    LoginResponse: {
      accessToken?: string;
      refreshToken?: string;
      userResponse?: components["schemas"]["UserResponse"];
    };
    CreateManagerRequest: {
      /** @example example@gmail.com */
      email: string;
      password?: string;
      roleId: string;
      departmentId?: string;
      position?: string;
      contractLink?: string;
    };
    BankAccountResponse: {
      /** Format: int32 */
      bankAccountId?: number;
      name?: string;
      bankTypeId?: string;
      bankAccountNumber?: string;
      phoneNumber?: string;
      note?: string;
      status?: boolean;
    };
    DepartmentResponse: {
      departmentId?: string;
      departmentName?: string;
      note?: string;
      status?: boolean;
    };
    ManagerResponse: {
      userResponse?: components["schemas"]["UserResponse"];
      linkFacebook?: string;
      departmentResponse?: components["schemas"]["DepartmentResponse"];
      position?: string;
      contractLink?: string;
      bankAccountResponses?: components["schemas"]["BankAccountResponse"][];
    };
    LoginRequest: {
      idToken: string;
      /** @example aladin@gmail.com */
      email: string;
      /** @example aladin */
      password: string;
    };
    PageResponsePromotionVoucherPromotionVoucherResponse: {
      /** Format: int32 */
      totalPages?: number;
      /** Format: int32 */
      pageNumber?: number;
      /** Format: int32 */
      pageSize?: number;
      /** Format: int64 */
      totalElements?: number;
      list?: components["schemas"]["PromotionVoucherResponse"][];
    };
    PageResponseEventVoucherEventVoucherResponse: {
      /** Format: int32 */
      totalPages?: number;
      /** Format: int32 */
      pageNumber?: number;
      /** Format: int32 */
      pageSize?: number;
      /** Format: int64 */
      totalElements?: number;
      list?: components["schemas"]["EventVoucherResponse"][];
    };
    TAResponse: {
      userResponse?: components["schemas"]["UserResponse"];
      studentCode?: string;
      linkFacebook?: string;
      referenceTAPhoneNumber?: string;
      referenceTAName?: string;
      usedToBeTA?: boolean;
      teachingExperience?: string;
      personalImage?: string;
      receivedAllowance?: number;
      upcomingAllowance?: number;
      /** @enum {string} */
      allowanceStatus?: "DONE" | "UPCOMING";
      /** Format: int32 */
      numberOfGroupTaught?: number;
      /** Format: int32 */
      numberOfClassTaught?: number;
      /** Format: int32 */
      numberOfRegisteredSubjects?: number;
      /** Format: date-time */
      createdAt?: Date;
      contractLink?: string;
      /** Format: date-time */
      signedAt?: Date;
      /** @enum {string} */
      status?: "PENDING" | "FAIL" | "SUCCEED" | "CANCEL";
      bankAccountResponses?: components["schemas"]["BankAccountResponse"][];
      taSubjectRegisters?: components["schemas"]["TASubjectRegisterResponse"][];
      tacode?: string;
    };
    PageResponseStudyLocationStudyLocationResponse: {
      /** Format: int32 */
      totalPages?: number;
      /** Format: int32 */
      pageNumber?: number;
      /** Format: int32 */
      pageSize?: number;
      /** Format: int64 */
      totalElements?: number;
      list?: components["schemas"]["StudyLocationResponse"][];
    };
    StudyLocationResponse: {
      /** Format: int32 */
      studyLocationId?: number;
      /** @enum {string} */
      method?: "ONLINE" | "OFFLINE";
      name?: string;
      address?: string;
      institutionIds?: string[];
    };
    PageResponseStudentStudentResponse: {
      /** Format: int32 */
      totalPages?: number;
      /** Format: int32 */
      pageNumber?: number;
      /** Format: int32 */
      pageSize?: number;
      /** Format: int64 */
      totalElements?: number;
      list?: components["schemas"]["StudentResponse"][];
    };
    StudentResponse: {
      userResponse?: components["schemas"]["UserResponse"];
      /** Format: int32 */
      studiedNumber?: number;
      totalSpending?: number;
    };
    PageResponseRoleRoleResponse: {
      /** Format: int32 */
      totalPages?: number;
      /** Format: int32 */
      pageNumber?: number;
      /** Format: int32 */
      pageSize?: number;
      /** Format: int64 */
      totalElements?: number;
      list?: components["schemas"]["RoleResponse"][];
    };
    RoleResponse: {
      roleId?: string;
      name?: string;
      description?: string;
      permissions?: string[];
      status?: boolean;
    };
    PageResponseTeachingAssistantTARegistrationResponse: {
      /** Format: int32 */
      totalPages?: number;
      /** Format: int32 */
      pageNumber?: number;
      /** Format: int32 */
      pageSize?: number;
      /** Format: int64 */
      totalElements?: number;
      list?: components["schemas"]["TARegistrationResponse"][];
    };
    PageResponseManagerManagerResponse: {
      /** Format: int32 */
      totalPages?: number;
      /** Format: int32 */
      pageNumber?: number;
      /** Format: int32 */
      pageSize?: number;
      /** Format: int64 */
      totalElements?: number;
      list?: components["schemas"]["ManagerResponse"][];
    };
    PageResponseInstitutionInstitutionResponse: {
      /** Format: int32 */
      totalPages?: number;
      /** Format: int32 */
      pageNumber?: number;
      /** Format: int32 */
      pageSize?: number;
      /** Format: int64 */
      totalElements?: number;
      list?: components["schemas"]["InstitutionResponse"][];
    };
    PageResponseMajorMajorResponse: {
      /** Format: int32 */
      totalPages?: number;
      /** Format: int32 */
      pageNumber?: number;
      /** Format: int32 */
      pageSize?: number;
      /** Format: int64 */
      totalElements?: number;
      list?: components["schemas"]["MajorResponse"][];
    };
    PageResponseSubjectSubjectResponse: {
      /** Format: int32 */
      totalPages?: number;
      /** Format: int32 */
      pageNumber?: number;
      /** Format: int32 */
      pageSize?: number;
      /** Format: int64 */
      totalElements?: number;
      list?: components["schemas"]["SubjectResponse"][];
    };
    PageResponseDiscountDiscountResponse: {
      /** Format: int32 */
      totalPages?: number;
      /** Format: int32 */
      pageNumber?: number;
      /** Format: int32 */
      pageSize?: number;
      /** Format: int64 */
      totalElements?: number;
      list?: components["schemas"]["DiscountResponse"][];
    };
    PageResponseDepartmentDepartmentResponse: {
      /** Format: int32 */
      totalPages?: number;
      /** Format: int32 */
      pageNumber?: number;
      /** Format: int32 */
      pageSize?: number;
      /** Format: int64 */
      totalElements?: number;
      list?: components["schemas"]["DepartmentResponse"][];
    };
  };
  responses: never;
  parameters: never;
  requestBodies: never;
  headers: never;
  pathItems: never;
}
export type $defs = Record<string, never>;
export interface operations {
  updatePromotionVoucher: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        voucher_id: number;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": components["schemas"]["PromotionVoucherResponse"];
        };
      };
    };
  };
  updateEventVoucher: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        voucher_id: number;
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["CreateEventVoucherRequest"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": components["schemas"]["EventVoucherResponse"];
        };
      };
    };
  };
  deleteEventVoucher: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        voucher_id: number;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": components["schemas"]["GeneralResponseObject"];
        };
      };
    };
  };
  resendCode: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": components["schemas"]["GeneralResponseObject"];
        };
      };
    };
  };
  confirmCode: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        code: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": components["schemas"]["GeneralResponseObject"];
        };
      };
    };
  };
  getCurrentUser: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": components["schemas"]["UserResponse"];
        };
      };
    };
  };
  updateCurrentUser: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["UpdateUserRequest"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": components["schemas"]["UserResponse"];
        };
      };
    };
  };
  updatePassword: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["ChangePasswordRequest"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": components["schemas"]["GeneralResponseObject"];
        };
      };
    };
  };
  requestCodeForUpdatingPassword: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["ChangePasswordRequest"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": components["schemas"]["GeneralResponseObject"];
        };
      };
    };
  };
  updateBankAccountById: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": Record<string, never>;
        };
      };
    };
  };
  deleteBankAccountById: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": Record<string, never>;
        };
      };
    };
  };
  getCurrentTA: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": components["schemas"]["TAResponse"];
        };
      };
    };
  };
  updateCurrentTA: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": Record<string, never>;
        };
      };
    };
  };
  updateTARegistration: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["RegisterTARequest"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": components["schemas"]["TARegistrationResponse"];
        };
      };
    };
  };
  registerTA: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["RegisterTARequest"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": components["schemas"]["TARegistrationResponse"];
        };
      };
    };
  };
  registerTeachingPrivateGroup: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": Record<string, never>;
        };
      };
    };
  };
  getAccountByEmailToChangePassword: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        email: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": components["schemas"]["GeneralResponseObject"];
        };
      };
    };
  };
  updatePasswordWhenForgetting: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        email: string;
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["ChangePasswordRequest"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": components["schemas"]["GeneralResponseObject"];
        };
      };
    };
  };
  resendCodeForChangingPasswordWhenForgetting: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        email: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": components["schemas"]["GeneralResponseObject"];
        };
      };
    };
  };
  confirmCodeForChangingPasswordWhenForgetting: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        email: string;
        code: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": components["schemas"]["GeneralResponseObject"];
        };
      };
    };
  };
  unbanTaById: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": Record<string, never>;
        };
      };
    };
  };
  unbanStudentById: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": Record<string, never>;
        };
      };
    };
  };
  unbanManagerById: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": Record<string, never>;
        };
      };
    };
  };
  rejectTARegistration: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["VerifyTARequest"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": components["schemas"]["GeneralResponseObject"];
        };
      };
    };
  };
  confirmTARegistration: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["VerifyTARequest"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": components["schemas"]["GeneralResponseObject"];
        };
      };
    };
  };
  updateOtherManagerAccount: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": Record<string, never>;
        };
      };
    };
  };
  deleteManagerById: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": Record<string, never>;
        };
      };
    };
  };
  getCurrentManager: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": components["schemas"]["ManagerResponse"];
        };
      };
    };
  };
  updateCurrentManager: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": Record<string, never>;
        };
      };
    };
  };
  banTaById: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": Record<string, never>;
        };
      };
    };
  };
  banStudentById: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": Record<string, never>;
        };
      };
    };
  };
  banManagerById: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": Record<string, never>;
        };
      };
    };
  };
  getInstitutionById: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        institution_id: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": components["schemas"]["InstitutionResponse"];
        };
      };
    };
  };
  updateInstitutionById: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        institution_id: string;
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["CreateInstitutionRequest"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": components["schemas"]["InstitutionResponse"];
        };
      };
    };
  };
  deleteInstitutionById: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        institution_id: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": components["schemas"]["GeneralResponseObject"];
        };
      };
    };
  };
  getMajorById: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        major_id: number;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": components["schemas"]["MajorResponse"];
        };
      };
    };
  };
  updateMajorById: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        major_id: number;
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["CreateMajorRequest"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": components["schemas"]["MajorResponse"];
        };
      };
    };
  };
  deleteMajorById: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        major_id: number;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": components["schemas"]["GeneralResponseObject"];
        };
      };
    };
  };
  getSubjectById: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        subject_id: number;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": components["schemas"]["SubjectResponse"];
        };
      };
    };
  };
  updateSubjectById: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        subject_id: number;
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["CreateSubjectRequest"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": components["schemas"]["SubjectResponse"];
        };
      };
    };
  };
  restoreSubjectById: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        subject_id: number;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": components["schemas"]["GeneralResponseObject"];
        };
      };
    };
  };
  hideSubjectById: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        subject_id: number;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": components["schemas"]["GeneralResponseObject"];
        };
      };
    };
  };
  registerInstitution: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["RegisterInstitutionRequest"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": components["schemas"]["UserResponse"];
        };
      };
    };
  };
  getFixedClassroomById: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": Record<string, never>;
        };
      };
    };
  };
  updateFixedClassroom: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": Record<string, never>;
        };
      };
    };
  };
  registerTeachingFixedClassroom: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": Record<string, never>;
        };
      };
    };
  };
  reopenCanceledFixedClassroom: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": Record<string, never>;
        };
      };
    };
  };
  cancelFixedClassroom: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": Record<string, never>;
        };
      };
    };
  };
  getDiscountById: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        discount_id: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": components["schemas"]["DiscountResponse"];
        };
      };
    };
  };
  updateDiscountById: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        discount_id: string;
      };
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["CreateDiscountRequest"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": components["schemas"]["DiscountResponse"];
        };
      };
    };
  };
  getAllEventVouchers: {
    parameters: {
      query?: {
        /** @description Zero-based page index (0..N) */
        page?: number;
        /** @description The size of the page to be returned */
        size?: number;
        /** @description Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
        sort?: string[];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": components["schemas"]["PageResponseEventVoucherEventVoucherResponse"];
        };
      };
    };
  };
  createEventVoucher: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["CreateEventVoucherRequest"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": components["schemas"]["EventVoucherResponse"];
        };
      };
    };
  };
  getCurrentBankAccounts: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": Record<string, never>;
        };
      };
    };
  };
  addMoreBankAccount: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": Record<string, never>;
        };
      };
    };
  };
  registerStudent: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["RegisterUserRequest"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": components["schemas"]["GeneralResponseLoginResponse"];
        };
      };
    };
  };
  getAllPrivateGroups: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": Record<string, never>;
        };
      };
    };
  };
  createPrivateGroup: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": Record<string, never>;
        };
      };
    };
  };
  createManagerAccount: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["CreateManagerRequest"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": components["schemas"]["ManagerResponse"];
        };
      };
    };
  };
  loginUser: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["LoginRequest"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": components["schemas"]["LoginResponse"];
        };
      };
    };
  };
  loginUserViaGoogle: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["LoginRequest"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": components["schemas"]["LoginResponse"];
        };
      };
    };
  };
  getAllInstitutions: {
    parameters: {
      query?: {
        /** @description Zero-based page index (0..N) */
        page?: number;
        /** @description The size of the page to be returned */
        size?: number;
        /** @description Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
        sort?: string[];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": components["schemas"]["PageResponseInstitutionInstitutionResponse"];
        };
      };
    };
  };
  createInstitution: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["CreateInstitutionRequest"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": components["schemas"]["InstitutionResponse"];
        };
      };
    };
  };
  createMajor: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["CreateMajorRequest"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": components["schemas"]["MajorResponse"];
        };
      };
    };
  };
  createSubject: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["CreateSubjectRequest"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": components["schemas"]["SubjectResponse"];
        };
      };
    };
  };
  getAllFixedClassroom: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": Record<string, never>;
        };
      };
    };
  };
  createFixedClassroom: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": Record<string, never>;
        };
      };
    };
  };
  getAllStudyingRegistrationOfCurrentStudent: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": Record<string, never>;
        };
      };
    };
  };
  registerStudyingFixedClassroom: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": Record<string, never>;
        };
      };
    };
  };
  getAllDiscounts: {
    parameters: {
      query?: {
        /** @description Zero-based page index (0..N) */
        page?: number;
        /** @description The size of the page to be returned */
        size?: number;
        /** @description Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
        sort?: string[];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": components["schemas"]["PageResponseDiscountDiscountResponse"];
        };
      };
    };
  };
  createDiscount: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody: {
      content: {
        "application/json": components["schemas"]["CreateDiscountRequest"];
      };
    };
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": components["schemas"]["DiscountResponse"];
        };
      };
    };
  };
  welcomeUser: {
    parameters: {
      query: {
        username: string;
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": string;
        };
      };
    };
  };
  getVoucherById: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        voucher_id: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": Record<string, never>;
        };
      };
    };
  };
  getAllPromotionVouchers: {
    parameters: {
      query?: {
        /** @description Zero-based page index (0..N) */
        page?: number;
        /** @description The size of the page to be returned */
        size?: number;
        /** @description Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
        sort?: string[];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": components["schemas"]["PageResponsePromotionVoucherPromotionVoucherResponse"];
        };
      };
    };
  };
  getUserById: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        userId: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": components["schemas"]["UserResponse"];
        };
      };
    };
  };
  getAllTAs: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": Record<string, never>;
        };
      };
    };
  };
  getTAById: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        user_id: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": components["schemas"]["TAResponse"];
        };
      };
    };
  };
  getStudyLocationList: {
    parameters: {
      query?: {
        /** @description Zero-based page index (0..N) */
        page?: number;
        /** @description The size of the page to be returned */
        size?: number;
        /** @description Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
        sort?: string[];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": components["schemas"]["PageResponseStudyLocationStudyLocationResponse"];
        };
      };
    };
  };
  getStudyLocationById: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        study_location_id: number;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": components["schemas"]["StudyLocationResponse"];
        };
      };
    };
  };
  getAllStudents: {
    parameters: {
      query?: {
        /** @description Zero-based page index (0..N) */
        page?: number;
        /** @description The size of the page to be returned */
        size?: number;
        /** @description Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
        sort?: string[];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": components["schemas"]["PageResponseStudentStudentResponse"];
        };
      };
    };
  };
  getStudentById: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        user_id: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": components["schemas"]["StudentResponse"];
        };
      };
    };
  };
  getCurrentStudent: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": components["schemas"]["StudentResponse"];
        };
      };
    };
  };
  getAllRole: {
    parameters: {
      query?: {
        /** @description Zero-based page index (0..N) */
        page?: number;
        /** @description The size of the page to be returned */
        size?: number;
        /** @description Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
        sort?: string[];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": components["schemas"]["PageResponseRoleRoleResponse"];
        };
      };
    };
  };
  getRoleById: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        role_id: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": components["schemas"]["RoleResponse"];
        };
      };
    };
  };
  getCurrentTARegistration: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": components["schemas"]["TARegistrationResponse"];
        };
      };
    };
  };
  getPrivateById: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": Record<string, never>;
        };
      };
    };
  };
  getPaymentList: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": Record<string, never>;
        };
      };
    };
  };
  getPaymentById: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": Record<string, never>;
        };
      };
    };
  };
  getNewAccessTokenFromRefreshToken: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": components["schemas"]["LoginResponse"];
        };
      };
    };
  };
  getManagerById: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        manager_id: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": components["schemas"]["ManagerResponse"];
        };
      };
    };
  };
  getAllTARegistrations: {
    parameters: {
      query?: {
        status?: "PENDING" | "FAIL" | "SUCCEED" | "CANCEL";
        /** @description Zero-based page index (0..N) */
        page?: number;
        /** @description The size of the page to be returned */
        size?: number;
        /** @description Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
        sort?: string[];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": components["schemas"]["PageResponseTeachingAssistantTARegistrationResponse"];
        };
      };
    };
  };
  getTARegistrationById: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        ta_id: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": components["schemas"]["TARegistrationResponse"];
        };
      };
    };
  };
  getAllManagers: {
    parameters: {
      query?: {
        /** @description Zero-based page index (0..N) */
        page?: number;
        /** @description The size of the page to be returned */
        size?: number;
        /** @description Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
        sort?: string[];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": components["schemas"]["PageResponseManagerManagerResponse"];
        };
      };
    };
  };
  getAllMajorsOfInstitution: {
    parameters: {
      query?: {
        /** @description Zero-based page index (0..N) */
        page?: number;
        /** @description The size of the page to be returned */
        size?: number;
        /** @description Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
        sort?: string[];
      };
      header?: never;
      path: {
        institution_id: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": components["schemas"]["PageResponseMajorMajorResponse"];
        };
      };
    };
  };
  getAllSubjectsOfMajor: {
    parameters: {
      query?: {
        /** @description Zero-based page index (0..N) */
        page?: number;
        /** @description The size of the page to be returned */
        size?: number;
        /** @description Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
        sort?: string[];
      };
      header?: never;
      path: {
        major_id: number;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": components["schemas"]["PageResponseSubjectSubjectResponse"];
        };
      };
    };
  };
  getStudyingRegistrationOfCurrentStudentById: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": Record<string, never>;
        };
      };
    };
  };
  getAllDepartments: {
    parameters: {
      query?: {
        /** @description Zero-based page index (0..N) */
        page?: number;
        /** @description The size of the page to be returned */
        size?: number;
        /** @description Sorting criteria in the format: property,(asc|desc). Default sort order is ascending. Multiple sort criteria are supported. */
        sort?: string[];
      };
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": components["schemas"]["PageResponseDepartmentDepartmentResponse"];
        };
      };
    };
  };
  getDepartmentById: {
    parameters: {
      query?: never;
      header?: never;
      path: {
        department_id: string;
      };
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": components["schemas"]["DepartmentResponse"];
        };
      };
    };
  };
  deleteTaById: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": Record<string, never>;
        };
      };
    };
  };
  deleteStudentById: {
    parameters: {
      query?: never;
      header?: never;
      path?: never;
      cookie?: never;
    };
    requestBody?: never;
    responses: {
      /** @description OK */
      200: {
        headers: {
          [name: string]: unknown;
        };
        content: {
          "*/*": Record<string, never>;
        };
      };
    };
  };
}
