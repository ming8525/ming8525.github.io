System.register(["jimu-core","jimu-for-builder/templates"], function(__WEBPACK_DYNAMIC_EXPORT__, __system_context__) {
	var __WEBPACK_EXTERNAL_MODULE_jimu_core__ = {};
	var __WEBPACK_EXTERNAL_MODULE_jimu_for_builder_templates__ = {};
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_core__, "__esModule", { value: true });
	Object.defineProperty(__WEBPACK_EXTERNAL_MODULE_jimu_for_builder_templates__, "__esModule", { value: true });
	return {
		setters: [
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_core__[key] = module[key];
				});
			},
			function(module) {
				Object.keys(module).forEach(function(key) {
					__WEBPACK_EXTERNAL_MODULE_jimu_for_builder_templates__[key] = module[key];
				});
			}
		],
		execute: function() {
			__WEBPACK_DYNAMIC_EXPORT__(
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./jimu-for-builder/lib/service/app-service/index.ts":
/*!***********************************************************!*\
  !*** ./jimu-for-builder/lib/service/app-service/index.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addToFavorites: () => (/* binding */ addToFavorites),
/* harmony export */   changeAppFolder: () => (/* binding */ changeAppFolder),
/* harmony export */   checkImportAppVersion: () => (/* binding */ checkImportAppVersion),
/* harmony export */   createAppByDefaultTemplate: () => (/* binding */ createAppByDefaultTemplate),
/* harmony export */   createAppByItemTemplate: () => (/* binding */ createAppByItemTemplate),
/* harmony export */   createAppByTemplateId: () => (/* binding */ createAppByTemplateId),
/* harmony export */   createTemplateByApp: () => (/* binding */ createTemplateByApp),
/* harmony export */   deleteApp: () => (/* binding */ deleteApp),
/* harmony export */   duplicateApp: () => (/* binding */ duplicateApp),
/* harmony export */   getAppConfig: () => (/* binding */ getAppConfig),
/* harmony export */   getAppGroups: () => (/* binding */ getAppGroups),
/* harmony export */   getAppInfo: () => (/* binding */ getAppInfo),
/* harmony export */   getDefaultTemplateConfig: () => (/* binding */ getDefaultTemplateConfig),
/* harmony export */   getFolders: () => (/* binding */ getFolders),
/* harmony export */   getGroupCategorySchema: () => (/* binding */ getGroupCategorySchema),
/* harmony export */   getGroupContent: () => (/* binding */ getGroupContent),
/* harmony export */   getOrgCategorySchema: () => (/* binding */ getOrgCategorySchema),
/* harmony export */   getUserTags: () => (/* binding */ getUserTags),
/* harmony export */   importAppFromPortal: () => (/* binding */ importAppFromPortal),
/* harmony export */   importItem: () => (/* binding */ importItem),
/* harmony export */   publishApp: () => (/* binding */ publishApp),
/* harmony export */   removeFromFavorites: () => (/* binding */ removeFromFavorites),
/* harmony export */   saveApp: () => (/* binding */ saveApp),
/* harmony export */   saveAsApp: () => (/* binding */ saveAsApp),
/* harmony export */   searchApp: () => (/* binding */ searchApp),
/* harmony export */   searchAppByPortalUrl: () => (/* binding */ searchAppByPortalUrl),
/* harmony export */   searchGroups: () => (/* binding */ searchGroups),
/* harmony export */   updateAppInfo: () => (/* binding */ updateAppInfo),
/* harmony export */   updateAppInfoWhenSaveApp: () => (/* binding */ updateAppInfoWhenSaveApp),
/* harmony export */   updateAppThumbnail: () => (/* binding */ updateAppThumbnail)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rest-service */ "./jimu-for-builder/lib/service/rest-service.tsx");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./util */ "./jimu-for-builder/lib/service/app-service/util.ts");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../type */ "./jimu-for-builder/lib/service/type/index.ts");
/* harmony import */ var jimu_for_builder_templates__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! jimu-for-builder/templates */ "jimu-for-builder/templates");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





/**
 * Create app by portal template/AGOL template/local template
 * folderId: If the folderId has a value, the app will be created in the folder corresponding to the folderId
*/
function createAppByItemTemplate(appInfo, folderId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield (0,_util__WEBPACK_IMPORTED_MODULE_2__.crateAppByApp)(appInfo, false, folderId);
    });
}
/**
 * Create app with template id, such as: xxx.com/builder/?template=id
*/
function createAppByTemplateId(templateId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield (0,_util__WEBPACK_IMPORTED_MODULE_2__.getCreateAppParamsByAppId)(templateId).then((appInfo) => __awaiter(this, void 0, void 0, function* () {
            return yield createAppByItemTemplate(appInfo);
        }));
    });
}
/**
 *Create app by default template defined in the code
 *title: The translated string of 'Untitled experience'
 *lable: The default template's name
 *folderId: If the folderId has a value, the app will be created in the folder corresponding to the folderId
 */
function createAppByDefaultTemplate(title, templateName, folderId, webmapId, websceneId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield (0,_util__WEBPACK_IMPORTED_MODULE_2__.getNewAppTitleWithIndex)(title).then((newTitle) => __awaiter(this, void 0, void 0, function* () {
            if (newTitle) {
                const appInfo = {
                    template: templateName,
                    name: newTitle,
                    description: '',
                    type: _type__WEBPACK_IMPORTED_MODULE_3__.AppType.ExperienceType
                };
                return yield Promise.all([getDefaultTemplateConfig(appInfo)])
                    .then(function (results) {
                    return __awaiter(this, void 0, void 0, function* () {
                        let defaultAppConfig = results[0];
                        defaultAppConfig.template = appInfo.template;
                        defaultAppConfig = (0,_util__WEBPACK_IMPORTED_MODULE_2__.initAppConfigOfNewApp)(defaultAppConfig);
                        return yield (0,_util__WEBPACK_IMPORTED_MODULE_2__.toCreateAppByDefaultTemplate)(appInfo, folderId).then((item) => __awaiter(this, void 0, void 0, function* () {
                            return yield (0,_util__WEBPACK_IMPORTED_MODULE_2__.createAppCallBack)(defaultAppConfig, item, webmapId, websceneId);
                        }));
                    });
                })
                    .catch((error) => __awaiter(this, void 0, void 0, function* () {
                    console.error(error);
                    return yield Promise.reject(error);
                }));
            }
            else {
                return yield Promise.reject(null);
            }
        }));
    });
}
/**
 * folderId: If the folderId has a value, the template will be created in the folder corresponding to the folderId
*/
function createTemplateByApp(appInfo, folderId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield (0,_util__WEBPACK_IMPORTED_MODULE_2__.crateAppByApp)(appInfo, true, folderId);
    });
}
function importItem(importAppOption) {
    return __awaiter(this, void 0, void 0, function* () {
        const session = jimu_core__WEBPACK_IMPORTED_MODULE_0__.SessionManager.getInstance().getMainSession();
        return yield (0,_rest_service__WEBPACK_IMPORTED_MODULE_1__.importApp)(importAppOption, { authentication: session });
    });
}
function checkImportAppVersion(importAppOption) {
    return __awaiter(this, void 0, void 0, function* () {
        const session = jimu_core__WEBPACK_IMPORTED_MODULE_0__.SessionManager.getInstance().getMainSession();
        return yield (0,_rest_service__WEBPACK_IMPORTED_MODULE_1__.checkAppVersion)(importAppOption, { authentication: session });
    });
}
function importAppFromPortal(portalAppInfo) {
    return __awaiter(this, void 0, void 0, function* () {
        return duplicateApp(portalAppInfo, null, true);
    });
}
/**
 * folderId: If the folderId has a value, the app will be created in the folder corresponding to the folderId
*/
function duplicateApp(appInfo, folderId, isNotUpdateNewAppTitle) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield getAppInfo(appInfo).then((appItem) => __awaiter(this, void 0, void 0, function* () {
            if (appItem) {
                const copy = jimu_core__WEBPACK_IMPORTED_MODULE_0__.i18n.getIntl().formatMessage({ id: 'copy' }) || 'copy';
                const title = isNotUpdateNewAppTitle ? appItem.title : `${appItem.title} ${copy}`;
                return yield (0,_util__WEBPACK_IMPORTED_MODULE_2__.getNewAppTitleWithIndex)(title, true, appInfo.type).then((newTitle) => __awaiter(this, void 0, void 0, function* () {
                    if (newTitle) {
                        const duplicateAppInfo = {
                            name: newTitle,
                            description: (appItem === null || appItem === void 0 ? void 0 : appItem.description) || '',
                            snippet: (appItem === null || appItem === void 0 ? void 0 : appItem.snippet) || '',
                            typeKeywords: (appItem === null || appItem === void 0 ? void 0 : appItem.typeKeywords) || [],
                            tags: appItem.tags,
                            thumbnail: appItem.thumbnail,
                            type: appInfo.type || appItem.type
                        };
                        return yield (0,_util__WEBPACK_IMPORTED_MODULE_2__.createAppForDuplicate)(duplicateAppInfo, folderId).then((newAppItem) => __awaiter(this, void 0, void 0, function* () {
                            if (newAppItem) {
                                return yield (0,_util__WEBPACK_IMPORTED_MODULE_2__.updateThumbnail)(newAppItem.id, appInfo, appItem.thumbnail).then(() => __awaiter(this, void 0, void 0, function* () {
                                    return yield (0,_util__WEBPACK_IMPORTED_MODULE_2__.duplicateRelatedDataInApp)(newAppItem.id, appInfo, false).then(() => __awaiter(this, void 0, void 0, function* () {
                                        return yield Promise.resolve(newAppItem.id);
                                    }), (error) => __awaiter(this, void 0, void 0, function* () {
                                        console.error(error);
                                        deleteApp(newAppItem.id);
                                        return yield Promise.reject(error);
                                    }));
                                }));
                            }
                            else {
                                return yield Promise.reject(null);
                            }
                        }));
                    }
                    else {
                        return yield Promise.reject(null);
                    }
                }));
            }
            else {
                return yield Promise.reject(null);
            }
        }));
    });
}
/**
 * folderId: If the folderId has a value, the app will be created in the folder corresponding to the folderId
*/
function saveAsApp(originAppInfo, newAppUpdateInfo, folderId, thumbnailFiles) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield (0,_util__WEBPACK_IMPORTED_MODULE_2__.getNewAppTitleWithIndex)(`${newAppUpdateInfo.title}`, true, newAppUpdateInfo.type).then((newTitle) => __awaiter(this, void 0, void 0, function* () {
            if (newTitle) {
                const duplicateAppInfo = {
                    name: newAppUpdateInfo.title,
                    description: (newAppUpdateInfo === null || newAppUpdateInfo === void 0 ? void 0 : newAppUpdateInfo.description) || '',
                    snippet: (newAppUpdateInfo === null || newAppUpdateInfo === void 0 ? void 0 : newAppUpdateInfo.snippet) || '',
                    typeKeywords: (newAppUpdateInfo === null || newAppUpdateInfo === void 0 ? void 0 : newAppUpdateInfo.typeKeywords) || [],
                    tags: newAppUpdateInfo.tags,
                    thumbnail: newAppUpdateInfo.thumbnail,
                    type: originAppInfo.type || originAppInfo.type
                };
                //Create new app
                return yield (0,_util__WEBPACK_IMPORTED_MODULE_2__.createAppForDuplicate)(duplicateAppInfo, folderId).then((newAppItem) => __awaiter(this, void 0, void 0, function* () {
                    if (newAppItem) {
                        newAppUpdateInfo.id = newAppItem.id;
                        //Update thumbnail of new item
                        return yield (0,_util__WEBPACK_IMPORTED_MODULE_2__.updateThumbnailForSaveAsApp)(originAppInfo, newAppUpdateInfo, thumbnailFiles).then(() => __awaiter(this, void 0, void 0, function* () {
                            return yield (0,_util__WEBPACK_IMPORTED_MODULE_2__.updateItemDataInApp)(newAppItem.id).then((result) => __awaiter(this, void 0, void 0, function* () {
                                if (!result) {
                                    return yield Promise.reject(null);
                                }
                                //Update resources of new item
                                return yield (0,_util__WEBPACK_IMPORTED_MODULE_2__.duplicateResourcesForDuplicate)(newAppItem.id, originAppInfo, true).then(() => __awaiter(this, void 0, void 0, function* () {
                                    //Save current new config
                                    let newAppConfig = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().appStateInBuilder.appConfig;
                                    newAppConfig = (0,_util__WEBPACK_IMPORTED_MODULE_2__.replaceExbVersionInAppConfig)(newAppConfig);
                                    const config = newAppConfig === null || newAppConfig === void 0 ? void 0 : newAppConfig.asMutable({ deep: true });
                                    /**
                                     * Proxy is connected to item id, proxy created in item A cannot be used in item B.
                                     * So delete app proxies when duplicate items.
                                     */
                                    delete config.appProxies;
                                    delete config.historyLabels;
                                    return saveApp(newAppUpdateInfo, (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(config), newAppItem.id).then(() => __awaiter(this, void 0, void 0, function* () {
                                        //return id and config of new item
                                        return (0,_util__WEBPACK_IMPORTED_MODULE_2__.getAppConfigInResources)(newAppItem.id).then((config) => __awaiter(this, void 0, void 0, function* () {
                                            return Promise.resolve({
                                                id: newAppItem.id,
                                                appConfig: config
                                            });
                                        }));
                                    }));
                                }), (error) => __awaiter(this, void 0, void 0, function* () {
                                    //Delete new app when save as error
                                    console.error(error);
                                    deleteApp(newAppItem.id);
                                    return yield Promise.reject(error);
                                }));
                            }), (err) => __awaiter(this, void 0, void 0, function* () {
                                //Delete new app when save as error
                                console.error(err);
                                deleteApp(newAppItem.id);
                                return yield Promise.reject(err);
                            }));
                        }));
                    }
                    else {
                        return yield Promise.reject(null);
                    }
                }));
            }
            else {
                return yield Promise.reject(null);
            }
        }), err => {
            return Promise.reject(err);
        });
    });
}
function getAppConfig(appInfo) {
    return __awaiter(this, void 0, void 0, function* () {
        const session = (0,_util__WEBPACK_IMPORTED_MODULE_2__.getSession)(appInfo);
        return yield (0,_rest_service__WEBPACK_IMPORTED_MODULE_1__.getItemData)(appInfo, { authentication: session }).then((result) => __awaiter(this, void 0, void 0, function* () {
            return yield Promise.resolve(result);
        }), (error) => __awaiter(this, void 0, void 0, function* () {
            return yield Promise.reject(error);
        }));
    });
}
function searchApp(searchOption, searchType) {
    return __awaiter(this, void 0, void 0, function* () {
        const session = (0,_util__WEBPACK_IMPORTED_MODULE_2__.getSessionBySearchType)(searchType);
        return yield (0,_rest_service__WEBPACK_IMPORTED_MODULE_1__.searchItems)(Object.assign(Object.assign({}, searchOption), { authentication: session }), searchType).then((result) => __awaiter(this, void 0, void 0, function* () {
            return yield Promise.resolve(result);
        }));
    });
}
function searchAppByPortalUrl(searchOption, portalUrl) {
    return __awaiter(this, void 0, void 0, function* () {
        const currentPortalUrl = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().portalUrl;
        const isUseCurrentPortal = portalUrl === currentPortalUrl;
        if (isUseCurrentPortal) {
            const session = (0,_util__WEBPACK_IMPORTED_MODULE_2__.getSessionBySearchType)(_type__WEBPACK_IMPORTED_MODULE_3__.SearchType.Portal);
            searchOption.authentication = session;
        }
        return yield (0,_rest_service__WEBPACK_IMPORTED_MODULE_1__.searchItemsByPortalUrl)(searchOption, portalUrl).then((result) => __awaiter(this, void 0, void 0, function* () {
            return yield Promise.resolve(result);
        }));
    });
}
function getAppInfo(appInfo) {
    return __awaiter(this, void 0, void 0, function* () {
        const session = (0,_util__WEBPACK_IMPORTED_MODULE_2__.getSession)(appInfo);
        return yield (0,_rest_service__WEBPACK_IMPORTED_MODULE_1__.getItem)(appInfo, {
            authentication: session
        }).then((result) => __awaiter(this, void 0, void 0, function* () {
            return yield Promise.resolve(result);
        }));
    });
}
function getGroupCategorySchema(groupId, isGetAGOLCategorySchema) {
    return __awaiter(this, void 0, void 0, function* () {
        const session = jimu_core__WEBPACK_IMPORTED_MODULE_0__.SessionManager.getInstance().getMainSession();
        return yield (0,_rest_service__WEBPACK_IMPORTED_MODULE_1__.getGroupCategorySchema)(groupId, {
            authentication: session
        }, isGetAGOLCategorySchema).then((result) => __awaiter(this, void 0, void 0, function* () {
            return yield Promise.resolve(result);
        }));
    });
}
function getOrgCategorySchema(isGetAGOLCategorySchema) {
    return __awaiter(this, void 0, void 0, function* () {
        const session = jimu_core__WEBPACK_IMPORTED_MODULE_0__.SessionManager.getInstance().getMainSession();
        return yield (0,_rest_service__WEBPACK_IMPORTED_MODULE_1__.getOrgCategorySchema)({
            authentication: session
        }, isGetAGOLCategorySchema).then((result) => __awaiter(this, void 0, void 0, function* () {
            return yield Promise.resolve(result);
        }));
    });
}
function getGroupContent(groupId, params, isGetAGOLGroupContent) {
    return __awaiter(this, void 0, void 0, function* () {
        const session = jimu_core__WEBPACK_IMPORTED_MODULE_0__.SessionManager.getInstance().getMainSession();
        return yield (0,_rest_service__WEBPACK_IMPORTED_MODULE_1__.getGroupContents)(groupId, {
            params,
            authentication: session
        }, isGetAGOLGroupContent).then((result) => __awaiter(this, void 0, void 0, function* () {
            return yield Promise.resolve(result);
        }));
    });
}
function updateAppInfo(itemParam) {
    return __awaiter(this, void 0, void 0, function* () {
        const session = jimu_core__WEBPACK_IMPORTED_MODULE_0__.SessionManager.getInstance().getMainSession();
        const portalUrl = window.jimuConfig.isDevEdition ? 'localhost:' : (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().portalUrl;
        const getAppInfoParams = {
            id: itemParam.id,
            portalUrl: portalUrl
        };
        return yield (0,_rest_service__WEBPACK_IMPORTED_MODULE_1__.getItem)(getAppInfoParams, {
            authentication: session
        }).then((res) => __awaiter(this, void 0, void 0, function* () {
            return yield (0,_rest_service__WEBPACK_IMPORTED_MODULE_1__.updateItem)({
                item: itemParam,
                owner: res.owner,
                authentication: session
            }).then(() => {
                return null;
            });
        }));
    });
}
function updateAppInfoWhenSaveApp(appInfo) {
    return __awaiter(this, void 0, void 0, function* () {
        return updateAppInfo(Object.assign(Object.assign({}, appInfo), { thumbnailurl: undefined })).then(res => {
            var _a;
            const thumbnailurl = appInfo === null || appInfo === void 0 ? void 0 : appInfo.thumbnailurl;
            const saveThumbnailUrl = (_a = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().appRuntimeInfo) === null || _a === void 0 ? void 0 : _a.saveThumbnailUrl;
            if (thumbnailurl && thumbnailurl !== saveThumbnailUrl) {
                (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().dispatch(jimu_core__WEBPACK_IMPORTED_MODULE_0__.appActions.saveThumbnailUrl(thumbnailurl));
                return (0,_util__WEBPACK_IMPORTED_MODULE_2__.updateThumbnail)(appInfo.id, appInfo, thumbnailurl);
            }
            else {
                return Promise.resolve(true);
            }
        }).catch(err => {
            return Promise.reject('Update appInfo error');
        });
    });
}
function updateAppThumbnail(itemParam, owner = '') {
    return __awaiter(this, void 0, void 0, function* () {
        const session = jimu_core__WEBPACK_IMPORTED_MODULE_0__.SessionManager.getInstance().getMainSession();
        return yield (0,_rest_service__WEBPACK_IMPORTED_MODULE_1__.updateAppsThumbnail)({
            item: itemParam,
            authentication: session,
            owner
        }).then(() => {
            return null;
        });
    });
}
function deleteApp(appId) {
    return __awaiter(this, void 0, void 0, function* () {
        const session = jimu_core__WEBPACK_IMPORTED_MODULE_0__.SessionManager.getInstance().getMainSession();
        return yield (0,_rest_service__WEBPACK_IMPORTED_MODULE_1__.getItem)({ id: appId }, {
            authentication: session
        }).then((res) => __awaiter(this, void 0, void 0, function* () {
            return yield (0,_rest_service__WEBPACK_IMPORTED_MODULE_1__.removeItem)({
                id: appId,
                owner: res.owner,
                authentication: jimu_core__WEBPACK_IMPORTED_MODULE_0__.SessionManager.getInstance().getMainSession()
            });
        }));
    });
}
function saveApp(appInfo, appConfig, newAppId) {
    return __awaiter(this, void 0, void 0, function* () {
        const session = jimu_core__WEBPACK_IMPORTED_MODULE_0__.SessionManager.getInstance().getMainSession();
        const AppResourceManager = jimu_core__WEBPACK_IMPORTED_MODULE_0__.moduleLoader.getModuleSync('jimu-for-builder').AppResourceManager;
        const appConfigUtilsForBuilder = jimu_core__WEBPACK_IMPORTED_MODULE_0__.moduleLoader.getModuleSync('jimu-for-builder').appConfigUtils;
        const owners = (appInfo === null || appInfo === void 0 ? void 0 : appInfo.owner) || session.username;
        const config = Object.assign({}, appConfigUtilsForBuilder.getCleanAppConfig(appConfig));
        const appResourceManagerInstance = AppResourceManager.getInstance();
        if (!config) {
            yield Promise.reject();
            return;
        }
        try {
            yield appResourceManagerInstance.upLoadAppConfig(appInfo.id, config, owners);
            const promises = [];
            const { imageResources, iconResources } = appResourceManagerInstance.getResourcesInDraft();
            imageResources && promises.push(appResourceManagerInstance.upLoadImageResourceList((0,_util__WEBPACK_IMPORTED_MODULE_2__.cloneObj)(imageResources), newAppId));
            iconResources && promises.push(appResourceManagerInstance.upLoadIconResourceList((0,_util__WEBPACK_IMPORTED_MODULE_2__.cloneObj)(iconResources), newAppId));
            promises.push(updateAppInfoWhenSaveApp(appInfo));
            yield Promise.all(promises);
        }
        catch (error) {
            yield Promise.reject(error);
        }
    });
}
function publishApp(appInfo) {
    return __awaiter(this, void 0, void 0, function* () {
        const draftAppConfig = yield (0,_util__WEBPACK_IMPORTED_MODULE_2__.getAppConfigInResources)(appInfo.id);
        const publishedAppConfig = yield getAppConfig(appInfo);
        const session = jimu_core__WEBPACK_IMPORTED_MODULE_0__.SessionManager.getInstance().getMainSession();
        if (draftAppConfig && publishedAppConfig) {
            const newTypeKeywords = (0,_util__WEBPACK_IMPORTED_MODULE_2__.updateTypeKeywords)(appInfo === null || appInfo === void 0 ? void 0 : appInfo.typeKeywords, publishedAppConfig === null || publishedAppConfig === void 0 ? void 0 : publishedAppConfig.exbVersion);
            const AppResourceManager = jimu_core__WEBPACK_IMPORTED_MODULE_0__.moduleLoader.getModuleSync('jimu-for-builder')
                .AppResourceManager;
            const appResourceManagerInstance = AppResourceManager.getInstance();
            return appResourceManagerInstance
                .upLoadLocalResource(draftAppConfig)
                .then((draftAppConfig) => __awaiter(this, void 0, void 0, function* () {
                if (!draftAppConfig) {
                    return yield Promise.reject();
                }
                draftAppConfig = (0,_util__WEBPACK_IMPORTED_MODULE_2__.optimizeWidgetsConfig)(draftAppConfig, appInfo);
                draftAppConfig = (0,_util__WEBPACK_IMPORTED_MODULE_2__.updateHistoryLabels)(draftAppConfig, publishedAppConfig);
                const previewUrl = (0,_util__WEBPACK_IMPORTED_MODULE_2__.getPreviewUrl)(appInfo);
                yield (0,_rest_service__WEBPACK_IMPORTED_MODULE_1__.updateItem)({
                    item: {
                        id: appInfo.id,
                        owner: appInfo.owner || (session === null || session === void 0 ? void 0 : session.username),
                        data: draftAppConfig,
                        typeKeywords: newTypeKeywords,
                        url: previewUrl
                    },
                    authentication: jimu_core__WEBPACK_IMPORTED_MODULE_0__.SessionManager.getInstance().getMainSession()
                }).then(() => __awaiter(this, void 0, void 0, function* () {
                    yield Promise.resolve();
                }), () => __awaiter(this, void 0, void 0, function* () {
                    return yield Promise.reject();
                }));
            }), () => __awaiter(this, void 0, void 0, function* () {
                return yield Promise.reject();
            }))
                .catch((error) => __awaiter(this, void 0, void 0, function* () {
                return yield Promise.reject(error);
            }));
        }
        else {
            yield Promise.reject();
        }
    });
}
function getFolders(requestOption) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0,_rest_service__WEBPACK_IMPORTED_MODULE_1__.getUserContent)(requestOption).then((result) => __awaiter(this, void 0, void 0, function* () {
            const folders = (result === null || result === void 0 ? void 0 : result.folders) || [];
            return yield Promise.resolve(folders);
        }), (error) => __awaiter(this, void 0, void 0, function* () {
            return yield Promise.reject(error);
        }));
    });
}
function addToFavorites(params) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield (0,_rest_service__WEBPACK_IMPORTED_MODULE_1__.shareItemWithGroup)(params).then((result) => __awaiter(this, void 0, void 0, function* () {
            return yield Promise.resolve(result);
        }));
    });
}
function removeFromFavorites(params) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield (0,_rest_service__WEBPACK_IMPORTED_MODULE_1__.unshareItemWithGroup)(params).then((result) => __awaiter(this, void 0, void 0, function* () {
            return yield Promise.resolve(result);
        }));
    });
}
function getAppGroups(params) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield (0,_rest_service__WEBPACK_IMPORTED_MODULE_1__.getItemsGroups)(params).then((result) => __awaiter(this, void 0, void 0, function* () {
            return yield Promise.resolve(result);
        }));
    });
}
function changeAppFolder(params) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield (0,_rest_service__WEBPACK_IMPORTED_MODULE_1__.moveItem)(Object.assign(Object.assign({}, params), { authentication: jimu_core__WEBPACK_IMPORTED_MODULE_0__.SessionManager.getInstance().getMainSession() }));
    });
}
function getUserTags(username) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield (0,_rest_service__WEBPACK_IMPORTED_MODULE_1__.getUsersTags)({
            username: username,
            authentication: jimu_core__WEBPACK_IMPORTED_MODULE_0__.SessionManager.getInstance().getMainSession()
        });
    });
}
function searchGroups(requestOptions) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield (0,_rest_service__WEBPACK_IMPORTED_MODULE_1__.searchGroup)(requestOptions);
    });
}
function getDefaultTemplateConfig(appInfo) {
    return __awaiter(this, void 0, void 0, function* () {
        return (0,jimu_for_builder_templates__WEBPACK_IMPORTED_MODULE_4__.getTemplateConfig)(jimu_for_builder_templates__WEBPACK_IMPORTED_MODULE_4__.TemplateType.App, appInfo.template);
    });
}


/***/ }),

/***/ "./jimu-for-builder/lib/service/app-service/util.ts":
/*!**********************************************************!*\
  !*** ./jimu-for-builder/lib/service/app-service/util.ts ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   cloneObj: () => (/* binding */ cloneObj),
/* harmony export */   crateAppByApp: () => (/* binding */ crateAppByApp),
/* harmony export */   createApp: () => (/* binding */ createApp),
/* harmony export */   createAppCallBack: () => (/* binding */ createAppCallBack),
/* harmony export */   createAppForDuplicate: () => (/* binding */ createAppForDuplicate),
/* harmony export */   duplicatePublishedAppsConfig: () => (/* binding */ duplicatePublishedAppsConfig),
/* harmony export */   duplicateRelatedDataInApp: () => (/* binding */ duplicateRelatedDataInApp),
/* harmony export */   duplicateResourcesForCreateNew: () => (/* binding */ duplicateResourcesForCreateNew),
/* harmony export */   duplicateResourcesForDuplicate: () => (/* binding */ duplicateResourcesForDuplicate),
/* harmony export */   duplicateResourcesInApp: () => (/* binding */ duplicateResourcesInApp),
/* harmony export */   getAppConfigInResources: () => (/* binding */ getAppConfigInResources),
/* harmony export */   getAppName: () => (/* binding */ getAppName),
/* harmony export */   getConfigFromPortalItemResource: () => (/* binding */ getConfigFromPortalItemResource),
/* harmony export */   getCreateAppParamsByAppId: () => (/* binding */ getCreateAppParamsByAppId),
/* harmony export */   getMaxIndex: () => (/* binding */ getMaxIndex),
/* harmony export */   getNewAppTitleWithIndex: () => (/* binding */ getNewAppTitleWithIndex),
/* harmony export */   getPreviewUrl: () => (/* binding */ getPreviewUrl),
/* harmony export */   getResourceOrigin: () => (/* binding */ getResourceOrigin),
/* harmony export */   getSession: () => (/* binding */ getSession),
/* harmony export */   getSessionBySearchType: () => (/* binding */ getSessionBySearchType),
/* harmony export */   initAppConfigOfNewApp: () => (/* binding */ initAppConfigOfNewApp),
/* harmony export */   initAppConfigPortalUrl: () => (/* binding */ initAppConfigPortalUrl),
/* harmony export */   initDuplicatedTypeKeywords: () => (/* binding */ initDuplicatedTypeKeywords),
/* harmony export */   isAGOLApp: () => (/* binding */ isAGOLApp),
/* harmony export */   isAppNameRepeat: () => (/* binding */ isAppNameRepeat),
/* harmony export */   isLocalApp: () => (/* binding */ isLocalApp),
/* harmony export */   isPortalApp: () => (/* binding */ isPortalApp),
/* harmony export */   isUpdateDataSourcesPortalUrl: () => (/* binding */ isUpdateDataSourcesPortalUrl),
/* harmony export */   optimizeTextWidgetConfig: () => (/* binding */ optimizeTextWidgetConfig),
/* harmony export */   optimizeWidgetsConfig: () => (/* binding */ optimizeWidgetsConfig),
/* harmony export */   replaceExbVersionInAppConfig: () => (/* binding */ replaceExbVersionInAppConfig),
/* harmony export */   toCreateAppByDefaultTemplate: () => (/* binding */ toCreateAppByDefaultTemplate),
/* harmony export */   updateHistoryLabels: () => (/* binding */ updateHistoryLabels),
/* harmony export */   updateItemDataInApp: () => (/* binding */ updateItemDataInApp),
/* harmony export */   updateThumbnail: () => (/* binding */ updateThumbnail),
/* harmony export */   updateThumbnailForSaveAsApp: () => (/* binding */ updateThumbnailForSaveAsApp),
/* harmony export */   updateTypeKeywords: () => (/* binding */ updateTypeKeywords),
/* harmony export */   uploadResource: () => (/* binding */ uploadResource)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _rest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../rest-service */ "./jimu-for-builder/lib/service/rest-service.tsx");
/* harmony import */ var _translations_default__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../translations/default */ "./jimu-for-builder/lib/translations/default.ts");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../type */ "./jimu-for-builder/lib/service/type/index.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./index */ "./jimu-for-builder/lib/service/app-service/index.ts");
/* harmony import */ var _local_rest_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../local-rest-service */ "./jimu-for-builder/lib/service/local-rest-service/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/* eslint-disable camelcase */






const request = jimu_core__WEBPACK_IMPORTED_MODULE_0__.esri.restRequest.request;
function isPortalApp(appInfo) {
    var _a, _b;
    if (!(appInfo === null || appInfo === void 0 ? void 0 : appInfo.portalUrl)) {
        return !window.jimuConfig.isDevEdition;
    }
    const appPortalUrl = (appInfo === null || appInfo === void 0 ? void 0 : appInfo.portalUrl) || '';
    const portalUrl = ((_b = (_a = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)()) === null || _a === void 0 ? void 0 : _a.getState()) === null || _b === void 0 ? void 0 : _b.portalUrl) || '';
    const isSamePortal = (portalUrl === null || portalUrl === void 0 ? void 0 : portalUrl.includes(appPortalUrl)) || (appPortalUrl === null || appPortalUrl === void 0 ? void 0 : appPortalUrl.includes(portalUrl));
    if (jimu_core__WEBPACK_IMPORTED_MODULE_0__.portalUrlUtils.isAGOLDomain(appPortalUrl) && jimu_core__WEBPACK_IMPORTED_MODULE_0__.portalUrlUtils.isAGOLDomain(portalUrl)) {
        return !isLocalApp(appInfo);
    }
    else {
        return isSamePortal && !isLocalApp(appInfo);
    }
}
function isAGOLApp(appInfo) {
    if (!(appInfo === null || appInfo === void 0 ? void 0 : appInfo.portalUrl)) {
        return false;
    }
    const appPortalUrl = (appInfo === null || appInfo === void 0 ? void 0 : appInfo.portalUrl) || '';
    const isPortalAGOL = jimu_core__WEBPACK_IMPORTED_MODULE_0__.portalUrlUtils.isAGOLDomain(appPortalUrl);
    const isNotPortalApp = !isPortalApp(appInfo);
    const isNotLocalApp = !isLocalApp(appInfo);
    return isNotPortalApp && isNotLocalApp && isPortalAGOL;
}
function isLocalApp(appInfo) {
    const appPortalUrl = (appInfo === null || appInfo === void 0 ? void 0 : appInfo.portalUrl) || '';
    if (appPortalUrl.endsWith('localhost:')) {
        return true;
    }
    return appInfo.isLocalApp;
}
function getSession(appInfo) {
    if (isLocalApp(appInfo)) {
        return {};
    }
    const portalSession = jimu_core__WEBPACK_IMPORTED_MODULE_0__.SessionManager.getInstance().getMainSession();
    const session = isPortalApp(appInfo) ? portalSession : {};
    return session;
}
function getSessionBySearchType(searchType) {
    let session;
    const portalUrl = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().portalUrl;
    const portalSession = jimu_core__WEBPACK_IMPORTED_MODULE_0__.SessionManager.getInstance().getMainSession();
    const isAGOLDomain = jimu_core__WEBPACK_IMPORTED_MODULE_0__.portalUrlUtils.isAGOLDomain(portalUrl);
    switch (searchType) {
        case _type__WEBPACK_IMPORTED_MODULE_3__.SearchType.Portal:
            session = portalSession;
            break;
        case _type__WEBPACK_IMPORTED_MODULE_3__.SearchType.AGOL:
            session = isAGOLDomain ? portalSession : {};
            break;
        case _type__WEBPACK_IMPORTED_MODULE_3__.SearchType.Other:
            session = window.jimuConfig.isDevEdition ? {} : portalSession;
            break;
    }
    return session;
}
function getNewAppTitleWithIndex(title, isCopy = false, type = '') {
    return __awaiter(this, void 0, void 0, function* () {
        const session = jimu_core__WEBPACK_IMPORTED_MODULE_0__.SessionManager.getInstance().getMainSession();
        let newTitle = null;
        const appType = !(type === null || type === void 0 ? void 0 : type.includes('Template'))
            ? _type__WEBPACK_IMPORTED_MODULE_3__.AppType.ExperienceType
            : _type__WEBPACK_IMPORTED_MODULE_3__.AppType.TemplateType;
        return yield (0,_index__WEBPACK_IMPORTED_MODULE_4__.searchApp)({
            q: `type: "${appType}" AND owner:${session === null || session === void 0 ? void 0 : session.username} AND  title:"${title}"`,
            sortField: 'modified',
            sortOrder: 'desc'
        }, _type__WEBPACK_IMPORTED_MODULE_3__.SearchType.Other)
            .then((result) => __awaiter(this, void 0, void 0, function* () {
            const apps = result.results;
            if (apps && apps.length > 0) {
                const index = getMaxIndex(apps, title);
                newTitle = getAppName(title, apps, index, isCopy);
                return yield Promise.resolve(newTitle);
            }
            else {
                newTitle = isCopy ? title : `${title} 1`;
                return yield Promise.resolve(newTitle);
            }
        }))
            .catch((err) => __awaiter(this, void 0, void 0, function* () {
            console.error(err);
            return yield Promise.reject(err);
        }));
    });
}
function duplicateRelatedDataInApp(newAppId, originalAppInfo, isCreateNew = false) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield updateItemDataInApp(newAppId).then((result) => __awaiter(this, void 0, void 0, function* () {
            if (!result) {
                return yield Promise.reject(null);
            }
            if (isCreateNew) {
                return yield duplicateResourcesForCreateNew(newAppId, originalAppInfo);
            }
            else {
                return yield duplicateResourcesForDuplicate(newAppId, originalAppInfo);
            }
        }), (err) => __awaiter(this, void 0, void 0, function* () {
            return yield Promise.reject(err);
        }));
    });
}
function updateTypeKeywords(typeKeywords, appConfigVersion) {
    let isHavePublishStatus = false;
    let haveUpdatePublishVersion = false;
    const newTypeKeywords = typeKeywords.map(el => {
        if (el.includes('status:')) {
            isHavePublishStatus = true;
            return `status: ${_type__WEBPACK_IMPORTED_MODULE_3__.PublishStatus.Published}`;
        }
        if (el.includes('publishVersion:') && appConfigVersion) {
            haveUpdatePublishVersion = true;
            return `publishVersion:${appConfigVersion}`;
        }
        return el;
    });
    if (!isHavePublishStatus) {
        const keyworlds = `status: ${_type__WEBPACK_IMPORTED_MODULE_3__.PublishStatus.Published}`;
        newTypeKeywords.push(keyworlds);
    }
    if (!haveUpdatePublishVersion && appConfigVersion) {
        newTypeKeywords.push(`publishVersion:${appConfigVersion}`);
    }
    return newTypeKeywords;
}
function toCreateAppByDefaultTemplate(appInfo, folderId) {
    return __awaiter(this, void 0, void 0, function* () {
        const itemInfo = {
            title: appInfo === null || appInfo === void 0 ? void 0 : appInfo.name,
            type: (appInfo === null || appInfo === void 0 ? void 0 : appInfo.type) || 'Web Experience',
            typeKeywords: [
                'EXB Experience',
                'Ready To Use',
                'JavaScript',
                'status: Draft',
                `version:${jimu_core__WEBPACK_IMPORTED_MODULE_0__.version}`
            ],
            snippet: (appInfo === null || appInfo === void 0 ? void 0 : appInfo.snippet) || '',
            description: (appInfo === null || appInfo === void 0 ? void 0 : appInfo.description) || '',
            tags: (appInfo === null || appInfo === void 0 ? void 0 : appInfo.tags) || [],
            data: { __not_publish: true }
            // thumbnailUrl:appInfo.thumbnailUrl
        };
        const checkExist = () => __awaiter(this, void 0, void 0, function* () {
            return yield Promise.resolve(false);
        });
        return yield checkExist().then(function (exist) {
            return __awaiter(this, void 0, void 0, function* () {
                if (exist) {
                    return yield Promise.reject('app existed.');
                }
                return yield createApp(itemInfo, folderId);
            });
        });
    });
}
function updateItemDataInApp(newAppId) {
    return __awaiter(this, void 0, void 0, function* () {
        const session = jimu_core__WEBPACK_IMPORTED_MODULE_0__.SessionManager.getInstance().getMainSession();
        return yield (0,_rest_service__WEBPACK_IMPORTED_MODULE_1__.updateItem)({
            item: {
                id: newAppId,
                owner: session === null || session === void 0 ? void 0 : session.username,
                text: '',
                data: { __not_publish: true }
                // data: newData
            },
            authentication: jimu_core__WEBPACK_IMPORTED_MODULE_0__.SessionManager.getInstance().getMainSession()
        }).then(() => __awaiter(this, void 0, void 0, function* () {
            return yield Promise.resolve(true);
        }), (error) => __awaiter(this, void 0, void 0, function* () {
            console.error(error);
            return yield Promise.reject(error);
        }));
    });
}
function duplicateResourcesInApp(newAppId, originalAppInfo, isCreateNew = false, updateAppConfigVersion = false) {
    return __awaiter(this, void 0, void 0, function* () {
        const session = getSession(originalAppInfo);
        return yield (0,_rest_service__WEBPACK_IMPORTED_MODULE_1__.getItemResources)(originalAppInfo, {
            authentication: session
        }).then((resourceResults) => __awaiter(this, void 0, void 0, function* () {
            const resourcePromises = [];
            const portalResources = resourceResults && resourceResults.resources;
            let isAppHasConfig = false;
            if (portalResources) {
                for (let i = 0; i < portalResources.length; i++) {
                    const isConfig = portalResources[i].resource === 'config/config.json';
                    // Use published version of a template when create an app from a template
                    if (isCreateNew && isConfig) {
                        continue;
                    }
                    // If an app has no config, it cannot be duplicate
                    if (isConfig) {
                        isAppHasConfig = true;
                    }
                    resourcePromises.push(uploadResource(newAppId, originalAppInfo, portalResources[i], updateAppConfigVersion));
                }
            }
            if (isAppHasConfig || isCreateNew) {
                return yield Promise.all(resourcePromises);
            }
            else {
                return yield Promise.resolve(null);
            }
        }), 
        // eslint-disable-next-line
        (err) => __awaiter(this, void 0, void 0, function* () {
            return yield Promise.resolve(null);
        }));
    });
}
function duplicateResourcesForCreateNew(newAppId, originalAppInfo) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield duplicatePublishedAppsConfig(newAppId, originalAppInfo).then((res) => __awaiter(this, void 0, void 0, function* () {
            return yield duplicateResourcesInApp(newAppId, originalAppInfo, true).then((resourceResult) => __awaiter(this, void 0, void 0, function* () {
                if (resourceResult) {
                    return yield Promise.resolve(true);
                }
                else {
                    return yield Promise.reject('Resource does not exist or is inaccessible');
                }
            }), (err) => __awaiter(this, void 0, void 0, function* () {
                return yield Promise.reject(err);
            }));
        }));
    });
}
function duplicateResourcesForDuplicate(newAppId, originalAppInfo, updateAppConfigVersion = false) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield duplicateResourcesInApp(newAppId, originalAppInfo, false, updateAppConfigVersion).then((resourceResult) => __awaiter(this, void 0, void 0, function* () {
            if (resourceResult) {
                return yield Promise.resolve(true);
            }
            else {
                return yield Promise.reject('Resource does not exist or is inaccessible');
            }
        }), (err) => __awaiter(this, void 0, void 0, function* () {
            return yield Promise.reject(err);
        }));
    });
}
function duplicatePublishedAppsConfig(newAppId, originalAppInfo) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield (0,_index__WEBPACK_IMPORTED_MODULE_4__.getAppConfig)(originalAppInfo).then((data) => __awaiter(this, void 0, void 0, function* () {
            const newConfigData = initAppConfigPortalUrl(data, originalAppInfo);
            newConfigData.template = originalAppInfo === null || originalAppInfo === void 0 ? void 0 : originalAppInfo.id;
            /**
             * Proxy is connected to item id, proxy created in item A cannot be used in item B.
             * So delete app proxies when duplicate items.
             */
            delete newConfigData.appProxies;
            delete newConfigData.historyLabels;
            const portalUrl = window.jimuConfig.isDevEdition ? 'localhost:' : (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().portalUrl;
            const session = getSession({ portalUrl: portalUrl });
            if (data === null || data === void 0 ? void 0 : data.__not_publish) {
                return yield Promise.reject('This item is not published');
            }
            const file = new Blob([JSON.stringify(newConfigData)], {
                type: 'application/json'
            });
            return yield (0,_rest_service__WEBPACK_IMPORTED_MODULE_1__.addItemResource)({
                id: newAppId,
                resource: file,
                name: 'config.json',
                params: {
                    resourcesPrefix: 'config'
                },
                authentication: session
            }).then(() => __awaiter(this, void 0, void 0, function* () {
                return yield Promise.resolve(true);
            }), (error) => __awaiter(this, void 0, void 0, function* () {
                console.error(error);
                return yield Promise.reject(error);
            }));
        }), 
        // eslint-disable-next-line
        (err) => __awaiter(this, void 0, void 0, function* () {
            return yield Promise.reject('Resource does not exist or is inaccessible');
        }));
    });
}
function updateThumbnail(newAppId, originalAppInfo, thumbnail) {
    return __awaiter(this, void 0, void 0, function* () {
        const portalUrl = window.jimuConfig.isDevEdition ? 'localhost:' : (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().portalUrl;
        const session = getSession({ portalUrl: portalUrl });
        const originalAppSession = getSession(originalAppInfo);
        if (thumbnail) {
            const portalThumbnailUrl = `${getResourceOrigin(originalAppInfo)}${originalAppInfo.id}/info/${thumbnail}?token=${originalAppSession === null || originalAppSession === void 0 ? void 0 : originalAppSession.token}`;
            const devThumbnailUrl = `${getResourceOrigin(originalAppInfo)}${originalAppInfo.id}/${thumbnail}`;
            let thumbnailUrl;
            if (thumbnail === null || thumbnail === void 0 ? void 0 : thumbnail.startsWith('blob:')) {
                thumbnailUrl = thumbnail;
            }
            else if (thumbnail === null || thumbnail === void 0 ? void 0 : thumbnail.includes('http')) {
                thumbnailUrl = `${thumbnail}?token=${originalAppSession === null || originalAppSession === void 0 ? void 0 : originalAppSession.token}`;
            }
            else {
                thumbnailUrl = isPortalApp(originalAppInfo) ? portalThumbnailUrl : devThumbnailUrl;
            }
            return yield new Promise(function (resolve, reject) {
                const xhr = new XMLHttpRequest();
                xhr.open('GET', thumbnailUrl, true);
                xhr.responseType = 'blob';
                xhr.onload = function (e) {
                    if (this.status === 200) {
                        const blob = this.response;
                        return (0,_index__WEBPACK_IMPORTED_MODULE_4__.updateAppThumbnail)({
                            id: newAppId,
                            thumbnail: blob,
                            f: 'json',
                            token: session === null || session === void 0 ? void 0 : session.token
                        }).then(() => {
                            resolve(true);
                        }, () => {
                            reject(false);
                        });
                    }
                    else {
                        reject(false);
                    }
                };
                xhr.onerror = function (e) {
                    reject();
                };
                xhr.send();
            });
        }
        else {
            return Promise.resolve(true);
        }
    });
}
function uploadResource(newAppId, originalAppInfo, resourceInfo, updateAppConfigVersion = false) {
    return __awaiter(this, void 0, void 0, function* () {
        const originalAppSession = getSession(originalAppInfo);
        const token = isPortalApp(originalAppInfo) ? `?token=${originalAppSession === null || originalAppSession === void 0 ? void 0 : originalAppSession.token}` : '';
        const portalUrlPrefix = `${getResourceOrigin(originalAppInfo)}${originalAppInfo.id}/resources/`;
        const portalUrl = window.jimuConfig.isDevEdition ? 'localhost:' : (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().portalUrl;
        const session = getSession({ portalUrl: portalUrl });
        if (resourceInfo.resource === 'config/config.json' ||
            resourceInfo.resource === 'images/image-resources-list.json') {
            const resourceUrl = portalUrlPrefix + resourceInfo.resource + token;
            return yield fetch(resourceUrl, { cache: 'no-cache' })
                .then((res) => __awaiter(this, void 0, void 0, function* () { return yield res.json(); }))
                .then((data) => __awaiter(this, void 0, void 0, function* () {
                // If an app's config.json or image-resources-list.json is not obtained successfully, it cannot be duplicate
                const isConfig = resourceInfo.resource === 'config/config.json';
                const newAppData = isConfig ? initAppConfigPortalUrl(data, originalAppInfo) : data;
                return yield replaceConfigWithNewAppID(newAppId, originalAppInfo.id, newAppData).then((newData) => __awaiter(this, void 0, void 0, function* () {
                    var _a;
                    /**
                     * Proxy is connected to item id, proxy created in item A cannot be used in item B.
                     * So delete app proxies when duplicate items.
                     */
                    delete newData.appProxies;
                    delete newData.historyLabels;
                    if (isConfig) {
                        if (updateAppConfigVersion) {
                            //Update app version and widget version to current ExbVersion
                            newData = (_a = replaceExbVersionInAppConfig((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(newData))) === null || _a === void 0 ? void 0 : _a.asMutable({ deep: true });
                        }
                        const date = new Date();
                        const utcTimeStamp = date.getTime();
                        newData.timestamp = `${utcTimeStamp}`;
                    }
                    const file = new Blob([JSON.stringify(newData)], {
                        type: 'application/json'
                    });
                    return yield (0,_rest_service__WEBPACK_IMPORTED_MODULE_1__.addItemResource)({
                        id: newAppId,
                        resource: file,
                        name: resourceInfo.resource.split('/')[resourceInfo.resource.split('/').length - 1],
                        params: {
                            resourcesPrefix: resourceInfo.resource
                                .split('/')
                                .slice(0, resourceInfo.resource.split('/').length - 1)
                                .join('/')
                        },
                        authentication: session
                    }).then(() => __awaiter(this, void 0, void 0, function* () {
                        return yield Promise.resolve(true);
                    }), (error) => __awaiter(this, void 0, void 0, function* () {
                        console.error(error);
                        return yield Promise.reject(error);
                    }));
                }));
            }))
                .catch((error) => __awaiter(this, void 0, void 0, function* () {
                console.error(error);
                return yield Promise.reject(error);
            }));
        }
        else {
            const resourceUrl = portalUrlPrefix + resourceInfo.resource + token;
            return yield new Promise(function (resolve, reject) {
                const xhr = new XMLHttpRequest();
                xhr.open('GET', resourceUrl, true);
                xhr.responseType = 'blob';
                xhr.onload = function (e) {
                    if (this.status === 200) {
                        const blob = this.response;
                        return (0,_rest_service__WEBPACK_IMPORTED_MODULE_1__.addItemResource)({
                            id: newAppId,
                            resource: blob,
                            name: resourceInfo.resource.split('/')[resourceInfo.resource.split('/').length - 1],
                            params: {
                                resourcesPrefix: resourceInfo.resource
                                    .split('/')
                                    .slice(0, resourceInfo.resource.split('/').length - 1)
                                    .join('/')
                            },
                            authentication: session
                        }).then(() => {
                            resolve(true);
                        }, () => {
                            resolve(false);
                        });
                    }
                    else {
                        resolve(false);
                    }
                };
                xhr.onerror = function (e) {
                    resolve(false);
                };
                xhr.send();
            });
        }
    });
}
function initAppConfigPortalUrl(appConfig, originalAppInfo) {
    var _a;
    const portalUrl = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().portalUrl;
    appConfig.attributes && (appConfig.attributes.portalUrl = portalUrl);
    const dataSources = appConfig === null || appConfig === void 0 ? void 0 : appConfig.dataSources;
    if (dataSources && isAGOLApp(originalAppInfo)) {
        for (const key in dataSources) {
            const dataSourcesPortalUrl = (_a = dataSources[key]) === null || _a === void 0 ? void 0 : _a.portalUrl;
            if (isUpdateDataSourcesPortalUrl(dataSourcesPortalUrl)) {
                dataSources[key].portalUrl = portalUrl;
            }
        }
    }
    return appConfig;
}
function isUpdateDataSourcesPortalUrl(dataSourcesPortalUrl) {
    let isCanUpdate = false;
    const portalUrl = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().portalUrl;
    if (isSamePortal(portalUrl, dataSourcesPortalUrl, 'mapsdevext.arcgis.com') ||
        isSamePortal(portalUrl, dataSourcesPortalUrl, 'mapsqa.arcgis.com') ||
        isSamePortal(portalUrl, dataSourcesPortalUrl, 'maps.arcgis.com')) {
        isCanUpdate = true;
    }
    return isCanUpdate;
}
function isSamePortal(portalUrl, dataSourcesPortalUrl, urlEndString) {
    const isSamePortal = ((portalUrl === null || portalUrl === void 0 ? void 0 : portalUrl.endsWith(urlEndString)) ||
        (portalUrl === null || portalUrl === void 0 ? void 0 : portalUrl.endsWith(`${urlEndString}/`))) &&
        ((dataSourcesPortalUrl === null || dataSourcesPortalUrl === void 0 ? void 0 : dataSourcesPortalUrl.endsWith(urlEndString)) ||
            (dataSourcesPortalUrl === null || dataSourcesPortalUrl === void 0 ? void 0 : dataSourcesPortalUrl.endsWith(`${urlEndString}/`)));
    return isSamePortal;
}
function crateAppByApp(appInfo, isCreateTemplate, folderId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield (0,_index__WEBPACK_IMPORTED_MODULE_4__.getAppInfo)(appInfo).then((appItem) => __awaiter(this, void 0, void 0, function* () {
            if (appItem) {
                const type = isCreateTemplate
                    ? _type__WEBPACK_IMPORTED_MODULE_3__.AppType.TemplateType
                    : _type__WEBPACK_IMPORTED_MODULE_3__.AppType.ExperienceType;
                return yield getNewAppTitleWithIndex(appItem.title).then((newTitle) => __awaiter(this, void 0, void 0, function* () {
                    if (newTitle) {
                        const duplicateAppInfo = {
                            name: newTitle,
                            tags: appItem.tags,
                            thumbnail: appItem.thumbnail,
                            type: type,
                            typeKeywords: appInfo === null || appInfo === void 0 ? void 0 : appInfo.typeKeywords
                        };
                        return yield createAppForDuplicate(duplicateAppInfo, folderId).then((newAppItem) => __awaiter(this, void 0, void 0, function* () {
                            if (newAppItem) {
                                return yield duplicateRelatedDataInApp(newAppItem.id, appInfo, !isCreateTemplate).then(() => __awaiter(this, void 0, void 0, function* () {
                                    return yield Promise.resolve(newAppItem.id);
                                }), (error) => __awaiter(this, void 0, void 0, function* () {
                                    console.error(error);
                                    (0,_index__WEBPACK_IMPORTED_MODULE_4__.deleteApp)(newAppItem.id);
                                    return yield Promise.reject(error);
                                }));
                            }
                            else {
                                return yield Promise.reject(null);
                            }
                        }));
                    }
                    else {
                        return yield Promise.reject(null);
                    }
                }));
            }
            else {
                return yield Promise.reject(null);
            }
        }));
    });
}
function initDuplicatedTypeKeywords(typeKeywords) {
    const itemVersion = `version:${jimu_core__WEBPACK_IMPORTED_MODULE_0__.version}`;
    if (!typeKeywords || typeKeywords.length === 0) {
        return [
            'EXB Experience',
            'Ready To Use',
            'JavaScript',
            'status: Draft',
            itemVersion
        ];
    }
    let isHasStatus = false;
    let isHasVersion = false;
    const newTypeKeywords = typeKeywords.map(el => {
        if (el.includes('version:')) {
            isHasVersion = true;
        }
        if (!el.includes('status:')) {
            return el;
        }
        else {
            isHasStatus = true;
            return 'status: Draft';
        }
    });
    !isHasStatus && newTypeKeywords.push('status: Draft');
    !isHasVersion && newTypeKeywords.push(itemVersion);
    return newTypeKeywords;
}
function getMaxIndex(appList, name) {
    const indexData = [];
    const reg = /^[\d]+$/;
    appList.forEach(el => {
        var _a, _b;
        const index = (_b = (_a = el.title) === null || _a === void 0 ? void 0 : _a.split(`${name} `)[1]) === null || _b === void 0 ? void 0 : _b.split(' ')[0];
        if (reg.test(index)) {
            indexData.push(Number(index));
        }
    });
    indexData.sort(function (a, b) {
        return a < b ? 1 : -1;
    });
    return indexData[0] || 1;
}
function getAppName(name, appList, index = 1, isCopy = false) {
    const appName = index === 1 && isCopy ? name : `${name} ${index}`;
    if (!isAppNameRepeat(appName, appList)) {
        return appName;
    }
    const _index = index + 1;
    return getAppName(name, appList, _index);
}
function isAppNameRepeat(name, appList) {
    let isHasName = false;
    appList.forEach(el => {
        if (name === el.title) {
            isHasName = true;
        }
    });
    return isHasName;
}
function replaceConfigWithNewAppID(newAppId, originalAppId, config) {
    return __awaiter(this, void 0, void 0, function* () {
        const portalUrlPrefix = getResourceOrigin(originalAppId) + originalAppId + '/resources/';
        const isPortalResourceExp = new RegExp('^' + portalUrlPrefix);
        function isPortalResources(value) {
            return isPortalResourceExp.test(value);
        }
        function matchHandle(value) {
            const newValue = value.replace('/' + originalAppId + '/', '/' + newAppId + '/');
            return newValue;
        }
        const replaceOperator = {
            matcher: isPortalResources,
            handler: matchHandle
        };
        return Promise.resolve(jimu_core__WEBPACK_IMPORTED_MODULE_0__.utils.replaceStringInObject(config, replaceOperator));
    });
}
function createAppCallBack(defaultAppConfigs, item, webmapId, websceneId) {
    return __awaiter(this, void 0, void 0, function* () {
        const AppResourceManager = jimu_core__WEBPACK_IMPORTED_MODULE_0__.moduleLoader.getModuleSync('jimu-for-builder')
            .AppResourceManager;
        const appResourceManagerInstance = AppResourceManager.getInstance();
        const itemId = item.id;
        let defaultAppConfig = jimu_core__WEBPACK_IMPORTED_MODULE_0__.utils.replaceI18nPlaceholdersInObject(defaultAppConfigs, jimu_core__WEBPACK_IMPORTED_MODULE_0__.i18n.getIntl(), _translations_default__WEBPACK_IMPORTED_MODULE_2__["default"]);
        defaultAppConfig = initAppConfig(defaultAppConfig);
        jimu_core__WEBPACK_IMPORTED_MODULE_0__.appConfigUtils.addWebmapOrWebsceneToAppConfig(defaultAppConfig, webmapId, websceneId);
        return appResourceManagerInstance
            .upLoadAppConfig(itemId.toString(), defaultAppConfig)
            .then(() => __awaiter(this, void 0, void 0, function* () {
            return yield Promise.resolve(item);
        }));
    });
}
function createAppForDuplicate(appInfo, folderId) {
    return __awaiter(this, void 0, void 0, function* () {
        const itemInfo = {
            title: appInfo.name,
            type: appInfo.type || 'Web Experience',
            typeKeywords: initDuplicatedTypeKeywords(appInfo === null || appInfo === void 0 ? void 0 : appInfo.typeKeywords),
            snippet: (appInfo === null || appInfo === void 0 ? void 0 : appInfo.snippet) || '',
            description: (appInfo === null || appInfo === void 0 ? void 0 : appInfo.description) || '',
            tags: appInfo.tags,
            thumbnail: appInfo.thumbnail
            // thumbnailUrl:appInfo.thumbnailUrl
        };
        return yield createApp(itemInfo, folderId);
    });
}
function getPreviewUrl(appInfo) {
    const { type, id } = appInfo;
    const { isDevEdition, isInPortal, hostEnv } = window.jimuConfig;
    const isTemplate = type === _type__WEBPACK_IMPORTED_MODULE_3__.AppType.TemplateType;
    const isArcGisOnlineApp = !isDevEdition && !isInPortal;
    if (isDevEdition) {
        return null;
    }
    let previewUrl = jimu_core__WEBPACK_IMPORTED_MODULE_0__.urlUtils.getAppUrl({ appId: id, isTemplate: isTemplate });
    if (isArcGisOnlineApp) {
        switch (hostEnv) {
            case 'prod':
                previewUrl = `https://experience.arcgis.com${previewUrl}`;
                break;
            case 'dev':
                previewUrl = `https://experiencedev.arcgis.com${previewUrl}`;
                break;
            case 'qa':
                previewUrl = `https://experienceqa.arcgis.com${previewUrl}`;
                break;
        }
    }
    if (isInPortal) {
        previewUrl = `${window.location.origin}${previewUrl}`;
    }
    return previewUrl;
}
function getAppConfigInResources(appId) {
    return __awaiter(this, void 0, void 0, function* () {
        const sessionManager = jimu_core__WEBPACK_IMPORTED_MODULE_0__.SessionManager.getInstance();
        const timestamp = new Date().getTime();
        if (window.jimuConfig.isDevEdition) {
            return yield window.fetch(`/apps/${appId}/resources/config/config.json`).then((res) => __awaiter(this, void 0, void 0, function* () { return yield res.json(); }));
        }
        else {
            return yield request(`${jimu_core__WEBPACK_IMPORTED_MODULE_0__.portalUrlUtils.getPortalRestUrl((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().portalUrl)}/content/items/${appId}/resources/config/config.json`, {
                authentication: sessionManager.getSessionByUrl((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().portalUrl),
                httpMethod: 'GET',
                params: {
                    timestamp: timestamp
                }
            }).catch((err) => __awaiter(this, void 0, void 0, function* () {
                return Promise.reject(err);
            }));
        }
    });
}
function getCreateAppParamsByAppId(templateId) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield checkIsPortalApp(templateId).then((portalAppInfo) => __awaiter(this, void 0, void 0, function* () {
            // Check is portal app
            return yield Promise.resolve(portalAppInfo);
            // eslint-disable-next-line
        })).catch((err) => __awaiter(this, void 0, void 0, function* () {
            // Check is AGOL app
            return yield checkIsAGOLApp(templateId).then((AGOLAppInfo) => __awaiter(this, void 0, void 0, function* () {
                return yield Promise.resolve(AGOLAppInfo);
                // eslint-disable-next-line
            })).catch((err) => __awaiter(this, void 0, void 0, function* () {
                // Check is local app
                return yield checkIsLocalApp(templateId);
            }));
        }));
    });
}
function checkIsPortalApp(templateId) {
    return __awaiter(this, void 0, void 0, function* () {
        const portalUrl = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().portalUrl;
        const getAppInfoParams = {
            id: templateId,
            portalUrl: portalUrl,
            isLocalApp: false
        };
        return yield (0,_index__WEBPACK_IMPORTED_MODULE_4__.getAppInfo)(getAppInfoParams).then((appInfo) => __awaiter(this, void 0, void 0, function* () {
            return yield Promise.resolve(getAppInfoParams);
            // eslint-disable-next-line
        })).catch((err) => __awaiter(this, void 0, void 0, function* () {
            return yield Promise.reject('Item does not exist or is inaccessible.');
        }));
    });
}
function checkIsLocalApp(templateId) {
    return __awaiter(this, void 0, void 0, function* () {
        if (!window.jimuConfig.isDevEdition) {
            return yield Promise.reject('Item does not exist or is inaccessible.');
        }
        else {
            const portalUrl = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().portalUrl;
            const getAppInfoParams = {
                id: templateId,
                portalUrl: portalUrl,
                isLocalApp: true
            };
            return yield (0,_index__WEBPACK_IMPORTED_MODULE_4__.getAppInfo)(getAppInfoParams).then((localAppInfo) => __awaiter(this, void 0, void 0, function* () {
                if (!(localAppInfo === null || localAppInfo === void 0 ? void 0 : localAppInfo.success)) {
                    return yield Promise.reject('Item does not exist or is inaccessible.');
                }
                else {
                    return yield Promise.resolve(getAppInfoParams);
                }
                // eslint-disable-next-line
            })).catch((err) => __awaiter(this, void 0, void 0, function* () {
                return yield Promise.reject('Item does not exist or is inaccessible.');
            }));
        }
    });
}
function checkIsAGOLApp(templateId) {
    return __awaiter(this, void 0, void 0, function* () {
        const portalUrl = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().portalUrl;
        if (jimu_core__WEBPACK_IMPORTED_MODULE_0__.portalUrlUtils.isAGOLDomain(portalUrl)) {
            return yield Promise.reject(false);
        }
        const getAppInfoParams = {
            id: templateId,
            portalUrl: 'https://maps.arcgis.com',
            isLocalApp: false
        };
        return yield (0,_index__WEBPACK_IMPORTED_MODULE_4__.getAppInfo)(getAppInfoParams).then((localAppInfo) => __awaiter(this, void 0, void 0, function* () {
            return yield Promise.resolve(getAppInfoParams);
            // eslint-disable-next-line
        })).catch((err) => __awaiter(this, void 0, void 0, function* () {
            return yield Promise.reject('Item does not exist or is inaccessible.');
        }));
    });
}
function getConfigFromPortalItemResource(appID) {
    return __awaiter(this, void 0, void 0, function* () {
        const sessionManager = jimu_core__WEBPACK_IMPORTED_MODULE_0__.SessionManager.getInstance();
        const timestamp = new Date().getTime();
        return yield request(`${jimu_core__WEBPACK_IMPORTED_MODULE_0__.portalUrlUtils.getPortalRestUrl((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().portalUrl)}/content/items/${appID}/resources/config/config.json`, {
            authentication: sessionManager.getSessionByUrl((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().portalUrl),
            httpMethod: 'GET',
            params: {
                timestamp: timestamp
            }
        }).catch((err) => __awaiter(this, void 0, void 0, function* () {
            return yield Promise.reject(null);
        }));
    });
}
function getResourceOrigin(originalAppInfo) {
    const portalUrl = isAGOLApp(originalAppInfo) ? jimu_core__WEBPACK_IMPORTED_MODULE_0__.urlUtils.getArcgisOnlineUrl() : (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().portalUrl;
    const isLocalAppResourceOrigin = originalAppInfo === null || originalAppInfo === void 0 ? void 0 : originalAppInfo.isLocalApp;
    if (isLocalAppResourceOrigin) {
        // local app`s resource origin in devEdtion
        return _local_rest_service__WEBPACK_IMPORTED_MODULE_5__.getOriginUrl() + '/apps/';
    }
    else {
        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.portalUrlUtils.getPlatformUrlByOrgUrl(portalUrl) +
            '/sharing/rest/content/items/');
    }
}
function createApp(appInfo, folderId) {
    return __awaiter(this, void 0, void 0, function* () {
        if (folderId) {
            return yield (0,_rest_service__WEBPACK_IMPORTED_MODULE_1__.createAppInFolder)({
                item: appInfo,
                folderId: folderId,
                authentication: jimu_core__WEBPACK_IMPORTED_MODULE_0__.SessionManager.getInstance().getMainSession()
            });
        }
        else {
            return yield (0,_rest_service__WEBPACK_IMPORTED_MODULE_1__.createItem)({
                item: appInfo,
                authentication: jimu_core__WEBPACK_IMPORTED_MODULE_0__.SessionManager.getInstance().getMainSession()
            });
        }
    });
}
function initAppConfig(appConfig) {
    if (!appConfig.attributes) {
        appConfig.attributes = {};
    }
    if (!appConfig.widgets) {
        appConfig.widgets = {};
    }
    if (!appConfig.widgetsManifest) {
        appConfig.widgetsManifest = {};
    }
    if (!appConfig.views) {
        appConfig.views = {};
    }
    if (!appConfig.sections) {
        appConfig.sections = {};
    }
    if (!appConfig.dialogs) {
        appConfig.dialogs = {};
    }
    if (!appConfig.pages) {
        appConfig.pages = {};
    }
    if (!appConfig.layouts) {
        appConfig.layouts = {};
    }
    if (!appConfig.dataSources) {
        appConfig.dataSources = {};
    }
    if (!appConfig.messageConfigs) {
        appConfig.messageConfigs = {};
    }
    return appConfig;
}
function optimizeWidgetsConfig(appConfig, appInfo) {
    Object.values(appConfig.widgets).forEach((json) => {
        if (json.uri === 'widgets/common/text/') {
            optimizeTextWidgetConfig(json.config, appInfo);
        }
    });
    return appConfig;
}
function optimizeTextWidgetConfig(config, appInfo) {
    const isTemplate = appInfo.type === _type__WEBPACK_IMPORTED_MODULE_3__.AppType.TemplateType;
    //Do not remove placeholder for template type app
    if (isTemplate)
        return config;
    //Placeholder are useless at run time if display text is configured.
    if (!isBlankRichText(config === null || config === void 0 ? void 0 : config.text)) {
        delete config.placeholder;
    }
    return config;
}
/**
 * Update the history labels in draft app config, then return the draft app config
 * @param draftAppConfig
 * @param publishedAppConfig
 */
function updateHistoryLabels(draftAppConfig, publishedAppConfig) {
    if (publishedAppConfig.__not_publish) {
        return draftAppConfig;
    }
    // remove ids that are not existed
    if (draftAppConfig.historyLabels) {
        removeNonExistIds(draftAppConfig, 'pages');
        removeNonExistIds(draftAppConfig, 'views');
        removeNonExistIds(draftAppConfig, 'dialogs');
    }
    addHisLabels(draftAppConfig, publishedAppConfig, 'pages');
    addHisLabels(draftAppConfig, publishedAppConfig, 'views');
    addHisLabels(draftAppConfig, publishedAppConfig, 'dialogs');
    return draftAppConfig;
}
function updateThumbnailForSaveAsApp(originAppInfo, newAppInfo, thumbnailFiles) {
    return __awaiter(this, void 0, void 0, function* () {
        if (thumbnailFiles) {
            const session = jimu_core__WEBPACK_IMPORTED_MODULE_0__.SessionManager.getInstance().getMainSession();
            const localAppItem = {
                id: newAppInfo.id,
                f: 'json',
                token: session === null || session === void 0 ? void 0 : session.token,
                thumbnail: thumbnailFiles
            };
            yield (0,_index__WEBPACK_IMPORTED_MODULE_4__.updateAppThumbnail)(localAppItem, newAppInfo.owner);
        }
        else {
            return yield updateThumbnail(newAppInfo.id, originAppInfo, (originAppInfo === null || originAppInfo === void 0 ? void 0 : originAppInfo.thumbnailurl) || originAppInfo.thumbnail);
        }
    });
}
/**
 * Deep clone. But only clone two levels.
 * And param must be Object.
 */
function cloneObj(obj) {
    const result = {};
    Object.keys(obj).forEach(id => {
        result[id] = Object.assign({}, obj[id]);
    });
    return result;
}
function removeNonExistIds(appConfig, type) {
    const his = appConfig.historyLabels;
    Object.keys(his[type] || {}).forEach(hisId => {
        var _a;
        if (!((_a = appConfig[type]) === null || _a === void 0 ? void 0 : _a[hisId])) {
            delete his[type][hisId];
        }
    });
}
function addHisLabels(draftAppConfig, publishedAppConfig, type) {
    const draftObj = draftAppConfig[type];
    const publishedObj = publishedAppConfig[type];
    if (!draftObj || !publishedObj) {
        return;
    }
    Object.keys(draftObj).forEach(id => {
        var _a, _b;
        const hisLabels = ((_b = (_a = publishedAppConfig.historyLabels) === null || _a === void 0 ? void 0 : _a[type]) === null || _b === void 0 ? void 0 : _b[id]) || [];
        if (publishedObj[id] && draftObj[id].label !== publishedObj[id].label) {
            if (!hisLabels.includes(publishedObj[id].label)) {
                hisLabels.push(publishedObj[id].label);
            }
        }
        if (hisLabels.length > 0) {
            if (!draftAppConfig.historyLabels) {
                draftAppConfig.historyLabels = {
                    [type]: {
                        [id]: hisLabels
                    }
                };
            }
            else if (!draftAppConfig.historyLabels[type]) {
                draftAppConfig.historyLabels[type] = {
                    [id]: hisLabels
                };
            }
            else {
                draftAppConfig.historyLabels[type][id] = hisLabels;
            }
        }
    });
}
const HTML_TAG_REGEXP = /<[^>]*>/mg;
/**
 * Check whether is rich text with empty content.
 */
const isBlankRichText = (html) => {
    if (!html)
        return true;
    if (html === '<p></p>' || html === '<p><br></p>')
        return true;
    let plainText = '';
    if (!html.includes('<')) {
        plainText = html;
    }
    else {
        plainText = html.replace(HTML_TAG_REGEXP, '');
    }
    plainText = plainText === null || plainText === void 0 ? void 0 : plainText.trim();
    return !plainText;
};
function replaceExbVersionInAppConfig(appConfig) {
    var _a;
    if (!appConfig)
        return null;
    const isHigherVersionApp = jimu_core__WEBPACK_IMPORTED_MODULE_0__.semver.lt(jimu_core__WEBPACK_IMPORTED_MODULE_0__.version, appConfig === null || appConfig === void 0 ? void 0 : appConfig.exbVersion);
    if (isHigherVersionApp) {
        //downgrade app version
        appConfig = appConfig.set('exbVersion', jimu_core__WEBPACK_IMPORTED_MODULE_0__.version);
    }
    const config = (_a = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().appStateInBuilder) === null || _a === void 0 ? void 0 : _a.appConfig;
    const widgets = config.widgets || {};
    Object.keys(widgets).forEach(widgetId => {
        var _a, _b, _c, _d, _e;
        //Manifest.version is the version of the current widget code,
        //When the version of the widget is higher than the current code version, it needs to be downgraded to be consistent with the manifest.version
        //For custom widgets, if the version they use is not consistent with ExbBuilder, it needs further discussion on how to deal with it
        const isHigherVersionWidget = jimu_core__WEBPACK_IMPORTED_MODULE_0__.semver.lt((_b = (_a = widgets[widgetId]) === null || _a === void 0 ? void 0 : _a.manifest) === null || _b === void 0 ? void 0 : _b.version, (_c = widgets[widgetId]) === null || _c === void 0 ? void 0 : _c.version);
        if (isHigherVersionWidget) {
            appConfig = appConfig.setIn(['widgets', widgetId, 'version'], (_e = (_d = widgets[widgetId]) === null || _d === void 0 ? void 0 : _d.manifest) === null || _e === void 0 ? void 0 : _e.version);
        }
    });
    return appConfig;
}
function initAppConfigOfNewApp(appConfig) {
    var _a, _b;
    if (appConfig.attributes) {
        appConfig.attributes.portalUrl = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().portalUrl;
    }
    else {
        appConfig.attributes = {
            portalUrl: (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().portalUrl
        };
    }
    const sharedThemeJson = (_b = (_a = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().portalSelf) === null || _a === void 0 ? void 0 : _a.portalProperties) === null || _b === void 0 ? void 0 : _b.sharedTheme;
    appConfig.sharedThemeVariables = jimu_core__WEBPACK_IMPORTED_MODULE_0__.sharedThemeUtils.createSharedThemeVariables(sharedThemeJson);
    return appConfig;
}


/***/ }),

/***/ "./jimu-for-builder/lib/service/index.tsx":
/*!************************************************!*\
  !*** ./jimu-for-builder/lib/service/index.tsx ***!
  \************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppType: () => (/* reexport safe */ _type__WEBPACK_IMPORTED_MODULE_2__.AppType),
/* harmony export */   PublishStatus: () => (/* reexport safe */ _type__WEBPACK_IMPORTED_MODULE_2__.PublishStatus),
/* harmony export */   SearchType: () => (/* reexport safe */ _type__WEBPACK_IMPORTED_MODULE_2__.SearchType),
/* harmony export */   appServices: () => (/* reexport module object */ _app_service__WEBPACK_IMPORTED_MODULE_0__),
/* harmony export */   createAppCallBack: () => (/* reexport safe */ _app_service_util__WEBPACK_IMPORTED_MODULE_3__.createAppCallBack),
/* harmony export */   getResourceOrigin: () => (/* reexport safe */ _app_service_util__WEBPACK_IMPORTED_MODULE_3__.getResourceOrigin),
/* harmony export */   initAppConfigOfNewApp: () => (/* reexport safe */ _app_service_util__WEBPACK_IMPORTED_MODULE_3__.initAppConfigOfNewApp),
/* harmony export */   toCreateAppByDefaultTemplate: () => (/* reexport safe */ _app_service_util__WEBPACK_IMPORTED_MODULE_3__.toCreateAppByDefaultTemplate),
/* harmony export */   userServices: () => (/* reexport module object */ _user_service__WEBPACK_IMPORTED_MODULE_1__)
/* harmony export */ });
/* harmony import */ var _app_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./app-service */ "./jimu-for-builder/lib/service/app-service/index.ts");
/* harmony import */ var _user_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./user-service */ "./jimu-for-builder/lib/service/user-service.tsx");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./type */ "./jimu-for-builder/lib/service/type/index.ts");
/* harmony import */ var _app_service_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-service/util */ "./jimu-for-builder/lib/service/app-service/util.ts");







/***/ }),

/***/ "./jimu-for-builder/lib/service/jimu-request/index.ts":
/*!************************************************************!*\
  !*** ./jimu-for-builder/lib/service/jimu-request/index.ts ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getGroupCategorySchema: () => (/* reexport safe */ _items_get_category_schema__WEBPACK_IMPORTED_MODULE_5__.getGroupCategorySchema),
/* harmony export */   getGroupContent: () => (/* reexport safe */ _items_get_user_content__WEBPACK_IMPORTED_MODULE_1__.getGroupContent),
/* harmony export */   getOrgCategorySchema: () => (/* reexport safe */ _items_get_category_schema__WEBPACK_IMPORTED_MODULE_5__.getOrgCategorySchema),
/* harmony export */   getUserContent: () => (/* reexport safe */ _items_get_user_content__WEBPACK_IMPORTED_MODULE_1__.getUserContent),
/* harmony export */   itemsgroups: () => (/* reexport safe */ _items_itemsgroups__WEBPACK_IMPORTED_MODULE_4__.itemsgroups),
/* harmony export */   shareItems: () => (/* reexport safe */ _items_share_items__WEBPACK_IMPORTED_MODULE_2__.shareItems),
/* harmony export */   unShareItems: () => (/* reexport safe */ _items_unshare_items__WEBPACK_IMPORTED_MODULE_3__.unShareItems),
/* harmony export */   updateItem: () => (/* reexport safe */ _items_update_thumbnail__WEBPACK_IMPORTED_MODULE_0__.updateItem)
/* harmony export */ });
/* harmony import */ var _items_update_thumbnail__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./items/update-thumbnail */ "./jimu-for-builder/lib/service/jimu-request/items/update-thumbnail.ts");
/* harmony import */ var _items_get_user_content__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./items/get-user-content */ "./jimu-for-builder/lib/service/jimu-request/items/get-user-content.ts");
/* harmony import */ var _items_share_items__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./items/share-items */ "./jimu-for-builder/lib/service/jimu-request/items/share-items.ts");
/* harmony import */ var _items_unshare_items__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./items/unshare-items */ "./jimu-for-builder/lib/service/jimu-request/items/unshare-items.ts");
/* harmony import */ var _items_itemsgroups__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./items/itemsgroups */ "./jimu-for-builder/lib/service/jimu-request/items/itemsgroups.ts");
/* harmony import */ var _items_get_category_schema__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./items/get-category-schema */ "./jimu-for-builder/lib/service/jimu-request/items/get-category-schema.ts");








/***/ }),

/***/ "./jimu-for-builder/lib/service/jimu-request/items/get-category-schema.ts":
/*!********************************************************************************!*\
  !*** ./jimu-for-builder/lib/service/jimu-request/items/get-category-schema.ts ***!
  \********************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getGroupCategorySchema: () => (/* binding */ getGroupCategorySchema),
/* harmony export */   getOrgCategorySchema: () => (/* binding */ getOrgCategorySchema)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./jimu-for-builder/lib/service/jimu-request/util.ts");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-core */ "jimu-core");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function getGroupCategorySchema(groupId, requestOptions, isArcGisOnlineRequest = false) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = `${(0,_util__WEBPACK_IMPORTED_MODULE_0__.getOriginUrl)(isArcGisOnlineRequest)}/sharing/rest/community/groups/${groupId}/categorySchema`;
        if (isArcGisOnlineRequest && !isPortalAGOL()) {
            delete requestOptions.authentication;
        }
        const options = Object.assign(Object.assign({}, requestOptions), { params: {
                id: groupId
            }, httpMethod: 'GET' });
        const request = jimu_core__WEBPACK_IMPORTED_MODULE_1__.esri.restRequest.request;
        return yield request(url, options);
    });
}
function getOrgCategorySchema(requestOptions, isArcGisOnlineRequest = false) {
    return __awaiter(this, void 0, void 0, function* () {
        const orgId = (0,_util__WEBPACK_IMPORTED_MODULE_0__.getOriginId)(isArcGisOnlineRequest);
        const url = `${(0,_util__WEBPACK_IMPORTED_MODULE_0__.getOriginUrl)(isArcGisOnlineRequest)}/sharing/rest/portals/${orgId}/categorySchema`;
        if (isArcGisOnlineRequest && !isPortalAGOL()) {
            delete requestOptions.authentication;
        }
        const options = Object.assign(Object.assign({}, requestOptions), { httpMethod: 'GET' });
        const request = jimu_core__WEBPACK_IMPORTED_MODULE_1__.esri.restRequest.request;
        return yield request(url, options);
    });
}
function isPortalAGOL() {
    const portalUrl = (0,jimu_core__WEBPACK_IMPORTED_MODULE_1__.getAppStore)().getState().portalUrl;
    return jimu_core__WEBPACK_IMPORTED_MODULE_1__.portalUrlUtils.isAGOLDomain(portalUrl);
}


/***/ }),

/***/ "./jimu-for-builder/lib/service/jimu-request/items/get-user-content.ts":
/*!*****************************************************************************!*\
  !*** ./jimu-for-builder/lib/service/jimu-request/items/get-user-content.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getGroupContent: () => (/* binding */ getGroupContent),
/* harmony export */   getUserContent: () => (/* binding */ getUserContent)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../request */ "./jimu-for-builder/lib/service/jimu-request/request.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "./jimu-for-builder/lib/service/jimu-request/util.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function getUserContent(requestOptions) {
    return __awaiter(this, void 0, void 0, function* () {
        const session = jimu_core__WEBPACK_IMPORTED_MODULE_0__.SessionManager.getInstance().getMainSession();
        const url = `${(0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().portalUrl}/sharing/rest/content/users/${session === null || session === void 0 ? void 0 : session.username}`;
        const requestOption = Object.assign(Object.assign({}, requestOptions.params), { f: 'json', token: session === null || session === void 0 ? void 0 : session.token });
        return yield (0,_request__WEBPACK_IMPORTED_MODULE_1__.request)(url, requestOption, 'GET');
    });
}
function getGroupContent(groupId, requestOptions, isGetAGOLContent = false) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = `${(0,_util__WEBPACK_IMPORTED_MODULE_2__.getOriginUrl)(isGetAGOLContent)}/sharing/rest/content/groups/${groupId}/search`;
        if (isGetAGOLContent && !(0,_util__WEBPACK_IMPORTED_MODULE_2__.isPortalAGOL)()) {
            delete requestOptions.authentication;
        }
        const options = Object.assign(Object.assign({}, requestOptions), { httpMethod: 'GET' });
        const request = jimu_core__WEBPACK_IMPORTED_MODULE_0__.esri.restRequest.request;
        return yield request(url, options);
    });
}


/***/ }),

/***/ "./jimu-for-builder/lib/service/jimu-request/items/itemsgroups.ts":
/*!************************************************************************!*\
  !*** ./jimu-for-builder/lib/service/jimu-request/items/itemsgroups.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   itemsgroups: () => (/* binding */ itemsgroups)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

function itemsgroups(requestOptions) {
    return __awaiter(this, void 0, void 0, function* () {
        const session = jimu_core__WEBPACK_IMPORTED_MODULE_0__.SessionManager.getInstance().getMainSession();
        const url = `${(0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().portalUrl}/sharing/rest/content/itemsgroups`;
        const options = {
            params: requestOptions,
            httpMethod: 'GET',
            authentication: session
        };
        return yield jimu_core__WEBPACK_IMPORTED_MODULE_0__.esri.restRequest.request(url, options);
    });
}


/***/ }),

/***/ "./jimu-for-builder/lib/service/jimu-request/items/share-items.ts":
/*!************************************************************************!*\
  !*** ./jimu-for-builder/lib/service/jimu-request/items/share-items.ts ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   shareItems: () => (/* binding */ shareItems)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../request */ "./jimu-for-builder/lib/service/jimu-request/request.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function shareItems(requestOptions) {
    return __awaiter(this, void 0, void 0, function* () {
        const session = jimu_core__WEBPACK_IMPORTED_MODULE_0__.SessionManager.getInstance().getMainSession();
        const url = `${(0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().portalUrl}/sharing/rest/content/items/${requestOptions.items}/share`;
        requestOptions = Object.assign(Object.assign({}, requestOptions), { f: 'json', token: session === null || session === void 0 ? void 0 : session.token });
        const keys = Object.keys(requestOptions);
        const data = new FormData();
        for (let i = 0; i < keys.length; i++) {
            data.append(keys[i], requestOptions[keys[i]]);
        }
        requestOptions = data;
        return yield (0,_request__WEBPACK_IMPORTED_MODULE_1__.request)(url, requestOptions);
    });
}


/***/ }),

/***/ "./jimu-for-builder/lib/service/jimu-request/items/unshare-items.ts":
/*!**************************************************************************!*\
  !*** ./jimu-for-builder/lib/service/jimu-request/items/unshare-items.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   unShareItems: () => (/* binding */ unShareItems)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../request */ "./jimu-for-builder/lib/service/jimu-request/request.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function unShareItems(requestOptions) {
    return __awaiter(this, void 0, void 0, function* () {
        const session = jimu_core__WEBPACK_IMPORTED_MODULE_0__.SessionManager.getInstance().getMainSession();
        const url = `${(0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().portalUrl}/sharing/rest/content/items/${requestOptions.items}/unshare`;
        requestOptions = Object.assign(Object.assign({}, requestOptions), { f: 'json', token: session === null || session === void 0 ? void 0 : session.token });
        const keys = Object.keys(requestOptions);
        const data = new FormData();
        for (let i = 0; i < keys.length; i++) {
            data.append(keys[i], requestOptions[keys[i]]);
        }
        requestOptions = data;
        return yield (0,_request__WEBPACK_IMPORTED_MODULE_1__.request)(url, requestOptions);
    });
}


/***/ }),

/***/ "./jimu-for-builder/lib/service/jimu-request/items/update-thumbnail.ts":
/*!*****************************************************************************!*\
  !*** ./jimu-for-builder/lib/service/jimu-request/items/update-thumbnail.ts ***!
  \*****************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateItem: () => (/* binding */ updateItem)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../request */ "./jimu-for-builder/lib/service/jimu-request/request.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function updateItem(requestOptions) {
    return __awaiter(this, void 0, void 0, function* () {
        const session = jimu_core__WEBPACK_IMPORTED_MODULE_0__.SessionManager.getInstance().getMainSession();
        const owner = requestOptions.owner ? requestOptions.owner : session === null || session === void 0 ? void 0 : session.username;
        const url = `${(0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().portalUrl}/sharing/rest/content/users/${owner}/items/${requestOptions.item.id}/update`;
        requestOptions.params = Object.assign(Object.assign({}, requestOptions.params), requestOptions.item);
        const keys = Object.keys(requestOptions.params);
        const data = new FormData();
        for (let i = 0; i < keys.length; i++) {
            data.append(keys[i], requestOptions.params[keys[i]]);
        }
        requestOptions.params = data;
        return yield (0,_request__WEBPACK_IMPORTED_MODULE_1__.request)(url, data);
    });
}


/***/ }),

/***/ "./jimu-for-builder/lib/service/jimu-request/request.ts":
/*!**************************************************************!*\
  !*** ./jimu-for-builder/lib/service/jimu-request/request.ts ***!
  \**************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   request: () => (/* binding */ request)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

const isWebTier = jimu_core__WEBPACK_IMPORTED_MODULE_0__.SessionManager.getInstance().isTrustedServer((0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().portalUrl);
function request(url, requestOptions = { f: 'json' }, requestType = 'POST') {
    return __awaiter(this, void 0, void 0, function* () {
        if (requestType === 'GET') {
            const requestUrl = url + encodeQueryString(requestOptions);
            return yield fetch(requestUrl, {
                credentials: isWebTier ? 'include' : 'same-origin',
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((response) => __awaiter(this, void 0, void 0, function* () {
                return yield response.json();
            })).then((data) => __awaiter(this, void 0, void 0, function* () {
                return yield Promise.resolve(data);
            }));
        }
        if (requestType === 'POST') {
            if (requestOptions && requestOptions.constructor.name === 'FormData') {
                return yield fetch(url, {
                    credentials: isWebTier ? 'include' : 'same-origin',
                    method: 'POST',
                    body: requestOptions
                }).then((response) => __awaiter(this, void 0, void 0, function* () {
                    return yield response.json();
                })).then((data) => __awaiter(this, void 0, void 0, function* () {
                    return yield Promise.resolve(data);
                }));
            }
            else {
                return yield fetch(url, {
                    credentials: isWebTier ? 'include' : 'same-origin',
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(requestOptions)
                }).then((response) => __awaiter(this, void 0, void 0, function* () {
                    return yield response.json();
                })).then((data) => __awaiter(this, void 0, void 0, function* () {
                    return yield Promise.resolve(data);
                }));
            }
        }
        return yield Promise.reject(null);
    });
}
function encodeQueryString(params) {
    if (!params) {
        return '';
    }
    const keys = Object.keys(params);
    return keys.length
        ? '?' + keys
            .map(key => encodeURIComponent(key) +
            '=' + encodeURIComponent(params[key]))
            .join('&')
        : '';
}


/***/ }),

/***/ "./jimu-for-builder/lib/service/jimu-request/util.ts":
/*!***********************************************************!*\
  !*** ./jimu-for-builder/lib/service/jimu-request/util.ts ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getOriginId: () => (/* binding */ getOriginId),
/* harmony export */   getOriginUrl: () => (/* binding */ getOriginUrl),
/* harmony export */   getUserContentUrl: () => (/* binding */ getUserContentUrl),
/* harmony export */   getUserName: () => (/* binding */ getUserName),
/* harmony export */   isPortalAGOL: () => (/* binding */ isPortalAGOL)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");

function getOriginUrl(isArcGisOnlineRequest = false) {
    if (isArcGisOnlineRequest) {
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.urlUtils.getArcgisOnlineUrl();
    }
    else {
        return window.location.origin;
    }
}
function getUserContentUrl(isNotContainUsers = false) {
    if (isNotContainUsers) {
        return '/sharing/rest/content/';
    }
    else {
        return '/sharing/rest/content/users/';
    }
}
function getUserName() {
    var _a;
    return (_a = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().user) === null || _a === void 0 ? void 0 : _a.username;
}
function getOriginId(isArcGisOnlineRequest = false) {
    var _a;
    if (isArcGisOnlineRequest) {
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.urlUtils.getArcgisOnlineOrgId();
    }
    else {
        return (_a = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().user) === null || _a === void 0 ? void 0 : _a.orgId;
    }
}
function isPortalAGOL() {
    const portalUrl = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().portalUrl;
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.portalUrlUtils.isAGOLDomain(portalUrl);
}


/***/ }),

/***/ "./jimu-for-builder/lib/service/local-rest-service/index.ts":
/*!******************************************************************!*\
  !*** ./jimu-for-builder/lib/service/local-rest-service/index.ts ***!
  \******************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addItemResource: () => (/* reexport safe */ _items_add__WEBPACK_IMPORTED_MODULE_5__.addItemResource),
/* harmony export */   checkItemVersion: () => (/* reexport safe */ _items_create__WEBPACK_IMPORTED_MODULE_1__.checkItemVersion),
/* harmony export */   createItem: () => (/* reexport safe */ _items_create__WEBPACK_IMPORTED_MODULE_1__.createItem),
/* harmony export */   getItem: () => (/* reexport safe */ _items_get__WEBPACK_IMPORTED_MODULE_2__.getItem),
/* harmony export */   getItemData: () => (/* reexport safe */ _items_get__WEBPACK_IMPORTED_MODULE_2__.getItemData),
/* harmony export */   getItemResource: () => (/* reexport safe */ _items_get__WEBPACK_IMPORTED_MODULE_2__.getItemResource),
/* harmony export */   getItemResources: () => (/* reexport safe */ _items_get__WEBPACK_IMPORTED_MODULE_2__.getItemResources),
/* harmony export */   getOriginUrl: () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_7__.getOriginUrl),
/* harmony export */   getRequestMethod: () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_7__.getRequestMethod),
/* harmony export */   getUserContentUrl: () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_7__.getUserContentUrl),
/* harmony export */   getUserName: () => (/* reexport safe */ _util__WEBPACK_IMPORTED_MODULE_7__.getUserName),
/* harmony export */   importItem: () => (/* reexport safe */ _items_create__WEBPACK_IMPORTED_MODULE_1__.importItem),
/* harmony export */   removeItem: () => (/* reexport safe */ _items_remove__WEBPACK_IMPORTED_MODULE_3__.removeItem),
/* harmony export */   removeItemResource: () => (/* reexport safe */ _items_remove__WEBPACK_IMPORTED_MODULE_3__.removeItemResource),
/* harmony export */   request: () => (/* reexport safe */ _request__WEBPACK_IMPORTED_MODULE_6__.request),
/* harmony export */   searchItems: () => (/* reexport safe */ _items_search__WEBPACK_IMPORTED_MODULE_0__.searchItems),
/* harmony export */   searchItemsByPortalUrl: () => (/* reexport safe */ _items_search__WEBPACK_IMPORTED_MODULE_0__.searchItemsByPortalUrl),
/* harmony export */   updateItem: () => (/* reexport safe */ _items_update__WEBPACK_IMPORTED_MODULE_4__.updateItem),
/* harmony export */   updateItemResource: () => (/* reexport safe */ _items_update__WEBPACK_IMPORTED_MODULE_4__.updateItemResource)
/* harmony export */ });
/* harmony import */ var _items_search__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./items/search */ "./jimu-for-builder/lib/service/local-rest-service/items/search.ts");
/* harmony import */ var _items_create__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./items/create */ "./jimu-for-builder/lib/service/local-rest-service/items/create.ts");
/* harmony import */ var _items_get__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./items/get */ "./jimu-for-builder/lib/service/local-rest-service/items/get.ts");
/* harmony import */ var _items_remove__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./items/remove */ "./jimu-for-builder/lib/service/local-rest-service/items/remove.ts");
/* harmony import */ var _items_update__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./items/update */ "./jimu-for-builder/lib/service/local-rest-service/items/update.ts");
/* harmony import */ var _items_add__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./items/add */ "./jimu-for-builder/lib/service/local-rest-service/items/add.ts");
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./request */ "./jimu-for-builder/lib/service/local-rest-service/request.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./util */ "./jimu-for-builder/lib/service/local-rest-service/util.ts");










/***/ }),

/***/ "./jimu-for-builder/lib/service/local-rest-service/items/add.ts":
/*!**********************************************************************!*\
  !*** ./jimu-for-builder/lib/service/local-rest-service/items/add.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addItemResource: () => (/* binding */ addItemResource)
/* harmony export */ });
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../request */ "./jimu-for-builder/lib/service/local-rest-service/request.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ "./jimu-for-builder/lib/service/local-rest-service/util.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function addItemResource(requestOptions) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = `${(0,_util__WEBPACK_IMPORTED_MODULE_1__.getOriginUrl)()}${(0,_util__WEBPACK_IMPORTED_MODULE_1__.getUserContentUrl)()}items/${requestOptions.id}/addResources`;
        requestOptions.params = Object.assign(Object.assign({ fileName: requestOptions.name, text: requestOptions.content, access: requestOptions.private ? 'private' : 'inherit' }, requestOptions.params), { file: requestOptions.resource });
        delete requestOptions.params.file;
        requestOptions.params.file = requestOptions.resource;
        const keys = Object.keys(requestOptions.params);
        const data = new FormData();
        for (let i = 0; i < keys.length; i++) {
            data.append(keys[i], requestOptions.params[keys[i]]);
        }
        requestOptions.params = data;
        return yield (0,_request__WEBPACK_IMPORTED_MODULE_0__.request)(url, requestOptions);
    });
}


/***/ }),

/***/ "./jimu-for-builder/lib/service/local-rest-service/items/create.ts":
/*!*************************************************************************!*\
  !*** ./jimu-for-builder/lib/service/local-rest-service/items/create.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   checkItemVersion: () => (/* binding */ checkItemVersion),
/* harmony export */   createItem: () => (/* binding */ createItem),
/* harmony export */   importItem: () => (/* binding */ importItem)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../request */ "./jimu-for-builder/lib/service/local-rest-service/request.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "./jimu-for-builder/lib/service/local-rest-service/util.ts");
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./helpers */ "./jimu-for-builder/lib/service/local-rest-service/items/helpers.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};




function createItem(requestOptions) {
    return __awaiter(this, void 0, void 0, function* () {
        // delegate to createItemInFolder placing in the root of the filestore
        const options = Object.assign({ folderId: null }, requestOptions);
        return yield createItemInFolder(options);
    });
}
function createItemInFolder(requestOptions) {
    var _a, _b;
    return __awaiter(this, void 0, void 0, function* () {
        if (requestOptions.file && !requestOptions.multipart) {
            return yield Promise.reject(new Error('The request must be a multipart request for file uploading.'));
        }
        if (requestOptions.multipart && !requestOptions.filename) {
            return yield Promise.reject(new Error('The file name is required for a multipart request.'));
        }
        const userName = (0,_util__WEBPACK_IMPORTED_MODULE_2__.getUserName)();
        const owner = userName;
        const baseUrl = (0,_util__WEBPACK_IMPORTED_MODULE_2__.getOriginUrl)();
        const url = `${baseUrl}${(0,_util__WEBPACK_IMPORTED_MODULE_2__.getUserContentUrl)()}addItem`;
        requestOptions.params = Object.assign(Object.assign(Object.assign({}, requestOptions.params), (0,_helpers__WEBPACK_IMPORTED_MODULE_3__.serializeItem)(requestOptions.item)), { portalUrl: (_b = (_a = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)()) === null || _a === void 0 ? void 0 : _a.getState()) === null || _b === void 0 ? void 0 : _b.portalUrl });
        // serialize the item into something Portal will accept
        const options = jimu_core__WEBPACK_IMPORTED_MODULE_0__.esri.restRequest.appendCustomParams(requestOptions, [
            'owner',
            'folderId',
            'file',
            'dataUrl',
            'text',
            'async',
            'multipart',
            'filename',
            'overwrite'
        ], {
            params: Object.assign({}, requestOptions.params)
        });
        options.params.username = owner;
        return yield (0,_request__WEBPACK_IMPORTED_MODULE_1__.request)(url, options);
    });
}
function importItem(item, requestOptions) {
    return __awaiter(this, void 0, void 0, function* () {
        const baseUrl = (0,_util__WEBPACK_IMPORTED_MODULE_2__.getOriginUrl)();
        const url = `${baseUrl}${(0,_util__WEBPACK_IMPORTED_MODULE_2__.getUserContentUrl)()}importItem`;
        if (!(item === null || item === void 0 ? void 0 : item.appZip)) {
            return Promise.reject('No app files');
        }
        requestOptions.params = Object.assign(Object.assign({}, requestOptions.params), item);
        const keys = Object.keys(requestOptions.params);
        const data = new FormData();
        for (let i = 0; i < keys.length; i++) {
            data.append(keys[i], requestOptions.params[keys[i]]);
        }
        requestOptions.params = data;
        return yield (0,_request__WEBPACK_IMPORTED_MODULE_1__.request)(url, requestOptions);
    });
}
function checkItemVersion(item, requestOptions) {
    return __awaiter(this, void 0, void 0, function* () {
        const baseUrl = (0,_util__WEBPACK_IMPORTED_MODULE_2__.getOriginUrl)();
        const url = `${baseUrl}${(0,_util__WEBPACK_IMPORTED_MODULE_2__.getUserContentUrl)()}checkItemVersion`;
        if (!(item === null || item === void 0 ? void 0 : item.appZip)) {
            return Promise.reject('No app files');
        }
        requestOptions.params = Object.assign(Object.assign({}, requestOptions.params), item);
        const keys = Object.keys(requestOptions.params);
        const data = new FormData();
        for (let i = 0; i < keys.length; i++) {
            data.append(keys[i], requestOptions.params[keys[i]]);
        }
        requestOptions.params = data;
        return yield (0,_request__WEBPACK_IMPORTED_MODULE_1__.request)(url, requestOptions);
    });
}


/***/ }),

/***/ "./jimu-for-builder/lib/service/local-rest-service/items/get.ts":
/*!**********************************************************************!*\
  !*** ./jimu-for-builder/lib/service/local-rest-service/items/get.ts ***!
  \**********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getItem: () => (/* binding */ getItem),
/* harmony export */   getItemData: () => (/* binding */ getItemData),
/* harmony export */   getItemResource: () => (/* binding */ getItemResource),
/* harmony export */   getItemResources: () => (/* binding */ getItemResources)
/* harmony export */ });
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util */ "./jimu-for-builder/lib/service/local-rest-service/util.ts");
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! jimu-core */ "jimu-core");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function getItemData(id, requestOptions, isArcGisOnlineRequest = false) {
    return __awaiter(this, void 0, void 0, function* () {
        const baseUrl = (0,_util__WEBPACK_IMPORTED_MODULE_0__.getOriginUrl)(isArcGisOnlineRequest);
        const url = `${baseUrl}${(0,_util__WEBPACK_IMPORTED_MODULE_0__.getUserContentUrl)(isArcGisOnlineRequest)}items/${id}/data`;
        // default to a GET request
        const options = Object.assign({ params: {} }, requestOptions);
        if (options.file) {
            options.params.f = null;
        }
        if (isArcGisOnlineRequest && !isPortalAGOL()) {
            delete options.authentication;
        }
        const request = (0,_util__WEBPACK_IMPORTED_MODULE_0__.getRequestMethod)(isArcGisOnlineRequest);
        return yield request(url, options).catch(err => {
            /* if the item doesn't include data, the response will be empty
               and the internal call to response.json() will fail */
            const emptyResponseErr = /Unexpected end of (JSON input|data at line 1 column 1)/i;
            /* istanbul ignore else */
            if (!emptyResponseErr.test(err.message)) {
                throw err;
            }
        });
    });
}
function getItem(id, requestOptions, isArcGisOnlineRequest = false) {
    return __awaiter(this, void 0, void 0, function* () {
        const baseUrl = (0,_util__WEBPACK_IMPORTED_MODULE_0__.getOriginUrl)(isArcGisOnlineRequest);
        // const users = isArcGisOnlineRequest ? '' : 'users/'
        const url = `${baseUrl}${(0,_util__WEBPACK_IMPORTED_MODULE_0__.getUserContentUrl)(isArcGisOnlineRequest)}items/${id}`;
        // default to a GET request
        const options = Object.assign({}, requestOptions);
        if (isArcGisOnlineRequest && !isPortalAGOL()) {
            delete options.authentication;
        }
        const request = (0,_util__WEBPACK_IMPORTED_MODULE_0__.getRequestMethod)(isArcGisOnlineRequest);
        return yield request(url, options);
    });
}
function getItemResources(id, requestOptions, isArcGisOnlineRequest = false) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = `${(0,_util__WEBPACK_IMPORTED_MODULE_0__.getOriginUrl)(isArcGisOnlineRequest)}${(0,_util__WEBPACK_IMPORTED_MODULE_0__.getUserContentUrl)(isArcGisOnlineRequest)}items/${id}/resources`;
        // mix in user supplied params
        requestOptions.params = Object.assign(Object.assign({}, requestOptions.params), { num: 1000 });
        if (isArcGisOnlineRequest && !isPortalAGOL()) {
            delete requestOptions.authentication;
        }
        const request = (0,_util__WEBPACK_IMPORTED_MODULE_0__.getRequestMethod)(isArcGisOnlineRequest);
        return yield request(url, requestOptions, 'GET');
    });
}
function getItemResource(id, requestOptions, isArcGisOnlineRequest = false) {
    return __awaiter(this, void 0, void 0, function* () {
        const resourceName = requestOptions.fileName;
        const url = `${(0,_util__WEBPACK_IMPORTED_MODULE_0__.getOriginUrl)(isArcGisOnlineRequest)}${(0,_util__WEBPACK_IMPORTED_MODULE_0__.getUserContentUrl)(isArcGisOnlineRequest)}items/${id}/resources/${resourceName}`;
        if (isArcGisOnlineRequest && !isPortalAGOL()) {
            delete requestOptions.authentication;
        }
        const request = (0,_util__WEBPACK_IMPORTED_MODULE_0__.getRequestMethod)(isArcGisOnlineRequest);
        return yield request(url, requestOptions, 'GET');
    });
}
function isPortalAGOL() {
    const portalUrl = (0,jimu_core__WEBPACK_IMPORTED_MODULE_1__.getAppStore)().getState().portalUrl;
    return jimu_core__WEBPACK_IMPORTED_MODULE_1__.portalUrlUtils.isAGOLDomain(portalUrl);
}


/***/ }),

/***/ "./jimu-for-builder/lib/service/local-rest-service/items/helpers.ts":
/*!**************************************************************************!*\
  !*** ./jimu-for-builder/lib/service/local-rest-service/items/helpers.ts ***!
  \**************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   determineOwner: () => (/* binding */ determineOwner),
/* harmony export */   serializeItem: () => (/* binding */ serializeItem)
/* harmony export */ });
/* Copyright (c) 2017-2018 Environmental Systems Research Institute, Inc.
 * Apache-2.0 */
/**
 * Serialize an item and its data into a json format accepted by the Portal API for create and update operations
 *
 * @param item Item to be serialized
 * @returns a formatted json object to be sent to Portal
 */
function serializeItem(item) {
    // create a clone so we're not messing with the original
    const clone = JSON.parse(JSON.stringify(item));
    // binary data needs POSTed as a `file`
    // JSON object literals should be passed as `text`.
    if (clone.data) {
        (typeof Blob !== 'undefined' && item.data instanceof Blob) ||
            // Node.js doesn't implement Blob
            item.data.constructor.name === 'ReadStream'
            ? (clone.file = item.data)
            : (clone.text = item.data);
        delete clone.data;
    }
    return clone;
}
/**
 * requestOptions.owner is given priority, requestOptions.item.owner will be checked next. If neither are present, authentication.username will be assumed.
 */
function determineOwner(requestOptions) {
    if (requestOptions.owner) {
        return requestOptions.owner;
    }
    if (requestOptions.item && requestOptions.item.owner) {
        return requestOptions.item.owner;
    }
    else {
        return requestOptions.authentication.username;
    }
}


/***/ }),

/***/ "./jimu-for-builder/lib/service/local-rest-service/items/remove.ts":
/*!*************************************************************************!*\
  !*** ./jimu-for-builder/lib/service/local-rest-service/items/remove.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   removeItem: () => (/* binding */ removeItem),
/* harmony export */   removeItemResource: () => (/* binding */ removeItemResource)
/* harmony export */ });
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../request */ "./jimu-for-builder/lib/service/local-rest-service/request.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util */ "./jimu-for-builder/lib/service/local-rest-service/util.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};


function removeItem(requestOptions) {
    return __awaiter(this, void 0, void 0, function* () {
        const userName = (0,_util__WEBPACK_IMPORTED_MODULE_1__.getUserName)();
        const baseUrl = (0,_util__WEBPACK_IMPORTED_MODULE_1__.getOriginUrl)();
        requestOptions.userName = userName;
        const url = `${baseUrl}${(0,_util__WEBPACK_IMPORTED_MODULE_1__.getUserContentUrl)()}items/${requestOptions.id}/delete`;
        return yield (0,_request__WEBPACK_IMPORTED_MODULE_0__.request)(url, requestOptions);
    });
}
function removeItemResource(requestOptions) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = `${(0,_util__WEBPACK_IMPORTED_MODULE_1__.getOriginUrl)()}${(0,_util__WEBPACK_IMPORTED_MODULE_1__.getUserContentUrl)()}items/${requestOptions.id}/removeResources`;
        // mix in user supplied params
        requestOptions.params = Object.assign(Object.assign({}, requestOptions.params), { resource: requestOptions.resource });
        return yield (0,_request__WEBPACK_IMPORTED_MODULE_0__.request)(url, requestOptions);
    });
}


/***/ }),

/***/ "./jimu-for-builder/lib/service/local-rest-service/items/search.ts":
/*!*************************************************************************!*\
  !*** ./jimu-for-builder/lib/service/local-rest-service/items/search.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   searchItems: () => (/* binding */ searchItems),
/* harmony export */   searchItemsByPortalUrl: () => (/* binding */ searchItemsByPortalUrl)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../type */ "./jimu-for-builder/lib/service/type/index.ts");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../index */ "./jimu-for-builder/lib/service/local-rest-service/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
/* eslint-disable prefer-const */



function searchItems(search, searchType = _type__WEBPACK_IMPORTED_MODULE_1__.SearchType.Other) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield genericSearch(search, 'item', searchType);
    });
}
function genericSearch(search, searchRequestType, searchType = _type__WEBPACK_IMPORTED_MODULE_1__.SearchType.Other) {
    return __awaiter(this, void 0, void 0, function* () {
        let url;
        let options;
        const originUrl = searchType === _type__WEBPACK_IMPORTED_MODULE_1__.SearchType.AGOL ? 'https://www.arcgis.com' : window.location.origin;
        url = `${originUrl}/sharing/rest/search`;
        if (typeof search === 'string' || search instanceof jimu_core__WEBPACK_IMPORTED_MODULE_0__.esri.restPortal.SearchQueryBuilder) {
            options = {
                params: {
                    q: search
                }
            };
        }
        else {
            options = jimu_core__WEBPACK_IMPORTED_MODULE_0__.esri.restRequest.appendCustomParams(Object.assign(Object.assign({}, search), { f: 'json' }), ['q', 'num', 'start', 'sortField', 'sortOrder', 'portalUrl', 'f']);
        }
        // send the request
        return (0,_index__WEBPACK_IMPORTED_MODULE_2__.request)(url, options, 'GET').then(r => {
            if (r.nextStart && r.nextStart !== -1) {
                r.nextPage = function () {
                    return __awaiter(this, void 0, void 0, function* () {
                        let newOptions;
                        if (typeof search === 'string' ||
                            search instanceof jimu_core__WEBPACK_IMPORTED_MODULE_0__.esri.restPortal.SearchQueryBuilder) {
                            newOptions = {
                                q: search,
                                start: r.nextStart
                            };
                        }
                        else {
                            newOptions = search;
                            newOptions.start = r.nextStart;
                        }
                        return yield genericSearch(newOptions, searchRequestType);
                    });
                };
            }
            return r;
        });
    });
}
function searchItemsByPortalUrl(search, portalUrl) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield genericSearchByPortalUrl(search, portalUrl);
    });
}
function genericSearchByPortalUrl(search, portalUrl) {
    return __awaiter(this, void 0, void 0, function* () {
        let url;
        let options;
        if (!url)
            Promise.resolve(null);
        url = `${portalUrl}/sharing/rest/search`;
        if (typeof search === 'string' || search instanceof jimu_core__WEBPACK_IMPORTED_MODULE_0__.esri.restPortal.SearchQueryBuilder) {
            options = {
                params: {
                    q: search
                }
            };
        }
        else {
            options = jimu_core__WEBPACK_IMPORTED_MODULE_0__.esri.restRequest.appendCustomParams(Object.assign(Object.assign({}, search), { f: 'json' }), ['q', 'num', 'start', 'sortField', 'sortOrder', 'portalUrl', 'f']);
        }
        // send the request
        return (0,_index__WEBPACK_IMPORTED_MODULE_2__.request)(url, options, 'GET').then(r => {
            if (r.nextStart && r.nextStart !== -1) {
                r.nextPage = function () {
                    return __awaiter(this, void 0, void 0, function* () {
                        let newOptions;
                        if (typeof search === 'string' ||
                            search instanceof jimu_core__WEBPACK_IMPORTED_MODULE_0__.esri.restPortal.SearchQueryBuilder) {
                            newOptions = {
                                q: search,
                                start: r.nextStart
                            };
                        }
                        else {
                            newOptions = search;
                            newOptions.start = r.nextStart;
                        }
                        return yield genericSearchByPortalUrl(newOptions, 'item');
                    });
                };
            }
            return r;
        });
    });
}


/***/ }),

/***/ "./jimu-for-builder/lib/service/local-rest-service/items/update.ts":
/*!*************************************************************************!*\
  !*** ./jimu-for-builder/lib/service/local-rest-service/items/update.ts ***!
  \*************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   updateItem: () => (/* binding */ updateItem),
/* harmony export */   updateItemResource: () => (/* binding */ updateItemResource)
/* harmony export */ });
/* harmony import */ var _helpers__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./helpers */ "./jimu-for-builder/lib/service/local-rest-service/items/helpers.ts");
/* harmony import */ var _request__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../request */ "./jimu-for-builder/lib/service/local-rest-service/request.ts");
/* harmony import */ var _util__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util */ "./jimu-for-builder/lib/service/local-rest-service/util.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};



function updateItem(requestOptions) {
    return __awaiter(this, void 0, void 0, function* () {
        const userName = (0,_util__WEBPACK_IMPORTED_MODULE_2__.getUserName)();
        const baseUrl = (0,_util__WEBPACK_IMPORTED_MODULE_2__.getOriginUrl)();
        requestOptions.userName = userName;
        const url = `${baseUrl}${(0,_util__WEBPACK_IMPORTED_MODULE_2__.getUserContentUrl)()}items/${requestOptions.item.id}/update`;
        // serialize the item into something Portal will accept
        requestOptions.params = Object.assign(Object.assign({}, requestOptions.params), (0,_helpers__WEBPACK_IMPORTED_MODULE_0__.serializeItem)(requestOptions.item));
        if (requestOptions.item.thumbnail && typeof (requestOptions.item.thumbnail) !== 'string') {
            requestOptions.params = Object.assign(Object.assign({}, requestOptions.params), requestOptions.item);
            const keys = Object.keys(requestOptions.params);
            const data = new FormData();
            for (let i = 0; i < keys.length; i++) {
                data.append(keys[i], requestOptions.params[keys[i]]);
            }
            requestOptions.params = data;
        }
        return yield (0,_request__WEBPACK_IMPORTED_MODULE_1__.request)(url, requestOptions);
    });
}
function updateItemResource(requestOptions) {
    return __awaiter(this, void 0, void 0, function* () {
        const url = `${(0,_util__WEBPACK_IMPORTED_MODULE_2__.getOriginUrl)()}${(0,_util__WEBPACK_IMPORTED_MODULE_2__.getUserContentUrl)()}items/${requestOptions.id}/updateResources`;
        // mix in user supplied params
        requestOptions.params = Object.assign(Object.assign({ fileName: requestOptions.name, text: requestOptions.content }, requestOptions.params), { file: requestOptions.resource });
        delete requestOptions.params.file;
        requestOptions.params.file = requestOptions.resource;
        // only override the access specified previously if 'private' is passed explicitly
        if (typeof requestOptions.private !== 'undefined') {
            requestOptions.params.access = requestOptions.private
                ? 'private'
                : 'inherit';
        }
        const keys = Object.keys(requestOptions.params);
        const data = new FormData();
        for (let i = 0; i < keys.length; i++) {
            data.append(keys[i], requestOptions.params[keys[i]]);
        }
        requestOptions.params = data;
        return yield (0,_request__WEBPACK_IMPORTED_MODULE_1__.request)(url, requestOptions);
    });
}


/***/ }),

/***/ "./jimu-for-builder/lib/service/local-rest-service/request.ts":
/*!********************************************************************!*\
  !*** ./jimu-for-builder/lib/service/local-rest-service/request.ts ***!
  \********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   request: () => (/* binding */ request)
/* harmony export */ });
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
function request(url, requestOptions = { params: { f: 'json' } }, requestType = 'POST') {
    return __awaiter(this, void 0, void 0, function* () {
        if (requestType === 'GET') {
            const requestUrl = url + encodeQueryString(requestOptions.params);
            return yield fetch(requestUrl, {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json'
                }
            }).then((response) => __awaiter(this, void 0, void 0, function* () {
                return yield response.json();
            })).then((data) => __awaiter(this, void 0, void 0, function* () {
                return yield Promise.resolve(data);
            }));
        }
        if (requestType === 'POST') {
            if (requestOptions.params && requestOptions.params.constructor.name === 'FormData') {
                return yield fetch(url, {
                    method: 'POST',
                    body: requestOptions.params
                }).then((response) => __awaiter(this, void 0, void 0, function* () {
                    return yield response.json();
                })).then((data) => __awaiter(this, void 0, void 0, function* () {
                    return yield Promise.resolve(data);
                }));
            }
            else {
                return yield fetch(url, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(requestOptions.params)
                }).then((response) => __awaiter(this, void 0, void 0, function* () {
                    return yield response.json();
                })).then((data) => __awaiter(this, void 0, void 0, function* () {
                    return yield Promise.resolve(data);
                }));
            }
        }
        return yield Promise.reject(null);
    });
}
function encodeQueryString(params) {
    if (!params) {
        return '';
    }
    const keys = Object.keys(params);
    return keys.length
        ? '?' + keys
            .map(key => encodeURIComponent(key) +
            '=' + encodeURIComponent(params[key]))
            .join('&')
        : '';
}


/***/ }),

/***/ "./jimu-for-builder/lib/service/local-rest-service/util.ts":
/*!*****************************************************************!*\
  !*** ./jimu-for-builder/lib/service/local-rest-service/util.ts ***!
  \*****************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   getOriginUrl: () => (/* binding */ getOriginUrl),
/* harmony export */   getRequestMethod: () => (/* binding */ getRequestMethod),
/* harmony export */   getUserContentUrl: () => (/* binding */ getUserContentUrl),
/* harmony export */   getUserName: () => (/* binding */ getUserName)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _index__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./index */ "./jimu-for-builder/lib/service/local-rest-service/index.ts");


const restRequest = jimu_core__WEBPACK_IMPORTED_MODULE_0__.esri.restRequest.request;
function getOriginUrl(isArcGisOnlineRequest = false) {
    if (isArcGisOnlineRequest) {
        return jimu_core__WEBPACK_IMPORTED_MODULE_0__.urlUtils.getArcgisOnlineUrl();
    }
    else {
        return window.location.origin;
    }
}
function getUserContentUrl(isNotContainUsers = false) {
    if (isNotContainUsers) {
        return '/sharing/rest/content/';
    }
    else {
        return '/sharing/rest/content/users/';
    }
}
function getUserName() {
    var _a;
    return (_a = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().user) === null || _a === void 0 ? void 0 : _a.username;
}
function getRequestMethod(isArcGisOnlineRequest = false) {
    return isArcGisOnlineRequest ? restRequest : _index__WEBPACK_IMPORTED_MODULE_1__.request;
}


/***/ }),

/***/ "./jimu-for-builder/lib/service/rest-service.tsx":
/*!*******************************************************!*\
  !*** ./jimu-for-builder/lib/service/rest-service.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addItemResource: () => (/* binding */ addItemResource),
/* harmony export */   checkAppVersion: () => (/* binding */ checkAppVersion),
/* harmony export */   createAppInFolder: () => (/* binding */ createAppInFolder),
/* harmony export */   createItem: () => (/* binding */ createItem),
/* harmony export */   getGroupCategorySchema: () => (/* binding */ getGroupCategorySchema),
/* harmony export */   getGroupContents: () => (/* binding */ getGroupContents),
/* harmony export */   getItem: () => (/* binding */ getItem),
/* harmony export */   getItemData: () => (/* binding */ getItemData),
/* harmony export */   getItemResource: () => (/* binding */ getItemResource),
/* harmony export */   getItemResources: () => (/* binding */ getItemResources),
/* harmony export */   getItemsGroups: () => (/* binding */ getItemsGroups),
/* harmony export */   getOrgCategorySchema: () => (/* binding */ getOrgCategorySchema),
/* harmony export */   getResourceOrigin: () => (/* binding */ getResourceOrigin),
/* harmony export */   getUserContent: () => (/* binding */ getUserContent),
/* harmony export */   getUsersTags: () => (/* binding */ getUsersTags),
/* harmony export */   importApp: () => (/* binding */ importApp),
/* harmony export */   itemsgroups: () => (/* binding */ itemsgroups),
/* harmony export */   moveItem: () => (/* binding */ moveItem),
/* harmony export */   removeItem: () => (/* binding */ removeItem),
/* harmony export */   removeItemResource: () => (/* binding */ removeItemResource),
/* harmony export */   searchGroup: () => (/* binding */ searchGroup),
/* harmony export */   searchItems: () => (/* binding */ searchItems),
/* harmony export */   searchItemsByPortalUrl: () => (/* binding */ searchItemsByPortalUrl),
/* harmony export */   shareItemWithGroup: () => (/* binding */ shareItemWithGroup),
/* harmony export */   unshareItemWithGroup: () => (/* binding */ unshareItemWithGroup),
/* harmony export */   updateAppsThumbnail: () => (/* binding */ updateAppsThumbnail),
/* harmony export */   updateItem: () => (/* binding */ updateItem),
/* harmony export */   updateItemResource: () => (/* binding */ updateItemResource)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
/* harmony import */ var _local_rest_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./local-rest-service */ "./jimu-for-builder/lib/service/local-rest-service/index.ts");
/* harmony import */ var _jimu_request__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./jimu-request */ "./jimu-for-builder/lib/service/jimu-request/index.ts");
/* harmony import */ var _app_service_util__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./app-service/util */ "./jimu-for-builder/lib/service/app-service/util.ts");
/* harmony import */ var _type__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./type */ "./jimu-for-builder/lib/service/type/index.ts");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};





const { importItem, checkItemVersion } = _local_rest_service__WEBPACK_IMPORTED_MODULE_1__;
function requestMethodProvider(restPortalRequestName, appInfo, localRequestName) {
    const localRequestMethod = localRequestName ? _local_rest_service__WEBPACK_IMPORTED_MODULE_1__[localRequestName] : _local_rest_service__WEBPACK_IMPORTED_MODULE_1__[restPortalRequestName];
    const restPortalRequestMethod = jimu_core__WEBPACK_IMPORTED_MODULE_0__.esri.restPortal[restPortalRequestName];
    if (!appInfo) {
        if (window.jimuConfig.isDevEdition) {
            return localRequestMethod;
        }
        else {
            return restPortalRequestMethod;
        }
    }
    else {
        if ((0,_app_service_util__WEBPACK_IMPORTED_MODULE_3__.isPortalApp)(appInfo)) {
            return restPortalRequestMethod;
        }
        else {
            return localRequestMethod;
        }
    }
}
function searchMethodProvider(searchType) {
    let method;
    const portalUrl = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().portalUrl;
    const isAGOLDomain = jimu_core__WEBPACK_IMPORTED_MODULE_0__.portalUrlUtils.isAGOLDomain(portalUrl);
    switch (searchType) {
        case _type__WEBPACK_IMPORTED_MODULE_4__.SearchType.Portal:
            method = jimu_core__WEBPACK_IMPORTED_MODULE_0__.esri.restPortal.searchItems;
            break;
        case _type__WEBPACK_IMPORTED_MODULE_4__.SearchType.AGOL:
            method = isAGOLDomain ? jimu_core__WEBPACK_IMPORTED_MODULE_0__.esri.restPortal.searchItems : _local_rest_service__WEBPACK_IMPORTED_MODULE_1__.searchItems;
            break;
        case _type__WEBPACK_IMPORTED_MODULE_4__.SearchType.Other:
            method = window.jimuConfig.isDevEdition ? _local_rest_service__WEBPACK_IMPORTED_MODULE_1__.searchItems : jimu_core__WEBPACK_IMPORTED_MODULE_0__.esri.restPortal.searchItems;
            break;
    }
    return method;
}
function searchItems(search, searchType) {
    return __awaiter(this, void 0, void 0, function* () {
        return searchMethodProvider(searchType)(search, searchType);
    });
}
function searchItemsByPortalUrl(search, portalUrl) {
    return __awaiter(this, void 0, void 0, function* () {
        return _local_rest_service__WEBPACK_IMPORTED_MODULE_1__.searchItemsByPortalUrl(search, portalUrl);
    });
}
function removeItem(requestOptions) {
    return __awaiter(this, void 0, void 0, function* () {
        return requestMethodProvider('removeItem')(requestOptions);
    });
}
function updateItem(requestOptions) {
    return __awaiter(this, void 0, void 0, function* () {
        return requestMethodProvider('updateItem')(requestOptions);
    });
}
function importApp(item, requestOptions) {
    return __awaiter(this, void 0, void 0, function* () {
        return importItem(item, requestOptions);
    });
}
function checkAppVersion(item, requestOptions) {
    return __awaiter(this, void 0, void 0, function* () {
        return checkItemVersion(item, requestOptions);
    });
}
function updateAppsThumbnail(requestOptions) {
    return __awaiter(this, void 0, void 0, function* () {
        if (window.jimuConfig.isDevEdition) {
            return yield _local_rest_service__WEBPACK_IMPORTED_MODULE_1__.updateItem(requestOptions);
        }
        else {
            return yield _jimu_request__WEBPACK_IMPORTED_MODULE_2__.updateItem(requestOptions);
        }
    });
}
function createItem(requestOptions) {
    return __awaiter(this, void 0, void 0, function* () {
        return requestMethodProvider('createItem')(requestOptions);
    });
}
function getItem(appInfo, requestOptions) {
    return __awaiter(this, void 0, void 0, function* () {
        return requestMethodProvider('getItem', appInfo)(appInfo.id, requestOptions, (0,_app_service_util__WEBPACK_IMPORTED_MODULE_3__.isAGOLApp)(appInfo));
    });
}
function getItemData(appInfo, requestOptions) {
    return __awaiter(this, void 0, void 0, function* () {
        return requestMethodProvider('getItemData', appInfo)(appInfo.id, requestOptions, (0,_app_service_util__WEBPACK_IMPORTED_MODULE_3__.isAGOLApp)(appInfo));
    });
}
function getItemResources(appInfo, requestOptions) {
    return __awaiter(this, void 0, void 0, function* () {
        return requestMethodProvider('getItemResources', appInfo)(appInfo.id, requestOptions, (0,_app_service_util__WEBPACK_IMPORTED_MODULE_3__.isAGOLApp)(appInfo));
    });
}
function getOrgCategorySchema(requestOptions, isGetAGOLCategorySchema) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield _jimu_request__WEBPACK_IMPORTED_MODULE_2__.getOrgCategorySchema(requestOptions, isGetAGOLCategorySchema);
    });
}
function getGroupCategorySchema(groupId, requestOptions, isGetAGOLCategorySchema) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield _jimu_request__WEBPACK_IMPORTED_MODULE_2__.getGroupCategorySchema(groupId, requestOptions, isGetAGOLCategorySchema);
    });
}
function getGroupContents(groupId, requestOptions, isGetAGOLGroupContent) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield _jimu_request__WEBPACK_IMPORTED_MODULE_2__.getGroupContent(groupId, requestOptions, isGetAGOLGroupContent);
    });
}
function getItemResource(appInfo, requestOptions) {
    return __awaiter(this, void 0, void 0, function* () {
        return requestMethodProvider('getItemResource', appInfo)(appInfo.id, requestOptions, (0,_app_service_util__WEBPACK_IMPORTED_MODULE_3__.isAGOLApp)(appInfo));
    });
}
function addItemResource(requestOptions) {
    return __awaiter(this, void 0, void 0, function* () {
        return requestMethodProvider('addItemResource')(requestOptions);
    });
}
function updateItemResource(requestOptions) {
    return __awaiter(this, void 0, void 0, function* () {
        return requestMethodProvider('updateItemResource')(requestOptions);
    });
}
function shareItemWithGroup(requestOptions) {
    return __awaiter(this, void 0, void 0, function* () {
        // return esri.restPortal.shareItemWithGroup(requestOptions)
        return yield _jimu_request__WEBPACK_IMPORTED_MODULE_2__.shareItems(requestOptions);
    });
}
function unshareItemWithGroup(requestOptions) {
    return __awaiter(this, void 0, void 0, function* () {
        // return esri.restPortal.unshareItemWithGroup(requestOptions)
        return yield _jimu_request__WEBPACK_IMPORTED_MODULE_2__.unShareItems(requestOptions);
    });
}
function itemsgroups(requestOptions) {
    return __awaiter(this, void 0, void 0, function* () {
        // return esri.restPortal.unshareItemWithGroup(requestOptions)
        return yield _jimu_request__WEBPACK_IMPORTED_MODULE_2__.itemsgroups(requestOptions);
    });
}
function removeItemResource(requestOptions) {
    return __awaiter(this, void 0, void 0, function* () {
        return requestMethodProvider('removeItemResource')(requestOptions);
    });
}
function getItemsGroups(requestOptions) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield _jimu_request__WEBPACK_IMPORTED_MODULE_2__.itemsgroups(requestOptions);
    });
}
function moveItem(requestOptions) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield jimu_core__WEBPACK_IMPORTED_MODULE_0__.esri.restPortal.moveItem(requestOptions);
    });
}
function getUsersTags(requestOptions) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield jimu_core__WEBPACK_IMPORTED_MODULE_0__.esri.restPortal.getUserTags(requestOptions);
    });
}
function searchGroup(requestOptions) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield jimu_core__WEBPACK_IMPORTED_MODULE_0__.esri.restPortal.searchGroups(requestOptions);
    });
}
function getUserContent(requestOptions) {
    return _jimu_request__WEBPACK_IMPORTED_MODULE_2__.getUserContent(requestOptions);
}
function createAppInFolder(requestOptions) {
    return jimu_core__WEBPACK_IMPORTED_MODULE_0__.esri.restPortal.createItemInFolder(requestOptions);
}
function getResourceOrigin(originalAppInfo) {
    const portalUrl = (0,_app_service_util__WEBPACK_IMPORTED_MODULE_3__.isAGOLApp)(originalAppInfo) ? jimu_core__WEBPACK_IMPORTED_MODULE_0__.urlUtils.getArcgisOnlineUrl() : (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().portalUrl;
    const isLocalAppResourceOrigin = originalAppInfo === null || originalAppInfo === void 0 ? void 0 : originalAppInfo.isLocalApp;
    if (isLocalAppResourceOrigin) {
        // local app`s resource origin in devEdtion
        return _local_rest_service__WEBPACK_IMPORTED_MODULE_1__.getOriginUrl() + '/apps/';
    }
    else {
        return (jimu_core__WEBPACK_IMPORTED_MODULE_0__.portalUrlUtils.getPlatformUrlByOrgUrl(portalUrl) +
            '/sharing/rest/content/items/');
    }
}


/***/ }),

/***/ "./jimu-for-builder/lib/service/type/index.ts":
/*!****************************************************!*\
  !*** ./jimu-for-builder/lib/service/type/index.ts ***!
  \****************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppType: () => (/* binding */ AppType),
/* harmony export */   PublishStatus: () => (/* binding */ PublishStatus),
/* harmony export */   SearchType: () => (/* binding */ SearchType)
/* harmony export */ });
var SearchType;
(function (SearchType) {
    SearchType["AGOL"] = "AGOL";
    SearchType["Portal"] = "Portal";
    SearchType["Other"] = "Other";
})(SearchType || (SearchType = {}));
var AppType;
(function (AppType) {
    AppType["TemplateType"] = "Web Experience Template";
    AppType["ExperienceType"] = "Web Experience";
})(AppType || (AppType = {}));
var PublishStatus;
(function (PublishStatus) {
    PublishStatus["Published"] = "Published";
    PublishStatus["Draft"] = "Draft";
    PublishStatus["Changed"] = "Changed"; // There are unpublished changes since last publishing.
})(PublishStatus || (PublishStatus = {}));


/***/ }),

/***/ "./jimu-for-builder/lib/service/user-service.tsx":
/*!*******************************************************!*\
  !*** ./jimu-for-builder/lib/service/user-service.tsx ***!
  \*******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   addUserResource: () => (/* binding */ addUserResource),
/* harmony export */   getUserResource: () => (/* binding */ getUserResource),
/* harmony export */   getUserResources: () => (/* binding */ getUserResources),
/* harmony export */   initUserResource: () => (/* binding */ initUserResource),
/* harmony export */   removeUserResource: () => (/* binding */ removeUserResource),
/* harmony export */   updateUserResource: () => (/* binding */ updateUserResource)
/* harmony export */ });
/* harmony import */ var jimu_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jimu-core */ "jimu-core");
var __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};

const request = jimu_core__WEBPACK_IMPORTED_MODULE_0__.esri.restRequest.request;
var RequestType;
(function (RequestType) {
    RequestType["Add"] = "ADD";
    RequestType["Remove"] = "REMOVE";
    RequestType["Get"] = "GET";
    RequestType["GetAll"] = "GETALL";
})(RequestType || (RequestType = {}));
let initUserResourcePromise;
let userResourceName;
function requestUrlProvider(type, resourceName) {
    return __awaiter(this, void 0, void 0, function* () {
        const session = jimu_core__WEBPACK_IMPORTED_MODULE_0__.SessionManager.getInstance().getMainSession();
        const { username } = session;
        const portalUrl = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().portalUrl;
        const portalUserUrl = jimu_core__WEBPACK_IMPORTED_MODULE_0__.portalUrlUtils.getBaseUserUrl(portalUrl);
        const token = yield TokenManager.getInstance().getToken();
        let requestUrl;
        resourceName = resourceName !== null && resourceName !== void 0 ? resourceName : getResourceName();
        switch (type) {
            case RequestType.Add:
                requestUrl =
                    portalUserUrl + '/' + username + '/addResource/' + '?token=' + token;
                break;
            case RequestType.Remove:
                requestUrl =
                    portalUserUrl + '/' + username + '/removeResource/' + '?token=' + token;
                break;
            case RequestType.Get:
                requestUrl =
                    portalUserUrl +
                        '/' +
                        username +
                        '/resources/' +
                        resourceName +
                        '?token=' +
                        token;
                break;
            case RequestType.GetAll:
                requestUrl =
                    portalUserUrl + '/' + username + '/resources/' + '?token=' + token;
                break;
        }
        return yield Promise.resolve(requestUrl);
    });
}
function addUserResource(params, resourceName) {
    return __awaiter(this, void 0, void 0, function* () {
        resourceName = resourceName !== null && resourceName !== void 0 ? resourceName : getResourceName();
        const requestOptions = {
            httpMethod: 'POST',
            params: Object.assign(Object.assign({}, params), { key: resourceName, access: 'UserPrivateAllApps' })
        };
        return yield requestUrlProvider(RequestType.Add)
            .then((requestURL) => __awaiter(this, void 0, void 0, function* () {
            return yield request(requestURL, requestOptions).then((response) => __awaiter(this, void 0, void 0, function* () {
                return yield Promise.resolve(response);
            }));
        }))
            .catch((err) => __awaiter(this, void 0, void 0, function* () {
            return yield Promise.reject(new Error('Failed adding user resource:' + err.message));
        }));
    });
}
function getUserResource(resourceName) {
    return __awaiter(this, void 0, void 0, function* () {
        resourceName = resourceName !== null && resourceName !== void 0 ? resourceName : getResourceName();
        return yield requestUrlProvider(RequestType.Get, resourceName)
            .then((requestURL) => __awaiter(this, void 0, void 0, function* () {
            return yield request(requestURL, { params: { f: 'json' } }).then((response) => __awaiter(this, void 0, void 0, function* () {
                return yield Promise.resolve(response);
            }));
        }))
            .catch((err) => __awaiter(this, void 0, void 0, function* () {
            return yield Promise.reject(new Error('Failed retrieving user resource:' + err.message));
        }));
    });
}
function getUserResources() {
    return __awaiter(this, void 0, void 0, function* () {
        return yield requestUrlProvider(RequestType.GetAll)
            .then((requestURL) => __awaiter(this, void 0, void 0, function* () {
            return yield request(requestURL, { params: { f: 'json' } }).then((response) => __awaiter(this, void 0, void 0, function* () {
                return yield Promise.resolve(response);
            }));
        }))
            .catch((err) => __awaiter(this, void 0, void 0, function* () {
            return yield Promise.reject(new Error('Failed retrieving user resource list:' + err.message));
        }));
    });
}
function removeUserResource(resourceName) {
    return __awaiter(this, void 0, void 0, function* () {
        resourceName = resourceName !== null && resourceName !== void 0 ? resourceName : getResourceName();
        return yield requestUrlProvider(RequestType.Remove)
            .then((requestURL) => __awaiter(this, void 0, void 0, function* () {
            const requestOptions = {
                params: {
                    key: resourceName
                }
            };
            return yield request(requestURL, requestOptions).then((response) => __awaiter(this, void 0, void 0, function* () {
                return yield Promise.resolve(response);
            }));
        }))
            .catch((err) => __awaiter(this, void 0, void 0, function* () {
            return yield Promise.reject(new Error('Failed removing user resource:' + err.message));
        }));
    });
}
function updateUserResource(options) {
    return __awaiter(this, void 0, void 0, function* () {
        return yield getUserResource()
            .then((result) => __awaiter(this, void 0, void 0, function* () {
            const newOptions = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.Immutable)(result !== null && result !== void 0 ? result : {}).merge(options, { deep: true });
            return yield addUserResource({
                text: JSON.stringify(Object.assign({}, newOptions))
            });
        }))
            .then((response) => __awaiter(this, void 0, void 0, function* () {
            return yield Promise.resolve(response);
        }))
            .catch((err) => __awaiter(this, void 0, void 0, function* () {
            return yield Promise.reject(new Error('Failed updating user resource:' + err.message));
        }));
    });
}
function initUserResource() {
    return __awaiter(this, void 0, void 0, function* () {
        if (!initUserResourcePromise) {
            initUserResourcePromise = getUserResources()
                .then((result) => __awaiter(this, void 0, void 0, function* () {
                if (result.total === 0) {
                    // none of user resources has been added for the user
                    return yield addUserResource({ text: '{}' });
                }
                else {
                    const userSettingResource = result.userResources[0]; // only one resource is allowed per app id per user
                    const resourceName = getResourceName();
                    if (userSettingResource.key === resourceName) {
                        // user resource exists
                        return yield Promise.resolve({ success: true });
                    }
                    else {
                        // replace the old user resource if needed
                        return yield getUserResource(userSettingResource.key)
                            // eslint-disable-next-line
                            .catch(err => {
                            // user resource not accessible, pass down null to try adding user resource anyway
                            return null;
                        })
                            .then((oldOptions) => __awaiter(this, void 0, void 0, function* () {
                            // use "showGuides" to detect if the user resource was added by Experince Builder and
                            // migrate over the options
                            if (oldOptions &&
                                (oldOptions.showGuides ||
                                    Object.keys(oldOptions).length === 0)) {
                                return yield removeUserResource(userSettingResource.key).then(() => __awaiter(this, void 0, void 0, function* () {
                                    return yield addUserResource({
                                        text: JSON.stringify(Object.assign({}, oldOptions))
                                    });
                                }));
                            }
                            else {
                                // try adding the user resource anyway
                                return yield addUserResource({ text: '{}' });
                            }
                        }));
                    }
                }
            }))
                .catch((err) => __awaiter(this, void 0, void 0, function* () {
                return yield Promise.reject(new Error('Failed initializing user resource:' + err.message));
            }));
        }
        return initUserResourcePromise;
    });
}
function getResourceName() {
    if (!userResourceName) {
        const session = jimu_core__WEBPACK_IMPORTED_MODULE_0__.SessionManager.getInstance().getMainSession();
        userResourceName = `${jimu_core__WEBPACK_IMPORTED_MODULE_0__.USER_SETTING_FILE_KEY}${(session === null || session === void 0 ? void 0 : session.clientId) ? `_${session.clientId}` : ''}.json`;
    }
    return userResourceName;
}
class TokenManager {
    static getInstance() {
        if (!TokenManager.instance) {
            TokenManager.instance = new TokenManager();
        }
        return TokenManager.instance;
    }
    constructor() {
        this.session = jimu_core__WEBPACK_IMPORTED_MODULE_0__.SessionManager.getInstance().getMainSession();
    }
    _shouldExchangeToken() {
        return __awaiter(this, void 0, void 0, function* () {
            if (!this.exchangedToken || this.session.tokenExpires < new Date()) {
                if (!this.portalSelfPromise) {
                    const portalUrl = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().portalUrl;
                    this.portalSelfPromise = request(`${portalUrl}/sharing/rest/community/self?token=${this.session.token}`)
                        .then(({ appInfo }) => __awaiter(this, void 0, void 0, function* () {
                        return yield Promise.resolve((appInfo === null || appInfo === void 0 ? void 0 : appInfo.appId) !== 'experienceBuilder');
                    }))
                        .catch((err) => __awaiter(this, void 0, void 0, function* () {
                        return yield Promise.reject(new Error(err.message));
                    }));
                }
                return yield this.portalSelfPromise;
            }
            return yield Promise.resolve(false);
        });
    }
    _exchangeToken() {
        return __awaiter(this, void 0, void 0, function* () {
            const portalUrl = (0,jimu_core__WEBPACK_IMPORTED_MODULE_0__.getAppStore)().getState().portalUrl;
            const requestURL = portalUrl + '/sharing/rest/oauth2/exchangeToken';
            const requestOptions = {
                params: {
                    // eslint-disable-next-line camelcase
                    client_id: this.session.clientId,
                    token: this.session.token
                }
            };
            return yield request(requestURL, requestOptions);
        });
    }
    getToken() {
        var _a;
        return __awaiter(this, void 0, void 0, function* () {
            const shouldExchange = yield this._shouldExchangeToken();
            if (shouldExchange) {
                return yield this._exchangeToken()
                    // eslint-disable-next-line
                    .catch(err => {
                    console.warn('Failed exchanging token. Using default token from user sesion.');
                    return { token: this.session.token };
                })
                    .then((response) => __awaiter(this, void 0, void 0, function* () {
                    this.exchangedToken = response === null || response === void 0 ? void 0 : response.token;
                    return yield Promise.resolve(this.exchangedToken);
                }));
            }
            return yield Promise.resolve((_a = this.exchangedToken) !== null && _a !== void 0 ? _a : this.session.token);
        });
    }
}


/***/ }),

/***/ "./jimu-for-builder/lib/translations/default.ts":
/*!******************************************************!*\
  !*** ./jimu-for-builder/lib/translations/default.ts ***!
  \******************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    frameworkAction_TriggerLayer: 'Trigger data',
    frameworkAction_SetData: 'Select data',
    frameworkAction_ActionLayer: 'Action data',
    frameworkAction_Conditions: 'Conditions',
    frameworkAction_RelateMessage: 'Trigger / action connection',
    frameworkAction_TriggerLayerField: 'Select a trigger field',
    frameworkAction_None: 'none',
    frameworkAction_Equals: 'equals',
    frameworkAction_ActionLayerField: 'Select an action field',
    frameworkAction_MoreConditions: 'More conditions',
    frameworkAction_SetExpression: 'Please set your expression first.',
    frameworkAction_ChooseLayer: 'Select data',
    frameworkAction_AutoBind: 'Auto bound.',
    frameworkAction_NoLayer: 'No data.',
    frameworkAction_QueryByExtent: 'Query by current extent',
    // common template strings
    defaultTextPlaceholder: 'Double click to edit text',
    titlePlaceholder: 'Here is the title',
    subTitlePlaceholder: 'Here is the subtitle',
    shortTitlePlaceholder: 'Title',
    shortSubTitlePlaceholder: 'Subtitle',
    copyrightPlaceholder: 'Copyright info',
    cardTitle: 'Card title',
    bookmark: 'Bookmark',
    number: 'Number',
    templateSearchResult: 'Search result',
    logo: 'Logo',
    appItemCopy: 'Copy'
});


/***/ }),

/***/ "jimu-core":
/*!****************************!*\
  !*** external "jimu-core" ***!
  \****************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_core__;

/***/ }),

/***/ "jimu-for-builder/templates":
/*!*********************************************!*\
  !*** external "jimu-for-builder/templates" ***!
  \*********************************************/
/***/ ((module) => {

module.exports = __WEBPACK_EXTERNAL_MODULE_jimu_for_builder_templates__;

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!**************************************!*\
  !*** ./jimu-for-builder/service.tsx ***!
  \**************************************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   AppType: () => (/* reexport safe */ _lib_service__WEBPACK_IMPORTED_MODULE_0__.AppType),
/* harmony export */   PublishStatus: () => (/* reexport safe */ _lib_service__WEBPACK_IMPORTED_MODULE_0__.PublishStatus),
/* harmony export */   SearchType: () => (/* reexport safe */ _lib_service__WEBPACK_IMPORTED_MODULE_0__.SearchType),
/* harmony export */   appServices: () => (/* reexport safe */ _lib_service__WEBPACK_IMPORTED_MODULE_0__.appServices),
/* harmony export */   createAppCallBack: () => (/* reexport safe */ _lib_service__WEBPACK_IMPORTED_MODULE_0__.createAppCallBack),
/* harmony export */   getResourceOrigin: () => (/* reexport safe */ _lib_service__WEBPACK_IMPORTED_MODULE_0__.getResourceOrigin),
/* harmony export */   initAppConfigOfNewApp: () => (/* reexport safe */ _lib_service__WEBPACK_IMPORTED_MODULE_0__.initAppConfigOfNewApp),
/* harmony export */   toCreateAppByDefaultTemplate: () => (/* reexport safe */ _lib_service__WEBPACK_IMPORTED_MODULE_0__.toCreateAppByDefaultTemplate),
/* harmony export */   userServices: () => (/* reexport safe */ _lib_service__WEBPACK_IMPORTED_MODULE_0__.userServices)
/* harmony export */ });
/* harmony import */ var _lib_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./lib/service */ "./jimu-for-builder/lib/service/index.tsx");


})();

/******/ 	return __webpack_exports__;
/******/ })()

			);
		}
	};
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFRO0lBQ2hDLGdDQUFnQyxFQUFFLHdCQUF3QjtJQUMxRCw4QkFBOEIsRUFBRSxpQkFBaUI7SUFDakQsNkJBQTZCLEVBQUUsbUNBQW1DO0lBQ2xFLDJCQUEyQixFQUFFLGFBQWE7SUFDMUMsd0JBQXdCLEVBQUUsYUFBYTtJQUN2Qyx1QkFBdUIsRUFBRSxVQUFVO0lBQ25DLDZCQUE2QixFQUFFLHlCQUF5QjtJQUV4RCwwQkFBMEI7SUFDMUIsc0JBQXNCLEVBQUUsMkJBQTJCO0lBQ25ELGdCQUFnQixFQUFFLG1CQUFtQjtJQUNyQyxtQkFBbUIsRUFBRSxzQkFBc0I7SUFDM0MscUJBQXFCLEVBQUUsT0FBTztJQUM5Qix3QkFBd0IsRUFBRSxVQUFVO0lBQ3BDLG9CQUFvQixFQUFFLGdCQUFnQjtJQUN0QyxTQUFTLEVBQUUsWUFBWTtJQUN2QixRQUFRLEVBQUUsVUFBVTtJQUNwQixNQUFNLEVBQUUsUUFBUTtJQUNoQixvQkFBb0IsRUFBRSxlQUFlO0lBQ3JDLElBQUksRUFBRSxNQUFNO0lBQ1osV0FBVyxFQUFFLE1BQU07Q0FDcEI7Ozs7Ozs7Ozs7O0FDOUJEOzs7Ozs7Ozs7O0FDQUE7Ozs7OztVQ0FBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ042QiIsInNvdXJjZXMiOlsid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWZvci1idWlsZGVyL2xpYi9zZXJ2aWNlL2FwcC1zZXJ2aWNlL2luZGV4LnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWZvci1idWlsZGVyL2xpYi9zZXJ2aWNlL2FwcC1zZXJ2aWNlL3V0aWwudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtZm9yLWJ1aWxkZXIvbGliL3NlcnZpY2UvaW5kZXgudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWZvci1idWlsZGVyL2xpYi9zZXJ2aWNlL2ppbXUtcmVxdWVzdC9pbmRleC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1mb3ItYnVpbGRlci9saWIvc2VydmljZS9qaW11LXJlcXVlc3QvaXRlbXMvZ2V0LWNhdGVnb3J5LXNjaGVtYS50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1mb3ItYnVpbGRlci9saWIvc2VydmljZS9qaW11LXJlcXVlc3QvaXRlbXMvZ2V0LXVzZXItY29udGVudC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1mb3ItYnVpbGRlci9saWIvc2VydmljZS9qaW11LXJlcXVlc3QvaXRlbXMvaXRlbXNncm91cHMudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtZm9yLWJ1aWxkZXIvbGliL3NlcnZpY2UvamltdS1yZXF1ZXN0L2l0ZW1zL3NoYXJlLWl0ZW1zLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWZvci1idWlsZGVyL2xpYi9zZXJ2aWNlL2ppbXUtcmVxdWVzdC9pdGVtcy91bnNoYXJlLWl0ZW1zLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWZvci1idWlsZGVyL2xpYi9zZXJ2aWNlL2ppbXUtcmVxdWVzdC9pdGVtcy91cGRhdGUtdGh1bWJuYWlsLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWZvci1idWlsZGVyL2xpYi9zZXJ2aWNlL2ppbXUtcmVxdWVzdC9yZXF1ZXN0LnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWZvci1idWlsZGVyL2xpYi9zZXJ2aWNlL2ppbXUtcmVxdWVzdC91dGlsLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWZvci1idWlsZGVyL2xpYi9zZXJ2aWNlL2xvY2FsLXJlc3Qtc2VydmljZS9pbmRleC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1mb3ItYnVpbGRlci9saWIvc2VydmljZS9sb2NhbC1yZXN0LXNlcnZpY2UvaXRlbXMvYWRkLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWZvci1idWlsZGVyL2xpYi9zZXJ2aWNlL2xvY2FsLXJlc3Qtc2VydmljZS9pdGVtcy9jcmVhdGUudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtZm9yLWJ1aWxkZXIvbGliL3NlcnZpY2UvbG9jYWwtcmVzdC1zZXJ2aWNlL2l0ZW1zL2dldC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1mb3ItYnVpbGRlci9saWIvc2VydmljZS9sb2NhbC1yZXN0LXNlcnZpY2UvaXRlbXMvaGVscGVycy50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1mb3ItYnVpbGRlci9saWIvc2VydmljZS9sb2NhbC1yZXN0LXNlcnZpY2UvaXRlbXMvcmVtb3ZlLnRzIiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWZvci1idWlsZGVyL2xpYi9zZXJ2aWNlL2xvY2FsLXJlc3Qtc2VydmljZS9pdGVtcy9zZWFyY2gudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtZm9yLWJ1aWxkZXIvbGliL3NlcnZpY2UvbG9jYWwtcmVzdC1zZXJ2aWNlL2l0ZW1zL3VwZGF0ZS50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1mb3ItYnVpbGRlci9saWIvc2VydmljZS9sb2NhbC1yZXN0LXNlcnZpY2UvcmVxdWVzdC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1mb3ItYnVpbGRlci9saWIvc2VydmljZS9sb2NhbC1yZXN0LXNlcnZpY2UvdXRpbC50cyIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1mb3ItYnVpbGRlci9saWIvc2VydmljZS9yZXN0LXNlcnZpY2UudHN4Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWZvci1idWlsZGVyL2xpYi9zZXJ2aWNlL3R5cGUvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC8uL2ppbXUtZm9yLWJ1aWxkZXIvbGliL3NlcnZpY2UvdXNlci1zZXJ2aWNlLnRzeCIsIndlYnBhY2s6Ly9leGItY2xpZW50Ly4vamltdS1mb3ItYnVpbGRlci9saWIvdHJhbnNsYXRpb25zL2RlZmF1bHQudHMiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC9leHRlcm5hbCBzeXN0ZW0gXCJqaW11LWNvcmVcIiIsIndlYnBhY2s6Ly9leGItY2xpZW50L2V4dGVybmFsIHN5c3RlbSBcImppbXUtZm9yLWJ1aWxkZXIvdGVtcGxhdGVzXCIiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9leGItY2xpZW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZXhiLWNsaWVudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2V4Yi1jbGllbnQvLi9qaW11LWZvci1idWlsZGVyL3NlcnZpY2UudHN4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHR5cGUgQXBwUmVzb3VyY2VNYW5hZ2VyIH0gZnJvbSAnamltdS1mb3ItYnVpbGRlcidcbi8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xuaW1wb3J0IHsgdHlwZSBJUGFyYW1zIH0gZnJvbSAnQGVzcmkvYXJjZ2lzLXJlc3QtcmVxdWVzdCdcbmltcG9ydCB7XG4gIHR5cGUgQXBwQ3JlYXRpb25JbmZvLFxuICBnZXRBcHBTdG9yZSxcbiAgbW9kdWxlTG9hZGVyLFxuICB0eXBlIEFwcENvbmZpZyxcbiAgdHlwZSBJTUFwcENvbmZpZyxcbiAgU2Vzc2lvbk1hbmFnZXIsXG4gIGkxOG4sXG4gIEltbXV0YWJsZSxcbiAgYXBwQWN0aW9uc1xufSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQge1xuICB0eXBlIElTZWFyY2hPcHRpb25zLFxuICB0eXBlIElTaGFyaW5nUmVzcG9uc2UsXG4gIHR5cGUgSUNyZWF0ZUl0ZW1SZXNwb25zZSxcbiAgdHlwZSBJTW92ZUl0ZW1PcHRpb25zLFxuICB0eXBlIElNb3ZlSXRlbVJlc3BvbnNlLFxuICB0eXBlIElHZXRVc2VyVGFnc1Jlc3BvbnNlLFxuICB0eXBlIElHcm91cCxcbiAgdHlwZSBTZWFyY2hRdWVyeUJ1aWxkZXIsXG4gIHR5cGUgSVNlYXJjaFJlc3VsdFxufSBmcm9tICdAZXNyaS9hcmNnaXMtcmVzdC1wb3J0YWwnXG5pbXBvcnQge1xuICBzZWFyY2hJdGVtcyxcbiAgcmVtb3ZlSXRlbSxcbiAgdXBkYXRlSXRlbSxcbiAgdXBkYXRlQXBwc1RodW1ibmFpbCxcbiAgZ2V0SXRlbSxcbiAgZ2V0SXRlbURhdGEsXG4gIGdldFVzZXJDb250ZW50LFxuICBzaGFyZUl0ZW1XaXRoR3JvdXAsXG4gIHVuc2hhcmVJdGVtV2l0aEdyb3VwLFxuICBnZXRJdGVtc0dyb3VwcyxcbiAgbW92ZUl0ZW0sXG4gIGdldFVzZXJzVGFncyxcbiAgc2VhcmNoR3JvdXAsXG4gIGltcG9ydEFwcCxcbiAgY2hlY2tBcHBWZXJzaW9uLFxuICBnZXRHcm91cENhdGVnb3J5U2NoZW1hIGFzIGdldEdyb3VwQ2F0ZWdvcnlTY2hlbWFTZXJ2aWNlLFxuICBnZXRPcmdDYXRlZ29yeVNjaGVtYSBhcyBnZXRPcmdDYXRlZ29yeVNjaGVtYVNlcnZpY2UsXG4gIGdldEdyb3VwQ29udGVudHMsXG4gIHNlYXJjaEl0ZW1zQnlQb3J0YWxVcmxcbn0gZnJvbSAnLi4vcmVzdC1zZXJ2aWNlJ1xuaW1wb3J0IHtcbiAgZ2V0U2Vzc2lvbiwgY3JhdGVBcHBCeUFwcCwgZ2V0TmV3QXBwVGl0bGVXaXRoSW5kZXgsIGNyZWF0ZUFwcEZvckR1cGxpY2F0ZSwgZ2V0U2Vzc2lvbkJ5U2VhcmNoVHlwZSwgZ2V0UHJldmlld1VybCwgZ2V0QXBwQ29uZmlnSW5SZXNvdXJjZXMsIGdldENyZWF0ZUFwcFBhcmFtc0J5QXBwSWQsIGR1cGxpY2F0ZVJlc291cmNlc0ZvckR1cGxpY2F0ZSxcbiAgdG9DcmVhdGVBcHBCeURlZmF1bHRUZW1wbGF0ZSwgY3JlYXRlQXBwQ2FsbEJhY2ssIHVwZGF0ZVRodW1ibmFpbCwgdXBkYXRlVHlwZUtleXdvcmRzLCBkdXBsaWNhdGVSZWxhdGVkRGF0YUluQXBwLCBvcHRpbWl6ZVdpZGdldHNDb25maWcsIHVwZGF0ZUhpc3RvcnlMYWJlbHMsIHVwZGF0ZVRodW1ibmFpbEZvclNhdmVBc0FwcCwgY2xvbmVPYmosIHJlcGxhY2VFeGJWZXJzaW9uSW5BcHBDb25maWcsXG4gIHVwZGF0ZUl0ZW1EYXRhSW5BcHAsIGluaXRBcHBDb25maWdPZk5ld0FwcFxufSBmcm9tICcuL3V0aWwnXG5pbXBvcnQgeyB0eXBlIEFwcEluZm8sIFNlYXJjaFR5cGUsIEFwcFR5cGUsIHR5cGUgSW1wb3J0QXBwT3B0aW9uLCB0eXBlIFNhdmVBc1Jlc3BvbnNlIH0gZnJvbSAnLi4vdHlwZSdcbmltcG9ydCB7IHR5cGUgSUl0ZW1VcGRhdGUgfSBmcm9tICdAZXNyaS9hcmNnaXMtcmVzdC10eXBlcydcbmltcG9ydCB7IGdldFRlbXBsYXRlQ29uZmlnLCBUZW1wbGF0ZVR5cGUgfSBmcm9tICdqaW11LWZvci1idWlsZGVyL3RlbXBsYXRlcydcblxuLyoqXG4gKiBDcmVhdGUgYXBwIGJ5IHBvcnRhbCB0ZW1wbGF0ZS9BR09MIHRlbXBsYXRlL2xvY2FsIHRlbXBsYXRlXG4gKiBmb2xkZXJJZDogSWYgdGhlIGZvbGRlcklkIGhhcyBhIHZhbHVlLCB0aGUgYXBwIHdpbGwgYmUgY3JlYXRlZCBpbiB0aGUgZm9sZGVyIGNvcnJlc3BvbmRpbmcgdG8gdGhlIGZvbGRlcklkXG4qL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUFwcEJ5SXRlbVRlbXBsYXRlIChcbiAgYXBwSW5mbzogQXBwSW5mbyxcbiAgZm9sZGVySWQ/OiBzdHJpbmdcbikge1xuICByZXR1cm4gYXdhaXQgY3JhdGVBcHBCeUFwcChhcHBJbmZvLCBmYWxzZSwgZm9sZGVySWQpXG59XG5cbi8qKlxuICogQ3JlYXRlIGFwcCB3aXRoIHRlbXBsYXRlIGlkLCBzdWNoIGFzOiB4eHguY29tL2J1aWxkZXIvP3RlbXBsYXRlPWlkXG4qL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUFwcEJ5VGVtcGxhdGVJZCAodGVtcGxhdGVJZDogc3RyaW5nKSB7XG4gIHJldHVybiBhd2FpdCBnZXRDcmVhdGVBcHBQYXJhbXNCeUFwcElkKHRlbXBsYXRlSWQpLnRoZW4oYXN5bmMgYXBwSW5mbyA9PiB7XG4gICAgcmV0dXJuIGF3YWl0IGNyZWF0ZUFwcEJ5SXRlbVRlbXBsYXRlKGFwcEluZm8pXG4gIH0pXG59XG5cbi8qKlxuICpDcmVhdGUgYXBwIGJ5IGRlZmF1bHQgdGVtcGxhdGUgZGVmaW5lZCBpbiB0aGUgY29kZVxuICp0aXRsZTogVGhlIHRyYW5zbGF0ZWQgc3RyaW5nIG9mICdVbnRpdGxlZCBleHBlcmllbmNlJ1xuICpsYWJsZTogVGhlIGRlZmF1bHQgdGVtcGxhdGUncyBuYW1lXG4gKmZvbGRlcklkOiBJZiB0aGUgZm9sZGVySWQgaGFzIGEgdmFsdWUsIHRoZSBhcHAgd2lsbCBiZSBjcmVhdGVkIGluIHRoZSBmb2xkZXIgY29ycmVzcG9uZGluZyB0byB0aGUgZm9sZGVySWRcbiAqL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUFwcEJ5RGVmYXVsdFRlbXBsYXRlIChcbiAgdGl0bGU6IHN0cmluZyxcbiAgdGVtcGxhdGVOYW1lOiBzdHJpbmcsXG4gIGZvbGRlcklkPzogc3RyaW5nLFxuICB3ZWJtYXBJZD86IHN0cmluZyxcbiAgd2Vic2NlbmVJZD86IHN0cmluZ1xuKTogUHJvbWlzZTxBcHBJbmZvPiB7XG4gIHJldHVybiBhd2FpdCBnZXROZXdBcHBUaXRsZVdpdGhJbmRleCh0aXRsZSkudGhlbihhc3luYyBuZXdUaXRsZSA9PiB7XG4gICAgaWYgKG5ld1RpdGxlKSB7XG4gICAgICBjb25zdCBhcHBJbmZvID0ge1xuICAgICAgICB0ZW1wbGF0ZTogdGVtcGxhdGVOYW1lLFxuICAgICAgICBuYW1lOiBuZXdUaXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb246ICcnLFxuICAgICAgICB0eXBlOiBBcHBUeXBlLkV4cGVyaWVuY2VUeXBlXG4gICAgICB9IGFzIEFwcENyZWF0aW9uSW5mb1xuXG4gICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5hbGwoW2dldERlZmF1bHRUZW1wbGF0ZUNvbmZpZyhhcHBJbmZvKV0pXG4gICAgICAgIC50aGVuKGFzeW5jIGZ1bmN0aW9uIChyZXN1bHRzKSB7XG4gICAgICAgICAgbGV0IGRlZmF1bHRBcHBDb25maWcgPSByZXN1bHRzWzBdXG5cbiAgICAgICAgICBkZWZhdWx0QXBwQ29uZmlnLnRlbXBsYXRlID0gYXBwSW5mby50ZW1wbGF0ZVxuICAgICAgICAgIGRlZmF1bHRBcHBDb25maWcgPSBpbml0QXBwQ29uZmlnT2ZOZXdBcHAoZGVmYXVsdEFwcENvbmZpZylcblxuICAgICAgICAgIHJldHVybiBhd2FpdCB0b0NyZWF0ZUFwcEJ5RGVmYXVsdFRlbXBsYXRlKGFwcEluZm8sIGZvbGRlcklkKS50aGVuKFxuICAgICAgICAgICAgYXN5bmMgKGl0ZW06IElDcmVhdGVJdGVtUmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGNyZWF0ZUFwcENhbGxCYWNrKGRlZmF1bHRBcHBDb25maWcsIGl0ZW0sIHdlYm1hcElkLCB3ZWJzY2VuZUlkKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIClcbiAgICAgICAgfSlcbiAgICAgICAgLmNhdGNoKGFzeW5jIGVycm9yID0+IHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgICAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlamVjdChlcnJvcilcbiAgICAgICAgfSlcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVqZWN0KG51bGwpXG4gICAgfVxuICB9KVxufVxuXG4vKipcbiAqIGZvbGRlcklkOiBJZiB0aGUgZm9sZGVySWQgaGFzIGEgdmFsdWUsIHRoZSB0ZW1wbGF0ZSB3aWxsIGJlIGNyZWF0ZWQgaW4gdGhlIGZvbGRlciBjb3JyZXNwb25kaW5nIHRvIHRoZSBmb2xkZXJJZFxuKi9cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVUZW1wbGF0ZUJ5QXBwIChcbiAgYXBwSW5mbzogQXBwSW5mbyxcbiAgZm9sZGVySWQ/OiBzdHJpbmdcbikge1xuICByZXR1cm4gYXdhaXQgY3JhdGVBcHBCeUFwcChhcHBJbmZvLCB0cnVlLCBmb2xkZXJJZClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGltcG9ydEl0ZW0gKGltcG9ydEFwcE9wdGlvbjogSW1wb3J0QXBwT3B0aW9uKSB7XG4gIGNvbnN0IHNlc3Npb24gPSBTZXNzaW9uTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldE1haW5TZXNzaW9uKClcbiAgcmV0dXJuIGF3YWl0IGltcG9ydEFwcChpbXBvcnRBcHBPcHRpb24sIHsgYXV0aGVudGljYXRpb246IHNlc3Npb24gfSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNoZWNrSW1wb3J0QXBwVmVyc2lvbiAoaW1wb3J0QXBwT3B0aW9uOiBJbXBvcnRBcHBPcHRpb24pIHtcbiAgY29uc3Qgc2Vzc2lvbiA9IFNlc3Npb25NYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0TWFpblNlc3Npb24oKVxuICByZXR1cm4gYXdhaXQgY2hlY2tBcHBWZXJzaW9uKGltcG9ydEFwcE9wdGlvbiwgeyBhdXRoZW50aWNhdGlvbjogc2Vzc2lvbiB9KVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW1wb3J0QXBwRnJvbVBvcnRhbCAocG9ydGFsQXBwSW5mbzogQXBwSW5mbyk6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBkdXBsaWNhdGVBcHAocG9ydGFsQXBwSW5mbywgbnVsbCwgdHJ1ZSlcbn1cblxuLyoqXG4gKiBmb2xkZXJJZDogSWYgdGhlIGZvbGRlcklkIGhhcyBhIHZhbHVlLCB0aGUgYXBwIHdpbGwgYmUgY3JlYXRlZCBpbiB0aGUgZm9sZGVyIGNvcnJlc3BvbmRpbmcgdG8gdGhlIGZvbGRlcklkXG4qL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGR1cGxpY2F0ZUFwcCAoXG4gIGFwcEluZm86IEFwcEluZm8sXG4gIGZvbGRlcklkPzogc3RyaW5nLFxuICBpc05vdFVwZGF0ZU5ld0FwcFRpdGxlPzogYm9vbGVhblxuKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgcmV0dXJuIGF3YWl0IGdldEFwcEluZm8oYXBwSW5mbykudGhlbihcbiAgICBhc3luYyBhcHBJdGVtID0+IHtcbiAgICAgIGlmIChhcHBJdGVtKSB7XG4gICAgICAgIGNvbnN0IGNvcHkgPSBpMThuLmdldEludGwoKS5mb3JtYXRNZXNzYWdlKHsgaWQ6ICdjb3B5JyB9KSB8fCAnY29weSdcbiAgICAgICAgY29uc3QgdGl0bGUgPSBpc05vdFVwZGF0ZU5ld0FwcFRpdGxlID8gYXBwSXRlbS50aXRsZSA6IGAke2FwcEl0ZW0udGl0bGV9ICR7Y29weX1gXG4gICAgICAgIHJldHVybiBhd2FpdCBnZXROZXdBcHBUaXRsZVdpdGhJbmRleChcbiAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICB0cnVlLFxuICAgICAgICAgIGFwcEluZm8udHlwZVxuICAgICAgICApLnRoZW4oYXN5bmMgbmV3VGl0bGUgPT4ge1xuICAgICAgICAgIGlmIChuZXdUaXRsZSkge1xuICAgICAgICAgICAgY29uc3QgZHVwbGljYXRlQXBwSW5mbyA9IHtcbiAgICAgICAgICAgICAgbmFtZTogbmV3VGl0bGUsXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBhcHBJdGVtPy5kZXNjcmlwdGlvbiB8fCAnJyxcbiAgICAgICAgICAgICAgc25pcHBldDogYXBwSXRlbT8uc25pcHBldCB8fCAnJyxcbiAgICAgICAgICAgICAgdHlwZUtleXdvcmRzOiBhcHBJdGVtPy50eXBlS2V5d29yZHMgfHwgW10sXG4gICAgICAgICAgICAgIHRhZ3M6IGFwcEl0ZW0udGFncyxcbiAgICAgICAgICAgICAgdGh1bWJuYWlsOiBhcHBJdGVtLnRodW1ibmFpbCxcbiAgICAgICAgICAgICAgdHlwZTogYXBwSW5mby50eXBlIHx8IGFwcEl0ZW0udHlwZVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgY3JlYXRlQXBwRm9yRHVwbGljYXRlKGR1cGxpY2F0ZUFwcEluZm8gYXMgYW55LCBmb2xkZXJJZCkudGhlbihcbiAgICAgICAgICAgICAgYXN5bmMgbmV3QXBwSXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG5ld0FwcEl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCB1cGRhdGVUaHVtYm5haWwoXG4gICAgICAgICAgICAgICAgICAgIG5ld0FwcEl0ZW0uaWQsXG4gICAgICAgICAgICAgICAgICAgIGFwcEluZm8sXG4gICAgICAgICAgICAgICAgICAgIGFwcEl0ZW0udGh1bWJuYWlsXG4gICAgICAgICAgICAgICAgICApLnRoZW4oYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgZHVwbGljYXRlUmVsYXRlZERhdGFJbkFwcChcbiAgICAgICAgICAgICAgICAgICAgICBuZXdBcHBJdGVtLmlkLFxuICAgICAgICAgICAgICAgICAgICAgIGFwcEluZm8sXG4gICAgICAgICAgICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgKS50aGVuKFxuICAgICAgICAgICAgICAgICAgICAgIGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlc29sdmUobmV3QXBwSXRlbS5pZClcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIGFzeW5jIGVycm9yID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGVBcHAobmV3QXBwSXRlbS5pZClcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlamVjdChlcnJvcilcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlamVjdChudWxsKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgKVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZWplY3QobnVsbClcbiAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZWplY3QobnVsbClcbiAgICAgIH1cbiAgICB9XG4gIClcbn1cblxuLyoqXG4gKiBmb2xkZXJJZDogSWYgdGhlIGZvbGRlcklkIGhhcyBhIHZhbHVlLCB0aGUgYXBwIHdpbGwgYmUgY3JlYXRlZCBpbiB0aGUgZm9sZGVyIGNvcnJlc3BvbmRpbmcgdG8gdGhlIGZvbGRlcklkXG4qL1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNhdmVBc0FwcCAoXG4gIG9yaWdpbkFwcEluZm86IEFwcEluZm8sXG4gIG5ld0FwcFVwZGF0ZUluZm86IEFwcEluZm8sXG4gIGZvbGRlcklkPzogc3RyaW5nLFxuICB0aHVtYm5haWxGaWxlcz86IGFueVxuKTogUHJvbWlzZTxTYXZlQXNSZXNwb25zZT4ge1xuICByZXR1cm4gYXdhaXQgZ2V0TmV3QXBwVGl0bGVXaXRoSW5kZXgoYCR7bmV3QXBwVXBkYXRlSW5mby50aXRsZX1gLCB0cnVlLCBuZXdBcHBVcGRhdGVJbmZvLnR5cGUpLnRoZW4oYXN5bmMgbmV3VGl0bGUgPT4ge1xuICAgIGlmIChuZXdUaXRsZSkge1xuICAgICAgY29uc3QgZHVwbGljYXRlQXBwSW5mbyA9IHtcbiAgICAgICAgbmFtZTogbmV3QXBwVXBkYXRlSW5mby50aXRsZSxcbiAgICAgICAgZGVzY3JpcHRpb246IG5ld0FwcFVwZGF0ZUluZm8/LmRlc2NyaXB0aW9uIHx8ICcnLFxuICAgICAgICBzbmlwcGV0OiBuZXdBcHBVcGRhdGVJbmZvPy5zbmlwcGV0IHx8ICcnLFxuICAgICAgICB0eXBlS2V5d29yZHM6IG5ld0FwcFVwZGF0ZUluZm8/LnR5cGVLZXl3b3JkcyB8fCBbXSxcbiAgICAgICAgdGFnczogbmV3QXBwVXBkYXRlSW5mby50YWdzLFxuICAgICAgICB0aHVtYm5haWw6IG5ld0FwcFVwZGF0ZUluZm8udGh1bWJuYWlsLFxuICAgICAgICB0eXBlOiBvcmlnaW5BcHBJbmZvLnR5cGUgfHwgb3JpZ2luQXBwSW5mby50eXBlXG4gICAgICB9XG5cbiAgICAgIC8vQ3JlYXRlIG5ldyBhcHBcbiAgICAgIHJldHVybiBhd2FpdCBjcmVhdGVBcHBGb3JEdXBsaWNhdGUoZHVwbGljYXRlQXBwSW5mbyBhcyBhbnksIGZvbGRlcklkKS50aGVuKFxuICAgICAgICBhc3luYyBuZXdBcHBJdGVtID0+IHtcbiAgICAgICAgICBpZiAobmV3QXBwSXRlbSkge1xuICAgICAgICAgICAgbmV3QXBwVXBkYXRlSW5mby5pZCA9IG5ld0FwcEl0ZW0uaWRcbiAgICAgICAgICAgIC8vVXBkYXRlIHRodW1ibmFpbCBvZiBuZXcgaXRlbVxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IHVwZGF0ZVRodW1ibmFpbEZvclNhdmVBc0FwcChvcmlnaW5BcHBJbmZvLCBuZXdBcHBVcGRhdGVJbmZvLCB0aHVtYm5haWxGaWxlcykudGhlbihhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiBhd2FpdCB1cGRhdGVJdGVtRGF0YUluQXBwKG5ld0FwcEl0ZW0uaWQpLnRoZW4oXG4gICAgICAgICAgICAgICAgYXN5bmMgcmVzdWx0ID0+IHtcbiAgICAgICAgICAgICAgICAgIGlmICghcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlamVjdChudWxsKVxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgLy9VcGRhdGUgcmVzb3VyY2VzIG9mIG5ldyBpdGVtXG4gICAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgZHVwbGljYXRlUmVzb3VyY2VzRm9yRHVwbGljYXRlKG5ld0FwcEl0ZW0uaWQsIG9yaWdpbkFwcEluZm8sIHRydWUpLnRoZW4oXG4gICAgICAgICAgICAgICAgICAgIGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAvL1NhdmUgY3VycmVudCBuZXcgY29uZmlnXG4gICAgICAgICAgICAgICAgICAgICAgbGV0IG5ld0FwcENvbmZpZyA9IGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKS5hcHBTdGF0ZUluQnVpbGRlci5hcHBDb25maWdcbiAgICAgICAgICAgICAgICAgICAgICBuZXdBcHBDb25maWcgPSByZXBsYWNlRXhiVmVyc2lvbkluQXBwQ29uZmlnKG5ld0FwcENvbmZpZylcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBjb25maWcgPSBuZXdBcHBDb25maWc/LmFzTXV0YWJsZSh7IGRlZXA6IHRydWUgfSlcbiAgICAgICAgICAgICAgICAgICAgICAvKipcbiAgICAgICAgICAgICAgICAgICAgICAgKiBQcm94eSBpcyBjb25uZWN0ZWQgdG8gaXRlbSBpZCwgcHJveHkgY3JlYXRlZCBpbiBpdGVtIEEgY2Fubm90IGJlIHVzZWQgaW4gaXRlbSBCLlxuICAgICAgICAgICAgICAgICAgICAgICAqIFNvIGRlbGV0ZSBhcHAgcHJveGllcyB3aGVuIGR1cGxpY2F0ZSBpdGVtcy5cbiAgICAgICAgICAgICAgICAgICAgICAgKi9cbiAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgY29uZmlnLmFwcFByb3hpZXNcblxuICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBjb25maWcuaGlzdG9yeUxhYmVsc1xuXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNhdmVBcHAobmV3QXBwVXBkYXRlSW5mbywgSW1tdXRhYmxlKGNvbmZpZyksIG5ld0FwcEl0ZW0uaWQpLnRoZW4oYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy9yZXR1cm4gaWQgYW5kIGNvbmZpZyBvZiBuZXcgaXRlbVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldEFwcENvbmZpZ0luUmVzb3VyY2VzKG5ld0FwcEl0ZW0uaWQpLnRoZW4oYXN5bmMgY29uZmlnID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IG5ld0FwcEl0ZW0uaWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXBwQ29uZmlnOiBjb25maWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYXN5bmMgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIC8vRGVsZXRlIG5ldyBhcHAgd2hlbiBzYXZlIGFzIGVycm9yXG4gICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcbiAgICAgICAgICAgICAgICAgICAgICBkZWxldGVBcHAobmV3QXBwSXRlbS5pZClcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZWplY3QoZXJyb3IpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGFzeW5jIGVyciA9PiB7XG4gICAgICAgICAgICAgICAgICAvL0RlbGV0ZSBuZXcgYXBwIHdoZW4gc2F2ZSBhcyBlcnJvclxuICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgICAgICAgICAgICAgICBkZWxldGVBcHAobmV3QXBwSXRlbS5pZClcbiAgICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlamVjdChlcnIpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICApXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZWplY3QobnVsbClcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIClcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVqZWN0KG51bGwpXG4gICAgfVxuICB9LCBlcnIgPT4ge1xuICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpXG4gIH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBcHBDb25maWcgKFxuICBhcHBJbmZvOiBBcHBJbmZvXG4pOiBQcm9taXNlPGFueT4ge1xuICBjb25zdCBzZXNzaW9uID0gZ2V0U2Vzc2lvbihhcHBJbmZvKVxuICByZXR1cm4gYXdhaXQgZ2V0SXRlbURhdGEoXG4gICAgYXBwSW5mbyxcbiAgICB7IGF1dGhlbnRpY2F0aW9uOiBzZXNzaW9uIH1cbiAgKS50aGVuKFxuICAgIGFzeW5jIHJlc3VsdCA9PiB7XG4gICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKHJlc3VsdClcbiAgICB9LFxuICAgIGFzeW5jIGVycm9yID0+IHtcbiAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlamVjdChlcnJvcilcbiAgICB9XG4gIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlYXJjaEFwcCAoXG4gIHNlYXJjaE9wdGlvbjogSVNlYXJjaE9wdGlvbnMsXG4gIHNlYXJjaFR5cGU6IFNlYXJjaFR5cGVcbik6IFByb21pc2U8SVNlYXJjaFJlc3VsdDxBcHBJbmZvPj4ge1xuICBjb25zdCBzZXNzaW9uID0gZ2V0U2Vzc2lvbkJ5U2VhcmNoVHlwZShzZWFyY2hUeXBlKVxuICByZXR1cm4gYXdhaXQgc2VhcmNoSXRlbXMoXG4gICAge1xuICAgICAgLi4uc2VhcmNoT3B0aW9uLFxuICAgICAgYXV0aGVudGljYXRpb246IHNlc3Npb25cbiAgICB9LFxuICAgIHNlYXJjaFR5cGVcbiAgKS50aGVuKGFzeW5jIHJlc3VsdCA9PiB7XG4gICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVzb2x2ZShyZXN1bHQpXG4gIH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZWFyY2hBcHBCeVBvcnRhbFVybCAoXG4gIHNlYXJjaE9wdGlvbjogSVNlYXJjaE9wdGlvbnMsXG4gIHBvcnRhbFVybDogc3RyaW5nXG4pOiBQcm9taXNlPElTZWFyY2hSZXN1bHQ8QXBwSW5mbz4+IHtcbiAgY29uc3QgY3VycmVudFBvcnRhbFVybCA9IGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKS5wb3J0YWxVcmxcbiAgY29uc3QgaXNVc2VDdXJyZW50UG9ydGFsID0gcG9ydGFsVXJsID09PSBjdXJyZW50UG9ydGFsVXJsXG4gIGlmIChpc1VzZUN1cnJlbnRQb3J0YWwpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gZ2V0U2Vzc2lvbkJ5U2VhcmNoVHlwZShTZWFyY2hUeXBlLlBvcnRhbClcbiAgICBzZWFyY2hPcHRpb24uYXV0aGVudGljYXRpb24gPSBzZXNzaW9uXG4gIH1cblxuICByZXR1cm4gYXdhaXQgc2VhcmNoSXRlbXNCeVBvcnRhbFVybChcbiAgICBzZWFyY2hPcHRpb24sXG4gICAgcG9ydGFsVXJsXG4gICkudGhlbihhc3luYyByZXN1bHQgPT4ge1xuICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlc29sdmUocmVzdWx0KVxuICB9KVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0QXBwSW5mbyAoXG4gIGFwcEluZm86IEFwcEluZm9cbik6IFByb21pc2U8QXBwSW5mbz4ge1xuICBjb25zdCBzZXNzaW9uID0gZ2V0U2Vzc2lvbihhcHBJbmZvKVxuICByZXR1cm4gYXdhaXQgZ2V0SXRlbShcbiAgICBhcHBJbmZvLFxuICAgIHtcbiAgICAgIGF1dGhlbnRpY2F0aW9uOiBzZXNzaW9uXG4gICAgfVxuICApLnRoZW4oYXN5bmMgcmVzdWx0ID0+IHtcbiAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKHJlc3VsdClcbiAgfSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEdyb3VwQ2F0ZWdvcnlTY2hlbWEgKFxuICBncm91cElkOiBzdHJpbmcsXG4gIGlzR2V0QUdPTENhdGVnb3J5U2NoZW1hPzogYm9vbGVhblxuKTogUHJvbWlzZTxBcHBJbmZvPiB7XG4gIGNvbnN0IHNlc3Npb24gPSBTZXNzaW9uTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldE1haW5TZXNzaW9uKClcbiAgcmV0dXJuIGF3YWl0IGdldEdyb3VwQ2F0ZWdvcnlTY2hlbWFTZXJ2aWNlKFxuICAgIGdyb3VwSWQsXG4gICAge1xuICAgICAgYXV0aGVudGljYXRpb246IHNlc3Npb25cbiAgICB9LFxuICAgIGlzR2V0QUdPTENhdGVnb3J5U2NoZW1hXG4gICkudGhlbihhc3luYyByZXN1bHQgPT4ge1xuICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlc29sdmUocmVzdWx0KVxuICB9KVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0T3JnQ2F0ZWdvcnlTY2hlbWEgKFxuICBpc0dldEFHT0xDYXRlZ29yeVNjaGVtYT86IGJvb2xlYW5cbik6IFByb21pc2U8QXBwSW5mbz4ge1xuICBjb25zdCBzZXNzaW9uID0gU2Vzc2lvbk1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXRNYWluU2Vzc2lvbigpXG4gIHJldHVybiBhd2FpdCBnZXRPcmdDYXRlZ29yeVNjaGVtYVNlcnZpY2UoXG4gICAge1xuICAgICAgYXV0aGVudGljYXRpb246IHNlc3Npb25cbiAgICB9LFxuICAgIGlzR2V0QUdPTENhdGVnb3J5U2NoZW1hXG4gICkudGhlbihhc3luYyByZXN1bHQgPT4ge1xuICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlc29sdmUocmVzdWx0KVxuICB9KVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0R3JvdXBDb250ZW50IChcbiAgZ3JvdXBJZDogc3RyaW5nLFxuICBwYXJhbXM/OiBJUGFyYW1zLFxuICBpc0dldEFHT0xHcm91cENvbnRlbnQ/OiBib29sZWFuXG4pOiBQcm9taXNlPEFwcEluZm8+IHtcbiAgY29uc3Qgc2Vzc2lvbiA9IFNlc3Npb25NYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0TWFpblNlc3Npb24oKVxuICByZXR1cm4gYXdhaXQgZ2V0R3JvdXBDb250ZW50cyhcbiAgICBncm91cElkLFxuICAgIHtcbiAgICAgIHBhcmFtcyxcbiAgICAgIGF1dGhlbnRpY2F0aW9uOiBzZXNzaW9uXG4gICAgfSxcbiAgICBpc0dldEFHT0xHcm91cENvbnRlbnRcbiAgKS50aGVuKGFzeW5jIHJlc3VsdCA9PiB7XG4gICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVzb2x2ZShyZXN1bHQpXG4gIH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVBcHBJbmZvIChpdGVtUGFyYW06IElJdGVtVXBkYXRlKTogUHJvbWlzZTx2b2lkPiB7XG4gIGNvbnN0IHNlc3Npb24gPSBTZXNzaW9uTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldE1haW5TZXNzaW9uKClcbiAgY29uc3QgcG9ydGFsVXJsID0gd2luZG93LmppbXVDb25maWcuaXNEZXZFZGl0aW9uID8gJ2xvY2FsaG9zdDonIDogZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpLnBvcnRhbFVybFxuXG4gIGNvbnN0IGdldEFwcEluZm9QYXJhbXMgPSB7XG4gICAgaWQ6IGl0ZW1QYXJhbS5pZCxcbiAgICBwb3J0YWxVcmw6IHBvcnRhbFVybFxuICB9IGFzIEFwcEluZm9cbiAgcmV0dXJuIGF3YWl0IGdldEl0ZW0oZ2V0QXBwSW5mb1BhcmFtcywge1xuICAgIGF1dGhlbnRpY2F0aW9uOiBzZXNzaW9uXG4gIH0pLnRoZW4oYXN5bmMgcmVzID0+IHtcbiAgICByZXR1cm4gYXdhaXQgdXBkYXRlSXRlbSh7XG4gICAgICBpdGVtOiBpdGVtUGFyYW0sXG4gICAgICBvd25lcjogcmVzLm93bmVyLFxuICAgICAgYXV0aGVudGljYXRpb246IHNlc3Npb25cbiAgICB9KS50aGVuKCgpID0+IHtcbiAgICAgIHJldHVybiBudWxsXG4gICAgfSlcbiAgfSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUFwcEluZm9XaGVuU2F2ZUFwcCAoYXBwSW5mbzogQXBwSW5mbyk6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiB1cGRhdGVBcHBJbmZvKHsgLi4uYXBwSW5mbywgdGh1bWJuYWlsdXJsOiB1bmRlZmluZWQgfSkudGhlbihyZXMgPT4ge1xuICAgIGNvbnN0IHRodW1ibmFpbHVybCA9IGFwcEluZm8/LnRodW1ibmFpbHVybFxuICAgIGNvbnN0IHNhdmVUaHVtYm5haWxVcmwgPSBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCkuYXBwUnVudGltZUluZm8/LnNhdmVUaHVtYm5haWxVcmxcbiAgICBpZiAodGh1bWJuYWlsdXJsICYmIHRodW1ibmFpbHVybCAhPT0gc2F2ZVRodW1ibmFpbFVybCkge1xuICAgICAgZ2V0QXBwU3RvcmUoKS5kaXNwYXRjaChhcHBBY3Rpb25zLnNhdmVUaHVtYm5haWxVcmwodGh1bWJuYWlsdXJsKSlcbiAgICAgIHJldHVybiB1cGRhdGVUaHVtYm5haWwoYXBwSW5mby5pZCwgYXBwSW5mbywgdGh1bWJuYWlsdXJsKVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHRydWUpXG4gICAgfVxuICB9KS5jYXRjaChlcnIgPT4ge1xuICAgIHJldHVybiBQcm9taXNlLnJlamVjdCgnVXBkYXRlIGFwcEluZm8gZXJyb3InKVxuICB9KVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQXBwVGh1bWJuYWlsIChcbiAgaXRlbVBhcmFtOiBJSXRlbVVwZGF0ZSxcbiAgb3duZXI6IHN0cmluZyA9ICcnXG4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgY29uc3Qgc2Vzc2lvbiA9IFNlc3Npb25NYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0TWFpblNlc3Npb24oKVxuICByZXR1cm4gYXdhaXQgdXBkYXRlQXBwc1RodW1ibmFpbCh7XG4gICAgaXRlbTogaXRlbVBhcmFtLFxuICAgIGF1dGhlbnRpY2F0aW9uOiBzZXNzaW9uLFxuICAgIG93bmVyXG4gIH0pLnRoZW4oKCkgPT4ge1xuICAgIHJldHVybiBudWxsXG4gIH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVBcHAgKFxuICBhcHBJZDogc3RyaW5nXG4pOiBQcm9taXNlPHsgaXRlbUlkOiBzdHJpbmcsIHN1Y2Nlc3M6IGJvb2xlYW4gfT4ge1xuICBjb25zdCBzZXNzaW9uID0gU2Vzc2lvbk1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXRNYWluU2Vzc2lvbigpXG4gIHJldHVybiBhd2FpdCBnZXRJdGVtKHsgaWQ6IGFwcElkIH0gYXMgQXBwSW5mbywge1xuICAgIGF1dGhlbnRpY2F0aW9uOiBzZXNzaW9uXG4gIH0pLnRoZW4oYXN5bmMgcmVzID0+IHtcbiAgICByZXR1cm4gYXdhaXQgcmVtb3ZlSXRlbSh7XG4gICAgICBpZDogYXBwSWQsXG4gICAgICBvd25lcjogcmVzLm93bmVyLFxuICAgICAgYXV0aGVudGljYXRpb246IFNlc3Npb25NYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0TWFpblNlc3Npb24oKVxuICAgIH0pXG4gIH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzYXZlQXBwIChcbiAgYXBwSW5mbzogQXBwSW5mbyxcbiAgYXBwQ29uZmlnOiBJTUFwcENvbmZpZyxcbiAgbmV3QXBwSWQ/OiBzdHJpbmdcbik6IFByb21pc2U8dm9pZD4ge1xuICBjb25zdCBzZXNzaW9uID0gU2Vzc2lvbk1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXRNYWluU2Vzc2lvbigpXG4gIGNvbnN0IEFwcFJlc291cmNlTWFuYWdlciA9IG1vZHVsZUxvYWRlci5nZXRNb2R1bGVTeW5jKCdqaW11LWZvci1idWlsZGVyJykuQXBwUmVzb3VyY2VNYW5hZ2VyXG4gIGNvbnN0IGFwcENvbmZpZ1V0aWxzRm9yQnVpbGRlciA9IG1vZHVsZUxvYWRlci5nZXRNb2R1bGVTeW5jKCdqaW11LWZvci1idWlsZGVyJykuYXBwQ29uZmlnVXRpbHNcblxuICBjb25zdCBvd25lcnMgPSBhcHBJbmZvPy5vd25lciB8fCBzZXNzaW9uLnVzZXJuYW1lXG4gIGNvbnN0IGNvbmZpZyA9IHsgLi4uYXBwQ29uZmlnVXRpbHNGb3JCdWlsZGVyLmdldENsZWFuQXBwQ29uZmlnKGFwcENvbmZpZykgfVxuICBjb25zdCBhcHBSZXNvdXJjZU1hbmFnZXJJbnN0YW5jZTogQXBwUmVzb3VyY2VNYW5hZ2VyID0gQXBwUmVzb3VyY2VNYW5hZ2VyLmdldEluc3RhbmNlKClcblxuICBpZiAoIWNvbmZpZykge1xuICAgIGF3YWl0IFByb21pc2UucmVqZWN0KCk7IHJldHVyblxuICB9XG4gIHRyeSB7XG4gICAgYXdhaXQgYXBwUmVzb3VyY2VNYW5hZ2VySW5zdGFuY2UudXBMb2FkQXBwQ29uZmlnKGFwcEluZm8uaWQsIGNvbmZpZywgb3duZXJzKVxuICAgIGNvbnN0IHByb21pc2VzID0gW11cbiAgICBjb25zdCB7IGltYWdlUmVzb3VyY2VzLCBpY29uUmVzb3VyY2VzIH0gPSBhcHBSZXNvdXJjZU1hbmFnZXJJbnN0YW5jZS5nZXRSZXNvdXJjZXNJbkRyYWZ0KClcbiAgICBpbWFnZVJlc291cmNlcyAmJiBwcm9taXNlcy5wdXNoKGFwcFJlc291cmNlTWFuYWdlckluc3RhbmNlLnVwTG9hZEltYWdlUmVzb3VyY2VMaXN0KGNsb25lT2JqKGltYWdlUmVzb3VyY2VzKSwgbmV3QXBwSWQpKVxuICAgIGljb25SZXNvdXJjZXMgJiYgcHJvbWlzZXMucHVzaChhcHBSZXNvdXJjZU1hbmFnZXJJbnN0YW5jZS51cExvYWRJY29uUmVzb3VyY2VMaXN0KGNsb25lT2JqKGljb25SZXNvdXJjZXMpLCBuZXdBcHBJZCkpXG4gICAgcHJvbWlzZXMucHVzaCh1cGRhdGVBcHBJbmZvV2hlblNhdmVBcHAoYXBwSW5mbykpXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwocHJvbWlzZXMpXG4gIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgYXdhaXQgUHJvbWlzZS5yZWplY3QoZXJyb3IpXG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHB1Ymxpc2hBcHAgKFxuICBhcHBJbmZvOiBBcHBJbmZvXG4pOiBQcm9taXNlPHZvaWQ+IHtcbiAgY29uc3QgZHJhZnRBcHBDb25maWcgPSBhd2FpdCBnZXRBcHBDb25maWdJblJlc291cmNlcyhhcHBJbmZvLmlkKVxuICBjb25zdCBwdWJsaXNoZWRBcHBDb25maWcgPSBhd2FpdCBnZXRBcHBDb25maWcoYXBwSW5mbylcblxuICBjb25zdCBzZXNzaW9uID0gU2Vzc2lvbk1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXRNYWluU2Vzc2lvbigpXG4gIGlmIChkcmFmdEFwcENvbmZpZyAmJiBwdWJsaXNoZWRBcHBDb25maWcpIHtcbiAgICBjb25zdCBuZXdUeXBlS2V5d29yZHMgPSB1cGRhdGVUeXBlS2V5d29yZHMoYXBwSW5mbz8udHlwZUtleXdvcmRzLCBwdWJsaXNoZWRBcHBDb25maWc/LmV4YlZlcnNpb24pXG4gICAgY29uc3QgQXBwUmVzb3VyY2VNYW5hZ2VyID0gbW9kdWxlTG9hZGVyLmdldE1vZHVsZVN5bmMoJ2ppbXUtZm9yLWJ1aWxkZXInKVxuICAgICAgLkFwcFJlc291cmNlTWFuYWdlclxuICAgIGNvbnN0IGFwcFJlc291cmNlTWFuYWdlckluc3RhbmNlID0gQXBwUmVzb3VyY2VNYW5hZ2VyLmdldEluc3RhbmNlKClcbiAgICByZXR1cm4gYXBwUmVzb3VyY2VNYW5hZ2VySW5zdGFuY2VcbiAgICAgIC51cExvYWRMb2NhbFJlc291cmNlKGRyYWZ0QXBwQ29uZmlnKVxuICAgICAgLnRoZW4oYXN5bmMgZHJhZnRBcHBDb25maWcgPT4ge1xuICAgICAgICBpZiAoIWRyYWZ0QXBwQ29uZmlnKSB7XG4gICAgICAgICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVqZWN0KClcbiAgICAgICAgfVxuXG4gICAgICAgIGRyYWZ0QXBwQ29uZmlnID0gb3B0aW1pemVXaWRnZXRzQ29uZmlnKGRyYWZ0QXBwQ29uZmlnLCBhcHBJbmZvKVxuICAgICAgICBkcmFmdEFwcENvbmZpZyA9IHVwZGF0ZUhpc3RvcnlMYWJlbHMoZHJhZnRBcHBDb25maWcsIHB1Ymxpc2hlZEFwcENvbmZpZylcblxuICAgICAgICBjb25zdCBwcmV2aWV3VXJsID0gZ2V0UHJldmlld1VybChhcHBJbmZvKVxuICAgICAgICBhd2FpdCB1cGRhdGVJdGVtKHtcbiAgICAgICAgICBpdGVtOiB7XG4gICAgICAgICAgICBpZDogYXBwSW5mby5pZCxcbiAgICAgICAgICAgIG93bmVyOiBhcHBJbmZvLm93bmVyIHx8IHNlc3Npb24/LnVzZXJuYW1lLFxuICAgICAgICAgICAgZGF0YTogZHJhZnRBcHBDb25maWcsXG4gICAgICAgICAgICB0eXBlS2V5d29yZHM6IG5ld1R5cGVLZXl3b3JkcyxcbiAgICAgICAgICAgIHVybDogcHJldmlld1VybFxuICAgICAgICAgIH0sXG4gICAgICAgICAgYXV0aGVudGljYXRpb246IFNlc3Npb25NYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0TWFpblNlc3Npb24oKVxuICAgICAgICB9KS50aGVuKFxuICAgICAgICAgIGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIGF3YWl0IFByb21pc2UucmVzb2x2ZSgpXG4gICAgICAgICAgfSxcbiAgICAgICAgICBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZWplY3QoKVxuICAgICAgICAgIH1cbiAgICAgICAgKVxuICAgICAgfSxcbiAgICAgIGFzeW5jICgpID0+IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVqZWN0KClcbiAgICAgIH1cbiAgICAgIClcbiAgICAgIC5jYXRjaChhc3luYyBlcnJvciA9PiB7XG4gICAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlamVjdChlcnJvcilcbiAgICAgIH0pXG4gIH0gZWxzZSB7XG4gICAgYXdhaXQgUHJvbWlzZS5yZWplY3QoKVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRGb2xkZXJzIChyZXF1ZXN0T3B0aW9uOiBJUGFyYW1zKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGdldFVzZXJDb250ZW50KHJlcXVlc3RPcHRpb24pLnRoZW4oXG4gICAgYXN5bmMgcmVzdWx0ID0+IHtcbiAgICAgIGNvbnN0IGZvbGRlcnMgPSByZXN1bHQ/LmZvbGRlcnMgfHwgW11cbiAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlc29sdmUoZm9sZGVycylcbiAgICB9LFxuICAgIGFzeW5jIGVycm9yID0+IHtcbiAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlamVjdChlcnJvcilcbiAgICB9XG4gIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZFRvRmF2b3JpdGVzIChwYXJhbXM6IElQYXJhbXMpOiBQcm9taXNlPElTaGFyaW5nUmVzcG9uc2U+IHtcbiAgcmV0dXJuIGF3YWl0IHNoYXJlSXRlbVdpdGhHcm91cChwYXJhbXMpLnRoZW4oYXN5bmMgcmVzdWx0ID0+IHtcbiAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKHJlc3VsdClcbiAgfSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlbW92ZUZyb21GYXZvcml0ZXMgKFxuICBwYXJhbXM6IElQYXJhbXNcbik6IFByb21pc2U8SVNoYXJpbmdSZXNwb25zZT4ge1xuICByZXR1cm4gYXdhaXQgdW5zaGFyZUl0ZW1XaXRoR3JvdXAocGFyYW1zKS50aGVuKGFzeW5jIHJlc3VsdCA9PiB7XG4gICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVzb2x2ZShyZXN1bHQpXG4gIH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBcHBHcm91cHMgKHBhcmFtczogSVBhcmFtcyk6IFByb21pc2U8SVNoYXJpbmdSZXNwb25zZT4ge1xuICByZXR1cm4gYXdhaXQgZ2V0SXRlbXNHcm91cHMocGFyYW1zKS50aGVuKGFzeW5jIHJlc3VsdCA9PiB7XG4gICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVzb2x2ZShyZXN1bHQpXG4gIH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjaGFuZ2VBcHBGb2xkZXIgKFxuICBwYXJhbXM6IElNb3ZlSXRlbU9wdGlvbnNcbik6IFByb21pc2U8SU1vdmVJdGVtUmVzcG9uc2U+IHtcbiAgcmV0dXJuIGF3YWl0IG1vdmVJdGVtKHtcbiAgICAuLi5wYXJhbXMsXG4gICAgYXV0aGVudGljYXRpb246IFNlc3Npb25NYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0TWFpblNlc3Npb24oKVxuICB9KVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlclRhZ3MgKHVzZXJuYW1lOiBzdHJpbmcpOiBQcm9taXNlPElHZXRVc2VyVGFnc1Jlc3BvbnNlPiB7XG4gIHJldHVybiBhd2FpdCBnZXRVc2Vyc1RhZ3Moe1xuICAgIHVzZXJuYW1lOiB1c2VybmFtZSxcbiAgICBhdXRoZW50aWNhdGlvbjogU2Vzc2lvbk1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXRNYWluU2Vzc2lvbigpXG4gIH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZWFyY2hHcm91cHMgKFxuICByZXF1ZXN0T3B0aW9uczogSVNlYXJjaE9wdGlvbnMgfCBTZWFyY2hRdWVyeUJ1aWxkZXJcbik6IFByb21pc2U8SVNlYXJjaFJlc3VsdDxJR3JvdXA+PiB7XG4gIHJldHVybiBhd2FpdCBzZWFyY2hHcm91cChyZXF1ZXN0T3B0aW9ucylcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldERlZmF1bHRUZW1wbGF0ZUNvbmZpZyAoXG4gIGFwcEluZm86IEFwcENyZWF0aW9uSW5mb1xuKTogUHJvbWlzZTxBcHBDb25maWc+IHtcbiAgcmV0dXJuIGdldFRlbXBsYXRlQ29uZmlnKFRlbXBsYXRlVHlwZS5BcHAsIGFwcEluZm8udGVtcGxhdGUpXG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cbmltcG9ydCB7XG4gIHR5cGUgQXBwQ3JlYXRpb25JbmZvLFxuICBnZXRBcHBTdG9yZSxcbiAgbW9kdWxlTG9hZGVyLFxuICB0eXBlIEFwcENvbmZpZyxcbiAgYXBwQ29uZmlnVXRpbHMsXG4gIFNlc3Npb25NYW5hZ2VyLFxuICBpMThuLFxuICB2ZXJzaW9uLFxuICB1dGlscyxcbiAgcG9ydGFsVXJsVXRpbHMsXG4gIHNlbXZlcixcbiAgdXJsVXRpbHMsXG4gIGVzcmksXG4gIHR5cGUgSU1BcHBDb25maWcsXG4gIEltbXV0YWJsZSxcbiAgc2hhcmVkVGhlbWVVdGlsc1xufSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyB0eXBlIElJdGVtQWRkIH0gZnJvbSAnQGVzcmkvYXJjZ2lzLXJlc3QtdHlwZXMnXG5pbXBvcnQgeyB0eXBlIElDcmVhdGVJdGVtUmVzcG9uc2UgfSBmcm9tICdAZXNyaS9hcmNnaXMtcmVzdC1wb3J0YWwnXG5pbXBvcnQge1xuICB1cGRhdGVJdGVtLFxuICBjcmVhdGVJdGVtLFxuICBnZXRJdGVtUmVzb3VyY2VzLFxuICBhZGRJdGVtUmVzb3VyY2UsXG4gIGNyZWF0ZUFwcEluRm9sZGVyXG59IGZyb20gJy4uL3Jlc3Qtc2VydmljZSdcbmltcG9ydCBkZWZhdWx0TWVzc2FnZXMgZnJvbSAnLi4vLi4vdHJhbnNsYXRpb25zL2RlZmF1bHQnXG5pbXBvcnQgeyB0eXBlIEFwcEluZm8sIFNlYXJjaFR5cGUsIEFwcFR5cGUsIFB1Ymxpc2hTdGF0dXMgfSBmcm9tICcuLi90eXBlJ1xuaW1wb3J0IHsgc2VhcmNoQXBwLCBnZXRBcHBDb25maWcsIHVwZGF0ZUFwcFRodW1ibmFpbCwgZ2V0QXBwSW5mbywgZGVsZXRlQXBwIH0gZnJvbSAnLi9pbmRleCdcbmltcG9ydCB7IHR5cGUgVXNlclNlc3Npb24gfSBmcm9tICdAZXNyaS9hcmNnaXMtcmVzdC1hdXRoJ1xuaW1wb3J0ICogYXMgbG9jYWxSZXN0U2VydmljZSBmcm9tICcuLi9sb2NhbC1yZXN0LXNlcnZpY2UnXG5cbmNvbnN0IHJlcXVlc3QgPSBlc3JpLnJlc3RSZXF1ZXN0LnJlcXVlc3RcblxuZXhwb3J0IGZ1bmN0aW9uIGlzUG9ydGFsQXBwIChhcHBJbmZvOiBBcHBJbmZvKSB7XG4gIGlmICghYXBwSW5mbz8ucG9ydGFsVXJsKSB7XG4gICAgcmV0dXJuICF3aW5kb3cuamltdUNvbmZpZy5pc0RldkVkaXRpb25cbiAgfVxuICBjb25zdCBhcHBQb3J0YWxVcmwgPSBhcHBJbmZvPy5wb3J0YWxVcmwgfHwgJydcbiAgY29uc3QgcG9ydGFsVXJsID0gZ2V0QXBwU3RvcmUoKT8uZ2V0U3RhdGUoKT8ucG9ydGFsVXJsIHx8ICcnXG4gIGNvbnN0IGlzU2FtZVBvcnRhbCA9IHBvcnRhbFVybD8uaW5jbHVkZXMoYXBwUG9ydGFsVXJsKSB8fCBhcHBQb3J0YWxVcmw/LmluY2x1ZGVzKHBvcnRhbFVybClcbiAgaWYgKHBvcnRhbFVybFV0aWxzLmlzQUdPTERvbWFpbihhcHBQb3J0YWxVcmwpICYmIHBvcnRhbFVybFV0aWxzLmlzQUdPTERvbWFpbihwb3J0YWxVcmwpKSB7XG4gICAgcmV0dXJuICFpc0xvY2FsQXBwKGFwcEluZm8pXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGlzU2FtZVBvcnRhbCAmJiAhaXNMb2NhbEFwcChhcHBJbmZvKVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc0FHT0xBcHAgKGFwcEluZm86IEFwcEluZm8pIHtcbiAgaWYgKCFhcHBJbmZvPy5wb3J0YWxVcmwpIHtcbiAgICByZXR1cm4gZmFsc2VcbiAgfVxuICBjb25zdCBhcHBQb3J0YWxVcmwgPSBhcHBJbmZvPy5wb3J0YWxVcmwgfHwgJydcbiAgY29uc3QgaXNQb3J0YWxBR09MID0gcG9ydGFsVXJsVXRpbHMuaXNBR09MRG9tYWluKGFwcFBvcnRhbFVybClcbiAgY29uc3QgaXNOb3RQb3J0YWxBcHAgPSAhaXNQb3J0YWxBcHAoYXBwSW5mbylcbiAgY29uc3QgaXNOb3RMb2NhbEFwcCA9ICFpc0xvY2FsQXBwKGFwcEluZm8pXG4gIHJldHVybiBpc05vdFBvcnRhbEFwcCAmJiBpc05vdExvY2FsQXBwICYmIGlzUG9ydGFsQUdPTFxufVxuXG5leHBvcnQgZnVuY3Rpb24gaXNMb2NhbEFwcCAoYXBwSW5mbzogQXBwSW5mbykge1xuICBjb25zdCBhcHBQb3J0YWxVcmwgPSBhcHBJbmZvPy5wb3J0YWxVcmwgfHwgJydcbiAgaWYgKGFwcFBvcnRhbFVybC5lbmRzV2l0aCgnbG9jYWxob3N0OicpKSB7XG4gICAgcmV0dXJuIHRydWVcbiAgfVxuICByZXR1cm4gYXBwSW5mby5pc0xvY2FsQXBwXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRTZXNzaW9uIChhcHBJbmZvOiBBcHBJbmZvKTogVXNlclNlc3Npb24ge1xuICBpZiAoaXNMb2NhbEFwcChhcHBJbmZvKSkge1xuICAgIHJldHVybiB7fSBhcyBVc2VyU2Vzc2lvblxuICB9XG4gIGNvbnN0IHBvcnRhbFNlc3Npb24gPSBTZXNzaW9uTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldE1haW5TZXNzaW9uKClcbiAgY29uc3Qgc2Vzc2lvbiA9IGlzUG9ydGFsQXBwKGFwcEluZm8pID8gcG9ydGFsU2Vzc2lvbiA6ICh7fSBhcyBVc2VyU2Vzc2lvbilcbiAgcmV0dXJuIHNlc3Npb25cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFNlc3Npb25CeVNlYXJjaFR5cGUgKHNlYXJjaFR5cGU6IFNlYXJjaFR5cGUpOiBVc2VyU2Vzc2lvbiB7XG4gIGxldCBzZXNzaW9uOiBVc2VyU2Vzc2lvblxuICBjb25zdCBwb3J0YWxVcmwgPSBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCkucG9ydGFsVXJsXG4gIGNvbnN0IHBvcnRhbFNlc3Npb24gPSBTZXNzaW9uTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldE1haW5TZXNzaW9uKClcbiAgY29uc3QgaXNBR09MRG9tYWluID0gcG9ydGFsVXJsVXRpbHMuaXNBR09MRG9tYWluKHBvcnRhbFVybClcbiAgc3dpdGNoIChzZWFyY2hUeXBlKSB7XG4gICAgY2FzZSBTZWFyY2hUeXBlLlBvcnRhbDpcbiAgICAgIHNlc3Npb24gPSBwb3J0YWxTZXNzaW9uXG4gICAgICBicmVha1xuICAgIGNhc2UgU2VhcmNoVHlwZS5BR09MOlxuICAgICAgc2Vzc2lvbiA9IGlzQUdPTERvbWFpbiA/IHBvcnRhbFNlc3Npb24gOiB7fSBhcyBVc2VyU2Vzc2lvblxuICAgICAgYnJlYWtcbiAgICBjYXNlIFNlYXJjaFR5cGUuT3RoZXI6XG4gICAgICBzZXNzaW9uID0gd2luZG93LmppbXVDb25maWcuaXNEZXZFZGl0aW9uID8ge30gYXMgVXNlclNlc3Npb24gOiBwb3J0YWxTZXNzaW9uXG4gICAgICBicmVha1xuICB9XG4gIHJldHVybiBzZXNzaW9uXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXROZXdBcHBUaXRsZVdpdGhJbmRleCAoXG4gIHRpdGxlOiBzdHJpbmcsXG4gIGlzQ29weTogYm9vbGVhbiA9IGZhbHNlLFxuICB0eXBlOiBzdHJpbmcgPSAnJ1xuKTogUHJvbWlzZTxzdHJpbmc+IHtcbiAgY29uc3Qgc2Vzc2lvbiA9IFNlc3Npb25NYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0TWFpblNlc3Npb24oKVxuICBsZXQgbmV3VGl0bGUgPSBudWxsXG4gIGNvbnN0IGFwcFR5cGU6IHN0cmluZyA9XG4gICAgIXR5cGU/LmluY2x1ZGVzKCdUZW1wbGF0ZScpXG4gICAgICA/IEFwcFR5cGUuRXhwZXJpZW5jZVR5cGVcbiAgICAgIDogQXBwVHlwZS5UZW1wbGF0ZVR5cGVcbiAgcmV0dXJuIGF3YWl0IHNlYXJjaEFwcCh7XG4gICAgcTogYHR5cGU6IFwiJHthcHBUeXBlfVwiIEFORCBvd25lcjoke3Nlc3Npb24/LnVzZXJuYW1lfSBBTkQgIHRpdGxlOlwiJHt0aXRsZX1cImAsXG4gICAgc29ydEZpZWxkOiAnbW9kaWZpZWQnLFxuICAgIHNvcnRPcmRlcjogJ2Rlc2MnXG4gIH0sIFNlYXJjaFR5cGUuT3RoZXIpXG4gICAgLnRoZW4oYXN5bmMgcmVzdWx0ID0+IHtcbiAgICAgIGNvbnN0IGFwcHMgPSByZXN1bHQucmVzdWx0c1xuICAgICAgaWYgKGFwcHMgJiYgYXBwcy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IGluZGV4ID0gZ2V0TWF4SW5kZXgoYXBwcywgdGl0bGUpXG4gICAgICAgIG5ld1RpdGxlID0gZ2V0QXBwTmFtZSh0aXRsZSwgYXBwcywgaW5kZXgsIGlzQ29weSlcbiAgICAgICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVzb2x2ZShuZXdUaXRsZSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG5ld1RpdGxlID0gaXNDb3B5ID8gdGl0bGUgOiBgJHt0aXRsZX0gMWBcbiAgICAgICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVzb2x2ZShuZXdUaXRsZSlcbiAgICAgIH1cbiAgICB9KVxuICAgIC5jYXRjaChhc3luYyBlcnIgPT4ge1xuICAgICAgY29uc29sZS5lcnJvcihlcnIpXG4gICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZWplY3QoZXJyKVxuICAgIH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkdXBsaWNhdGVSZWxhdGVkRGF0YUluQXBwIChcbiAgbmV3QXBwSWQsXG4gIG9yaWdpbmFsQXBwSW5mbzogQXBwSW5mbyxcbiAgaXNDcmVhdGVOZXcgPSBmYWxzZVxuKTogUHJvbWlzZTxib29sZWFuPiB7XG4gIHJldHVybiBhd2FpdCB1cGRhdGVJdGVtRGF0YUluQXBwKG5ld0FwcElkKS50aGVuKFxuICAgIGFzeW5jIHJlc3VsdCA9PiB7XG4gICAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZWplY3QobnVsbClcbiAgICAgIH1cbiAgICAgIGlmIChpc0NyZWF0ZU5ldykge1xuICAgICAgICByZXR1cm4gYXdhaXQgZHVwbGljYXRlUmVzb3VyY2VzRm9yQ3JlYXRlTmV3KFxuICAgICAgICAgIG5ld0FwcElkLFxuICAgICAgICAgIG9yaWdpbmFsQXBwSW5mb1xuICAgICAgICApXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYXdhaXQgZHVwbGljYXRlUmVzb3VyY2VzRm9yRHVwbGljYXRlKFxuICAgICAgICAgIG5ld0FwcElkLFxuICAgICAgICAgIG9yaWdpbmFsQXBwSW5mb1xuICAgICAgICApXG4gICAgICB9XG4gICAgfSxcbiAgICBhc3luYyBlcnIgPT4ge1xuICAgICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVqZWN0KGVycilcbiAgICB9XG4gIClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHVwZGF0ZVR5cGVLZXl3b3JkcyAodHlwZUtleXdvcmRzOiBzdHJpbmdbXSwgYXBwQ29uZmlnVmVyc2lvbjogc3RyaW5nKTogc3RyaW5nW10ge1xuICBsZXQgaXNIYXZlUHVibGlzaFN0YXR1cyA9IGZhbHNlXG4gIGxldCBoYXZlVXBkYXRlUHVibGlzaFZlcnNpb24gPSBmYWxzZVxuICBjb25zdCBuZXdUeXBlS2V5d29yZHMgPSB0eXBlS2V5d29yZHMubWFwKGVsID0+IHtcbiAgICBpZiAoZWwuaW5jbHVkZXMoJ3N0YXR1czonKSkge1xuICAgICAgaXNIYXZlUHVibGlzaFN0YXR1cyA9IHRydWVcbiAgICAgIHJldHVybiBgc3RhdHVzOiAke1B1Ymxpc2hTdGF0dXMuUHVibGlzaGVkfWBcbiAgICB9XG4gICAgaWYgKGVsLmluY2x1ZGVzKCdwdWJsaXNoVmVyc2lvbjonKSAmJiBhcHBDb25maWdWZXJzaW9uKSB7XG4gICAgICBoYXZlVXBkYXRlUHVibGlzaFZlcnNpb24gPSB0cnVlXG4gICAgICByZXR1cm4gYHB1Ymxpc2hWZXJzaW9uOiR7YXBwQ29uZmlnVmVyc2lvbn1gXG4gICAgfVxuICAgIHJldHVybiBlbFxuICB9KVxuXG4gIGlmICghaXNIYXZlUHVibGlzaFN0YXR1cykge1xuICAgIGNvbnN0IGtleXdvcmxkcyA9IGBzdGF0dXM6ICR7UHVibGlzaFN0YXR1cy5QdWJsaXNoZWR9YFxuICAgIG5ld1R5cGVLZXl3b3Jkcy5wdXNoKGtleXdvcmxkcylcbiAgfVxuICBpZiAoIWhhdmVVcGRhdGVQdWJsaXNoVmVyc2lvbiAmJiBhcHBDb25maWdWZXJzaW9uKSB7XG4gICAgbmV3VHlwZUtleXdvcmRzLnB1c2goYHB1Ymxpc2hWZXJzaW9uOiR7YXBwQ29uZmlnVmVyc2lvbn1gKVxuICB9XG4gIHJldHVybiBuZXdUeXBlS2V5d29yZHNcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHRvQ3JlYXRlQXBwQnlEZWZhdWx0VGVtcGxhdGUgKFxuICBhcHBJbmZvOiBBcHBDcmVhdGlvbkluZm8sXG4gIGZvbGRlcklkPzogc3RyaW5nXG4pOiBQcm9taXNlPElDcmVhdGVJdGVtUmVzcG9uc2U+IHtcbiAgY29uc3QgaXRlbUluZm8gPSB7XG4gICAgdGl0bGU6IGFwcEluZm8/Lm5hbWUsXG4gICAgdHlwZTogYXBwSW5mbz8udHlwZSB8fCAnV2ViIEV4cGVyaWVuY2UnLFxuICAgIHR5cGVLZXl3b3JkczogW1xuICAgICAgJ0VYQiBFeHBlcmllbmNlJyxcbiAgICAgICdSZWFkeSBUbyBVc2UnLFxuICAgICAgJ0phdmFTY3JpcHQnLFxuICAgICAgJ3N0YXR1czogRHJhZnQnLFxuICAgICAgYHZlcnNpb246JHt2ZXJzaW9ufWBcbiAgICBdLFxuICAgIHNuaXBwZXQ6IGFwcEluZm8/LnNuaXBwZXQgfHwgJycsXG4gICAgZGVzY3JpcHRpb246IGFwcEluZm8/LmRlc2NyaXB0aW9uIHx8ICcnLFxuICAgIHRhZ3M6IGFwcEluZm8/LnRhZ3MgfHwgW10sXG4gICAgZGF0YTogeyBfX25vdF9wdWJsaXNoOiB0cnVlIH1cbiAgICAvLyB0aHVtYm5haWxVcmw6YXBwSW5mby50aHVtYm5haWxVcmxcbiAgfVxuICBjb25zdCBjaGVja0V4aXN0ID0gYXN5bmMgKCkgPT4ge1xuICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlc29sdmUoZmFsc2UpXG4gIH1cbiAgcmV0dXJuIGF3YWl0IGNoZWNrRXhpc3QoKS50aGVuKGFzeW5jIGZ1bmN0aW9uIChleGlzdCkge1xuICAgIGlmIChleGlzdCkge1xuICAgICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVqZWN0KCdhcHAgZXhpc3RlZC4nKVxuICAgIH1cbiAgICByZXR1cm4gYXdhaXQgY3JlYXRlQXBwKGl0ZW1JbmZvLCBmb2xkZXJJZClcbiAgfSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUl0ZW1EYXRhSW5BcHAgKG5ld0FwcElkKTogUHJvbWlzZTxib29sZWFuPiB7XG4gIGNvbnN0IHNlc3Npb24gPSBTZXNzaW9uTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldE1haW5TZXNzaW9uKClcbiAgcmV0dXJuIGF3YWl0IHVwZGF0ZUl0ZW0oe1xuICAgIGl0ZW06IHtcbiAgICAgIGlkOiBuZXdBcHBJZCxcbiAgICAgIG93bmVyOiBzZXNzaW9uPy51c2VybmFtZSxcbiAgICAgIHRleHQ6ICcnLFxuICAgICAgZGF0YTogeyBfX25vdF9wdWJsaXNoOiB0cnVlIH1cbiAgICAgIC8vIGRhdGE6IG5ld0RhdGFcbiAgICB9LFxuICAgIGF1dGhlbnRpY2F0aW9uOiBTZXNzaW9uTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldE1haW5TZXNzaW9uKClcbiAgfSkudGhlbihcbiAgICBhc3luYyAoKSA9PiB7XG4gICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKHRydWUpXG4gICAgfSxcbiAgICBhc3luYyBlcnJvciA9PiB7XG4gICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVqZWN0KGVycm9yKVxuICAgIH1cbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZHVwbGljYXRlUmVzb3VyY2VzSW5BcHAgKFxuICBuZXdBcHBJZCxcbiAgb3JpZ2luYWxBcHBJbmZvOiBBcHBJbmZvLFxuICBpc0NyZWF0ZU5ldyA9IGZhbHNlLFxuICB1cGRhdGVBcHBDb25maWdWZXJzaW9uID0gZmFsc2Vcbik6IFByb21pc2U8YW55PiB7XG4gIGNvbnN0IHNlc3Npb24gPSBnZXRTZXNzaW9uKG9yaWdpbmFsQXBwSW5mbylcbiAgcmV0dXJuIGF3YWl0IGdldEl0ZW1SZXNvdXJjZXMoXG4gICAgb3JpZ2luYWxBcHBJbmZvLFxuICAgIHtcbiAgICAgIGF1dGhlbnRpY2F0aW9uOiBzZXNzaW9uXG4gICAgfVxuICApLnRoZW4oXG4gICAgYXN5bmMgcmVzb3VyY2VSZXN1bHRzID0+IHtcbiAgICAgIGNvbnN0IHJlc291cmNlUHJvbWlzZXMgPSBbXVxuICAgICAgY29uc3QgcG9ydGFsUmVzb3VyY2VzID0gcmVzb3VyY2VSZXN1bHRzICYmIHJlc291cmNlUmVzdWx0cy5yZXNvdXJjZXNcbiAgICAgIGxldCBpc0FwcEhhc0NvbmZpZyA9IGZhbHNlXG4gICAgICBpZiAocG9ydGFsUmVzb3VyY2VzKSB7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcG9ydGFsUmVzb3VyY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgY29uc3QgaXNDb25maWcgPSBwb3J0YWxSZXNvdXJjZXNbaV0ucmVzb3VyY2UgPT09ICdjb25maWcvY29uZmlnLmpzb24nXG4gICAgICAgICAgLy8gVXNlIHB1Ymxpc2hlZCB2ZXJzaW9uIG9mIGEgdGVtcGxhdGUgd2hlbiBjcmVhdGUgYW4gYXBwIGZyb20gYSB0ZW1wbGF0ZVxuICAgICAgICAgIGlmIChpc0NyZWF0ZU5ldyAmJiBpc0NvbmZpZykge1xuICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICB9XG4gICAgICAgICAgLy8gSWYgYW4gYXBwIGhhcyBubyBjb25maWcsIGl0IGNhbm5vdCBiZSBkdXBsaWNhdGVcbiAgICAgICAgICBpZiAoaXNDb25maWcpIHtcbiAgICAgICAgICAgIGlzQXBwSGFzQ29uZmlnID0gdHJ1ZVxuICAgICAgICAgIH1cbiAgICAgICAgICByZXNvdXJjZVByb21pc2VzLnB1c2godXBsb2FkUmVzb3VyY2UobmV3QXBwSWQsIG9yaWdpbmFsQXBwSW5mbywgcG9ydGFsUmVzb3VyY2VzW2ldLCB1cGRhdGVBcHBDb25maWdWZXJzaW9uKSlcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICBpZiAoaXNBcHBIYXNDb25maWcgfHwgaXNDcmVhdGVOZXcpIHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IFByb21pc2UuYWxsKHJlc291cmNlUHJvbWlzZXMpXG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKG51bGwpXG4gICAgICB9XG4gICAgfSxcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgICBhc3luYyBlcnIgPT4ge1xuICAgICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVzb2x2ZShudWxsKVxuICAgIH1cbiAgKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZHVwbGljYXRlUmVzb3VyY2VzRm9yQ3JlYXRlTmV3IChcbiAgbmV3QXBwSWQsXG4gIG9yaWdpbmFsQXBwSW5mbzogQXBwSW5mb1xuKTogUHJvbWlzZTxib29sZWFuPiB7XG4gIHJldHVybiBhd2FpdCBkdXBsaWNhdGVQdWJsaXNoZWRBcHBzQ29uZmlnKFxuICAgIG5ld0FwcElkLFxuICAgIG9yaWdpbmFsQXBwSW5mb1xuICApLnRoZW4oYXN5bmMgcmVzID0+IHtcbiAgICByZXR1cm4gYXdhaXQgZHVwbGljYXRlUmVzb3VyY2VzSW5BcHAoXG4gICAgICBuZXdBcHBJZCxcbiAgICAgIG9yaWdpbmFsQXBwSW5mbyxcbiAgICAgIHRydWVcbiAgICApLnRoZW4oXG4gICAgICBhc3luYyByZXNvdXJjZVJlc3VsdCA9PiB7XG4gICAgICAgIGlmIChyZXNvdXJjZVJlc3VsdCkge1xuICAgICAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlc29sdmUodHJ1ZSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZWplY3QoJ1Jlc291cmNlIGRvZXMgbm90IGV4aXN0IG9yIGlzIGluYWNjZXNzaWJsZScpXG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBhc3luYyBlcnIgPT4ge1xuICAgICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZWplY3QoZXJyKVxuICAgICAgfVxuICAgIClcbiAgfSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGR1cGxpY2F0ZVJlc291cmNlc0ZvckR1cGxpY2F0ZSAoXG4gIG5ld0FwcElkLFxuICBvcmlnaW5hbEFwcEluZm86IEFwcEluZm8sXG4gIHVwZGF0ZUFwcENvbmZpZ1ZlcnNpb24gPSBmYWxzZVxuKTogUHJvbWlzZTxib29sZWFuPiB7XG4gIHJldHVybiBhd2FpdCBkdXBsaWNhdGVSZXNvdXJjZXNJbkFwcChuZXdBcHBJZCwgb3JpZ2luYWxBcHBJbmZvLCBmYWxzZSwgdXBkYXRlQXBwQ29uZmlnVmVyc2lvbikudGhlbihcbiAgICBhc3luYyByZXNvdXJjZVJlc3VsdCA9PiB7XG4gICAgICBpZiAocmVzb3VyY2VSZXN1bHQpIHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVzb2x2ZSh0cnVlKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVqZWN0KCdSZXNvdXJjZSBkb2VzIG5vdCBleGlzdCBvciBpcyBpbmFjY2Vzc2libGUnKVxuICAgICAgfVxuICAgIH0sXG4gICAgYXN5bmMgZXJyID0+IHtcbiAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlamVjdChlcnIpXG4gICAgfVxuICApXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkdXBsaWNhdGVQdWJsaXNoZWRBcHBzQ29uZmlnIChcbiAgbmV3QXBwSWQsXG4gIG9yaWdpbmFsQXBwSW5mbzogQXBwSW5mb1xuKTogUHJvbWlzZTxib29sZWFuPiB7XG4gIHJldHVybiBhd2FpdCBnZXRBcHBDb25maWcoXG4gICAgb3JpZ2luYWxBcHBJbmZvXG4gICkudGhlbihcbiAgICBhc3luYyBkYXRhID0+IHtcbiAgICAgIGNvbnN0IG5ld0NvbmZpZ0RhdGEgPSBpbml0QXBwQ29uZmlnUG9ydGFsVXJsKGRhdGEsIG9yaWdpbmFsQXBwSW5mbylcbiAgICAgIG5ld0NvbmZpZ0RhdGEudGVtcGxhdGUgPSBvcmlnaW5hbEFwcEluZm8/LmlkXG4gICAgICAvKipcbiAgICAgICAqIFByb3h5IGlzIGNvbm5lY3RlZCB0byBpdGVtIGlkLCBwcm94eSBjcmVhdGVkIGluIGl0ZW0gQSBjYW5ub3QgYmUgdXNlZCBpbiBpdGVtIEIuXG4gICAgICAgKiBTbyBkZWxldGUgYXBwIHByb3hpZXMgd2hlbiBkdXBsaWNhdGUgaXRlbXMuXG4gICAgICAgKi9cbiAgICAgIGRlbGV0ZSBuZXdDb25maWdEYXRhLmFwcFByb3hpZXNcblxuICAgICAgZGVsZXRlIG5ld0NvbmZpZ0RhdGEuaGlzdG9yeUxhYmVsc1xuXG4gICAgICBjb25zdCBwb3J0YWxVcmwgPSB3aW5kb3cuamltdUNvbmZpZy5pc0RldkVkaXRpb24gPyAnbG9jYWxob3N0OicgOiBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCkucG9ydGFsVXJsXG4gICAgICBjb25zdCBzZXNzaW9uID0gZ2V0U2Vzc2lvbih7IHBvcnRhbFVybDogcG9ydGFsVXJsIH0gYXMgQXBwSW5mbylcbiAgICAgIGlmIChkYXRhPy5fX25vdF9wdWJsaXNoKSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlamVjdCgnVGhpcyBpdGVtIGlzIG5vdCBwdWJsaXNoZWQnKVxuICAgICAgfVxuICAgICAgY29uc3QgZmlsZSA9IG5ldyBCbG9iKFtKU09OLnN0cmluZ2lmeShuZXdDb25maWdEYXRhKV0sIHtcbiAgICAgICAgdHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9KVxuICAgICAgcmV0dXJuIGF3YWl0IGFkZEl0ZW1SZXNvdXJjZSh7XG4gICAgICAgIGlkOiBuZXdBcHBJZCxcbiAgICAgICAgcmVzb3VyY2U6IGZpbGUsXG4gICAgICAgIG5hbWU6ICdjb25maWcuanNvbicsXG4gICAgICAgIHBhcmFtczoge1xuICAgICAgICAgIHJlc291cmNlc1ByZWZpeDogJ2NvbmZpZydcbiAgICAgICAgfSxcbiAgICAgICAgYXV0aGVudGljYXRpb246IHNlc3Npb25cbiAgICAgIH0pLnRoZW4oXG4gICAgICAgIGFzeW5jICgpID0+IHtcbiAgICAgICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKHRydWUpXG4gICAgICAgIH0sXG4gICAgICAgIGFzeW5jIGVycm9yID0+IHtcbiAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgICAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlamVjdChlcnJvcilcbiAgICAgICAgfVxuICAgICAgKVxuICAgIH0sXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgYXN5bmMgZXJyID0+IHtcbiAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlamVjdCgnUmVzb3VyY2UgZG9lcyBub3QgZXhpc3Qgb3IgaXMgaW5hY2Nlc3NpYmxlJylcbiAgICB9XG4gIClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVRodW1ibmFpbCAoXG4gIG5ld0FwcElkLFxuICBvcmlnaW5hbEFwcEluZm86IEFwcEluZm8sXG4gIHRodW1ibmFpbFxuKTogUHJvbWlzZTxib29sZWFuPiB7XG4gIGNvbnN0IHBvcnRhbFVybCA9IHdpbmRvdy5qaW11Q29uZmlnLmlzRGV2RWRpdGlvbiA/ICdsb2NhbGhvc3Q6JyA6IGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKS5wb3J0YWxVcmxcbiAgY29uc3Qgc2Vzc2lvbiA9IGdldFNlc3Npb24oeyBwb3J0YWxVcmw6IHBvcnRhbFVybCB9IGFzIEFwcEluZm8pXG4gIGNvbnN0IG9yaWdpbmFsQXBwU2Vzc2lvbiA9IGdldFNlc3Npb24ob3JpZ2luYWxBcHBJbmZvKVxuICBpZiAodGh1bWJuYWlsKSB7XG4gICAgY29uc3QgcG9ydGFsVGh1bWJuYWlsVXJsID0gYCR7Z2V0UmVzb3VyY2VPcmlnaW4ob3JpZ2luYWxBcHBJbmZvKX0ke29yaWdpbmFsQXBwSW5mby5pZH0vaW5mby8ke3RodW1ibmFpbH0/dG9rZW49JHtvcmlnaW5hbEFwcFNlc3Npb24/LnRva2VufWBcbiAgICBjb25zdCBkZXZUaHVtYm5haWxVcmwgPSBgJHtnZXRSZXNvdXJjZU9yaWdpbihvcmlnaW5hbEFwcEluZm8pfSR7b3JpZ2luYWxBcHBJbmZvLmlkfS8ke3RodW1ibmFpbH1gXG4gICAgbGV0IHRodW1ibmFpbFVybFxuICAgIGlmICh0aHVtYm5haWw/LnN0YXJ0c1dpdGgoJ2Jsb2I6JykpIHtcbiAgICAgIHRodW1ibmFpbFVybCA9IHRodW1ibmFpbFxuICAgIH0gZWxzZSBpZiAodGh1bWJuYWlsPy5pbmNsdWRlcygnaHR0cCcpKSB7XG4gICAgICB0aHVtYm5haWxVcmwgPSBgJHt0aHVtYm5haWx9P3Rva2VuPSR7b3JpZ2luYWxBcHBTZXNzaW9uPy50b2tlbn1gXG4gICAgfSBlbHNlIHtcbiAgICAgIHRodW1ibmFpbFVybCA9IGlzUG9ydGFsQXBwKG9yaWdpbmFsQXBwSW5mbykgPyBwb3J0YWxUaHVtYm5haWxVcmwgOiBkZXZUaHVtYm5haWxVcmxcbiAgICB9XG5cbiAgICByZXR1cm4gYXdhaXQgbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgY29uc3QgeGhyID0gbmV3IFhNTEh0dHBSZXF1ZXN0KClcbiAgICAgIHhoci5vcGVuKCdHRVQnLCB0aHVtYm5haWxVcmwsIHRydWUpXG4gICAgICB4aHIucmVzcG9uc2VUeXBlID0gJ2Jsb2InXG4gICAgICB4aHIub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICBjb25zdCBibG9iID0gdGhpcy5yZXNwb25zZVxuICAgICAgICAgIHJldHVybiB1cGRhdGVBcHBUaHVtYm5haWwoe1xuICAgICAgICAgICAgaWQ6IG5ld0FwcElkLFxuICAgICAgICAgICAgdGh1bWJuYWlsOiBibG9iLFxuICAgICAgICAgICAgZjogJ2pzb24nLFxuICAgICAgICAgICAgdG9rZW46IHNlc3Npb24/LnRva2VuXG4gICAgICAgICAgfSkudGhlbihcbiAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgcmVzb2x2ZSh0cnVlKVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICgpID0+IHtcbiAgICAgICAgICAgICAgcmVqZWN0KGZhbHNlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZWplY3QoZmFsc2UpXG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgeGhyLm9uZXJyb3IgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICByZWplY3QoKVxuICAgICAgfVxuICAgICAgeGhyLnNlbmQoKVxuICAgIH0pXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZSh0cnVlKVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGxvYWRSZXNvdXJjZSAoXG4gIG5ld0FwcElkLFxuICBvcmlnaW5hbEFwcEluZm86IEFwcEluZm8sXG4gIHJlc291cmNlSW5mbyxcbiAgdXBkYXRlQXBwQ29uZmlnVmVyc2lvbiA9IGZhbHNlXG4pOiBQcm9taXNlPGJvb2xlYW4+IHtcbiAgY29uc3Qgb3JpZ2luYWxBcHBTZXNzaW9uID0gZ2V0U2Vzc2lvbihvcmlnaW5hbEFwcEluZm8pXG4gIGNvbnN0IHRva2VuID0gaXNQb3J0YWxBcHAob3JpZ2luYWxBcHBJbmZvKSA/IGA/dG9rZW49JHtvcmlnaW5hbEFwcFNlc3Npb24/LnRva2VufWAgOiAnJ1xuICBjb25zdCBwb3J0YWxVcmxQcmVmaXggPSBgJHtnZXRSZXNvdXJjZU9yaWdpbihvcmlnaW5hbEFwcEluZm8pfSR7b3JpZ2luYWxBcHBJbmZvLmlkfS9yZXNvdXJjZXMvYFxuXG4gIGNvbnN0IHBvcnRhbFVybCA9IHdpbmRvdy5qaW11Q29uZmlnLmlzRGV2RWRpdGlvbiA/ICdsb2NhbGhvc3Q6JyA6IGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKS5wb3J0YWxVcmxcbiAgY29uc3Qgc2Vzc2lvbiA9IGdldFNlc3Npb24oeyBwb3J0YWxVcmw6IHBvcnRhbFVybCB9IGFzIEFwcEluZm8pXG4gIGlmIChcbiAgICByZXNvdXJjZUluZm8ucmVzb3VyY2UgPT09ICdjb25maWcvY29uZmlnLmpzb24nIHx8XG4gICAgcmVzb3VyY2VJbmZvLnJlc291cmNlID09PSAnaW1hZ2VzL2ltYWdlLXJlc291cmNlcy1saXN0Lmpzb24nXG4gICkge1xuICAgIGNvbnN0IHJlc291cmNlVXJsID0gcG9ydGFsVXJsUHJlZml4ICsgcmVzb3VyY2VJbmZvLnJlc291cmNlICsgdG9rZW5cbiAgICByZXR1cm4gYXdhaXQgZmV0Y2gocmVzb3VyY2VVcmwsIHsgY2FjaGU6ICduby1jYWNoZScgfSlcbiAgICAgIC50aGVuKGFzeW5jIHJlcyA9PiBhd2FpdCByZXMuanNvbigpKVxuICAgICAgLnRoZW4oYXN5bmMgZGF0YSA9PiB7XG4gICAgICAgIC8vIElmIGFuIGFwcCdzIGNvbmZpZy5qc29uIG9yIGltYWdlLXJlc291cmNlcy1saXN0Lmpzb24gaXMgbm90IG9idGFpbmVkIHN1Y2Nlc3NmdWxseSwgaXQgY2Fubm90IGJlIGR1cGxpY2F0ZVxuICAgICAgICBjb25zdCBpc0NvbmZpZyA9IHJlc291cmNlSW5mby5yZXNvdXJjZSA9PT0gJ2NvbmZpZy9jb25maWcuanNvbidcbiAgICAgICAgY29uc3QgbmV3QXBwRGF0YSA9IGlzQ29uZmlnID8gaW5pdEFwcENvbmZpZ1BvcnRhbFVybChkYXRhLCBvcmlnaW5hbEFwcEluZm8pIDogZGF0YVxuICAgICAgICByZXR1cm4gYXdhaXQgcmVwbGFjZUNvbmZpZ1dpdGhOZXdBcHBJRChcbiAgICAgICAgICBuZXdBcHBJZCxcbiAgICAgICAgICBvcmlnaW5hbEFwcEluZm8uaWQsXG4gICAgICAgICAgbmV3QXBwRGF0YVxuICAgICAgICApLnRoZW4oYXN5bmMgbmV3RGF0YSA9PiB7XG4gICAgICAgICAgLyoqXG4gICAgICAgICAgICogUHJveHkgaXMgY29ubmVjdGVkIHRvIGl0ZW0gaWQsIHByb3h5IGNyZWF0ZWQgaW4gaXRlbSBBIGNhbm5vdCBiZSB1c2VkIGluIGl0ZW0gQi5cbiAgICAgICAgICAgKiBTbyBkZWxldGUgYXBwIHByb3hpZXMgd2hlbiBkdXBsaWNhdGUgaXRlbXMuXG4gICAgICAgICAgICovXG4gICAgICAgICAgZGVsZXRlIG5ld0RhdGEuYXBwUHJveGllc1xuXG4gICAgICAgICAgZGVsZXRlIG5ld0RhdGEuaGlzdG9yeUxhYmVsc1xuXG4gICAgICAgICAgaWYgKGlzQ29uZmlnKSB7XG4gICAgICAgICAgICBpZiAodXBkYXRlQXBwQ29uZmlnVmVyc2lvbikge1xuICAgICAgICAgICAgICAvL1VwZGF0ZSBhcHAgdmVyc2lvbiBhbmQgd2lkZ2V0IHZlcnNpb24gdG8gY3VycmVudCBFeGJWZXJzaW9uXG4gICAgICAgICAgICAgIG5ld0RhdGEgPSByZXBsYWNlRXhiVmVyc2lvbkluQXBwQ29uZmlnKEltbXV0YWJsZShuZXdEYXRhKSk/LmFzTXV0YWJsZSh7IGRlZXA6IHRydWUgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZSgpXG4gICAgICAgICAgICBjb25zdCB1dGNUaW1lU3RhbXAgPSBkYXRlLmdldFRpbWUoKVxuICAgICAgICAgICAgbmV3RGF0YS50aW1lc3RhbXAgPSBgJHt1dGNUaW1lU3RhbXB9YFxuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IGZpbGUgPSBuZXcgQmxvYihbSlNPTi5zdHJpbmdpZnkobmV3RGF0YSldLCB7XG4gICAgICAgICAgICB0eXBlOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICB9KVxuXG4gICAgICAgICAgcmV0dXJuIGF3YWl0IGFkZEl0ZW1SZXNvdXJjZSh7XG4gICAgICAgICAgICBpZDogbmV3QXBwSWQsXG4gICAgICAgICAgICByZXNvdXJjZTogZmlsZSxcbiAgICAgICAgICAgIG5hbWU6IHJlc291cmNlSW5mby5yZXNvdXJjZS5zcGxpdCgnLycpW1xuICAgICAgICAgICAgICByZXNvdXJjZUluZm8ucmVzb3VyY2Uuc3BsaXQoJy8nKS5sZW5ndGggLSAxXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgIHJlc291cmNlc1ByZWZpeDogcmVzb3VyY2VJbmZvLnJlc291cmNlXG4gICAgICAgICAgICAgICAgLnNwbGl0KCcvJylcbiAgICAgICAgICAgICAgICAuc2xpY2UoMCwgcmVzb3VyY2VJbmZvLnJlc291cmNlLnNwbGl0KCcvJykubGVuZ3RoIC0gMSlcbiAgICAgICAgICAgICAgICAuam9pbignLycpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYXV0aGVudGljYXRpb246IHNlc3Npb25cbiAgICAgICAgICB9KS50aGVuKFxuICAgICAgICAgICAgYXN5bmMgKCkgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKHRydWUpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYXN5bmMgZXJyb3IgPT4ge1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKGVycm9yKVxuICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZWplY3QoZXJyb3IpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgKVxuICAgICAgICB9KVxuICAgICAgfSlcbiAgICAgIC5jYXRjaChhc3luYyBlcnJvciA9PiB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpXG4gICAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlamVjdChlcnJvcilcbiAgICAgIH0pXG4gIH0gZWxzZSB7XG4gICAgY29uc3QgcmVzb3VyY2VVcmwgPSBwb3J0YWxVcmxQcmVmaXggKyByZXNvdXJjZUluZm8ucmVzb3VyY2UgKyB0b2tlblxuXG4gICAgcmV0dXJuIGF3YWl0IG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgIGNvbnN0IHhociA9IG5ldyBYTUxIdHRwUmVxdWVzdCgpXG4gICAgICB4aHIub3BlbignR0VUJywgcmVzb3VyY2VVcmwsIHRydWUpXG4gICAgICB4aHIucmVzcG9uc2VUeXBlID0gJ2Jsb2InXG4gICAgICB4aHIub25sb2FkID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgaWYgKHRoaXMuc3RhdHVzID09PSAyMDApIHtcbiAgICAgICAgICBjb25zdCBibG9iID0gdGhpcy5yZXNwb25zZVxuXG4gICAgICAgICAgcmV0dXJuIGFkZEl0ZW1SZXNvdXJjZSh7XG4gICAgICAgICAgICBpZDogbmV3QXBwSWQsXG4gICAgICAgICAgICByZXNvdXJjZTogYmxvYixcbiAgICAgICAgICAgIG5hbWU6IHJlc291cmNlSW5mby5yZXNvdXJjZS5zcGxpdCgnLycpW1xuICAgICAgICAgICAgICByZXNvdXJjZUluZm8ucmVzb3VyY2Uuc3BsaXQoJy8nKS5sZW5ndGggLSAxXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgcGFyYW1zOiB7XG4gICAgICAgICAgICAgIHJlc291cmNlc1ByZWZpeDogcmVzb3VyY2VJbmZvLnJlc291cmNlXG4gICAgICAgICAgICAgICAgLnNwbGl0KCcvJylcbiAgICAgICAgICAgICAgICAuc2xpY2UoMCwgcmVzb3VyY2VJbmZvLnJlc291cmNlLnNwbGl0KCcvJykubGVuZ3RoIC0gMSlcbiAgICAgICAgICAgICAgICAuam9pbignLycpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgYXV0aGVudGljYXRpb246IHNlc3Npb25cbiAgICAgICAgICB9KS50aGVuKFxuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICByZXNvbHZlKHRydWUpXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgKCkgPT4ge1xuICAgICAgICAgICAgICByZXNvbHZlKGZhbHNlKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIClcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXNvbHZlKGZhbHNlKVxuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHhoci5vbmVycm9yID0gZnVuY3Rpb24gKGUpIHtcbiAgICAgICAgcmVzb2x2ZShmYWxzZSlcbiAgICAgIH1cbiAgICAgIHhoci5zZW5kKClcbiAgICB9KVxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0QXBwQ29uZmlnUG9ydGFsVXJsIChhcHBDb25maWcsIG9yaWdpbmFsQXBwSW5mbzogQXBwSW5mbykge1xuICBjb25zdCBwb3J0YWxVcmwgPSBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCkucG9ydGFsVXJsXG4gIGFwcENvbmZpZy5hdHRyaWJ1dGVzICYmIChhcHBDb25maWcuYXR0cmlidXRlcy5wb3J0YWxVcmwgPSBwb3J0YWxVcmwpXG4gIGNvbnN0IGRhdGFTb3VyY2VzID0gYXBwQ29uZmlnPy5kYXRhU291cmNlc1xuICBpZiAoZGF0YVNvdXJjZXMgJiYgaXNBR09MQXBwKG9yaWdpbmFsQXBwSW5mbykpIHtcbiAgICBmb3IgKGNvbnN0IGtleSBpbiBkYXRhU291cmNlcykge1xuICAgICAgY29uc3QgZGF0YVNvdXJjZXNQb3J0YWxVcmwgPSBkYXRhU291cmNlc1trZXldPy5wb3J0YWxVcmxcbiAgICAgIGlmIChpc1VwZGF0ZURhdGFTb3VyY2VzUG9ydGFsVXJsKGRhdGFTb3VyY2VzUG9ydGFsVXJsKSkge1xuICAgICAgICBkYXRhU291cmNlc1trZXldLnBvcnRhbFVybCA9IHBvcnRhbFVybFxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gYXBwQ29uZmlnXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1VwZGF0ZURhdGFTb3VyY2VzUG9ydGFsVXJsIChkYXRhU291cmNlc1BvcnRhbFVybDogc3RyaW5nKTogYm9vbGVhbiB7XG4gIGxldCBpc0NhblVwZGF0ZSA9IGZhbHNlXG4gIGNvbnN0IHBvcnRhbFVybCA9IGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKS5wb3J0YWxVcmxcbiAgaWYgKFxuICAgIGlzU2FtZVBvcnRhbChwb3J0YWxVcmwsIGRhdGFTb3VyY2VzUG9ydGFsVXJsLCAnbWFwc2RldmV4dC5hcmNnaXMuY29tJykgfHxcbiAgICBpc1NhbWVQb3J0YWwocG9ydGFsVXJsLCBkYXRhU291cmNlc1BvcnRhbFVybCwgJ21hcHNxYS5hcmNnaXMuY29tJykgfHxcbiAgICBpc1NhbWVQb3J0YWwocG9ydGFsVXJsLCBkYXRhU291cmNlc1BvcnRhbFVybCwgJ21hcHMuYXJjZ2lzLmNvbScpXG4gICkge1xuICAgIGlzQ2FuVXBkYXRlID0gdHJ1ZVxuICB9XG4gIHJldHVybiBpc0NhblVwZGF0ZVxufVxuXG5mdW5jdGlvbiBpc1NhbWVQb3J0YWwgKFxuICBwb3J0YWxVcmw6IHN0cmluZyxcbiAgZGF0YVNvdXJjZXNQb3J0YWxVcmw6IHN0cmluZyxcbiAgdXJsRW5kU3RyaW5nOiBzdHJpbmdcbik6IGJvb2xlYW4ge1xuICBjb25zdCBpc1NhbWVQb3J0YWwgPVxuICAgIChwb3J0YWxVcmw/LmVuZHNXaXRoKHVybEVuZFN0cmluZykgfHxcbiAgICAgIHBvcnRhbFVybD8uZW5kc1dpdGgoYCR7dXJsRW5kU3RyaW5nfS9gKSkgJiZcbiAgICAoZGF0YVNvdXJjZXNQb3J0YWxVcmw/LmVuZHNXaXRoKHVybEVuZFN0cmluZykgfHxcbiAgICAgIGRhdGFTb3VyY2VzUG9ydGFsVXJsPy5lbmRzV2l0aChgJHt1cmxFbmRTdHJpbmd9L2ApKVxuICByZXR1cm4gaXNTYW1lUG9ydGFsXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmF0ZUFwcEJ5QXBwIChcbiAgYXBwSW5mbzogQXBwSW5mbyxcbiAgaXNDcmVhdGVUZW1wbGF0ZT86IGJvb2xlYW4sXG4gIGZvbGRlcklkPzogc3RyaW5nXG4pOiBQcm9taXNlPHN0cmluZz4ge1xuICByZXR1cm4gYXdhaXQgZ2V0QXBwSW5mbyhhcHBJbmZvKS50aGVuKFxuICAgIGFzeW5jIGFwcEl0ZW0gPT4ge1xuICAgICAgaWYgKGFwcEl0ZW0pIHtcbiAgICAgICAgY29uc3QgdHlwZSA9IGlzQ3JlYXRlVGVtcGxhdGVcbiAgICAgICAgICA/IEFwcFR5cGUuVGVtcGxhdGVUeXBlXG4gICAgICAgICAgOiBBcHBUeXBlLkV4cGVyaWVuY2VUeXBlXG4gICAgICAgIHJldHVybiBhd2FpdCBnZXROZXdBcHBUaXRsZVdpdGhJbmRleChhcHBJdGVtLnRpdGxlKS50aGVuKGFzeW5jIG5ld1RpdGxlID0+IHtcbiAgICAgICAgICBpZiAobmV3VGl0bGUpIHtcbiAgICAgICAgICAgIGNvbnN0IGR1cGxpY2F0ZUFwcEluZm8gPSB7XG4gICAgICAgICAgICAgIG5hbWU6IG5ld1RpdGxlLFxuICAgICAgICAgICAgICB0YWdzOiBhcHBJdGVtLnRhZ3MsXG4gICAgICAgICAgICAgIHRodW1ibmFpbDogYXBwSXRlbS50aHVtYm5haWwsXG4gICAgICAgICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgICAgICAgIHR5cGVLZXl3b3JkczogYXBwSW5mbz8udHlwZUtleXdvcmRzXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYXdhaXQgY3JlYXRlQXBwRm9yRHVwbGljYXRlKGR1cGxpY2F0ZUFwcEluZm8gYXMgYW55LCBmb2xkZXJJZCkudGhlbihcbiAgICAgICAgICAgICAgYXN5bmMgbmV3QXBwSXRlbSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKG5ld0FwcEl0ZW0pIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCBkdXBsaWNhdGVSZWxhdGVkRGF0YUluQXBwKFxuICAgICAgICAgICAgICAgICAgICBuZXdBcHBJdGVtLmlkLFxuICAgICAgICAgICAgICAgICAgICBhcHBJbmZvLFxuICAgICAgICAgICAgICAgICAgICAhaXNDcmVhdGVUZW1wbGF0ZVxuICAgICAgICAgICAgICAgICAgKS50aGVuKFxuICAgICAgICAgICAgICAgICAgICBhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVzb2x2ZShuZXdBcHBJdGVtLmlkKVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBhc3luYyBlcnJvciA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcilcbiAgICAgICAgICAgICAgICAgICAgICBkZWxldGVBcHAobmV3QXBwSXRlbS5pZClcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZWplY3QoZXJyb3IpXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVqZWN0KG51bGwpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICApXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlamVjdChudWxsKVxuICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlamVjdChudWxsKVxuICAgICAgfVxuICAgIH1cbiAgKVxufVxuXG5leHBvcnQgZnVuY3Rpb24gaW5pdER1cGxpY2F0ZWRUeXBlS2V5d29yZHMgKHR5cGVLZXl3b3Jkcz86IHN0cmluZ1tdKSB7XG4gIGNvbnN0IGl0ZW1WZXJzaW9uID0gYHZlcnNpb246JHt2ZXJzaW9ufWBcbiAgaWYgKCF0eXBlS2V5d29yZHMgfHwgdHlwZUtleXdvcmRzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybiBbXG4gICAgICAnRVhCIEV4cGVyaWVuY2UnLFxuICAgICAgJ1JlYWR5IFRvIFVzZScsXG4gICAgICAnSmF2YVNjcmlwdCcsXG4gICAgICAnc3RhdHVzOiBEcmFmdCcsXG4gICAgICBpdGVtVmVyc2lvblxuICAgIF1cbiAgfVxuICBsZXQgaXNIYXNTdGF0dXMgPSBmYWxzZVxuICBsZXQgaXNIYXNWZXJzaW9uID0gZmFsc2VcbiAgY29uc3QgbmV3VHlwZUtleXdvcmRzID0gdHlwZUtleXdvcmRzLm1hcChlbCA9PiB7XG4gICAgaWYgKGVsLmluY2x1ZGVzKCd2ZXJzaW9uOicpKSB7XG4gICAgICBpc0hhc1ZlcnNpb24gPSB0cnVlXG4gICAgfVxuICAgIGlmICghZWwuaW5jbHVkZXMoJ3N0YXR1czonKSkge1xuICAgICAgcmV0dXJuIGVsXG4gICAgfSBlbHNlIHtcbiAgICAgIGlzSGFzU3RhdHVzID0gdHJ1ZVxuICAgICAgcmV0dXJuICdzdGF0dXM6IERyYWZ0J1xuICAgIH1cbiAgfSlcbiAgIWlzSGFzU3RhdHVzICYmIG5ld1R5cGVLZXl3b3Jkcy5wdXNoKCdzdGF0dXM6IERyYWZ0JylcbiAgIWlzSGFzVmVyc2lvbiAmJiBuZXdUeXBlS2V5d29yZHMucHVzaChpdGVtVmVyc2lvbilcbiAgcmV0dXJuIG5ld1R5cGVLZXl3b3Jkc1xufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0TWF4SW5kZXggKGFwcExpc3Q6IGFueVtdLCBuYW1lOiBzdHJpbmcpOiBudW1iZXIge1xuICBjb25zdCBpbmRleERhdGEgPSBbXVxuICBjb25zdCByZWcgPSAvXltcXGRdKyQvXG4gIGFwcExpc3QuZm9yRWFjaChlbCA9PiB7XG4gICAgY29uc3QgaW5kZXggPSBlbC50aXRsZT8uc3BsaXQoYCR7bmFtZX0gYClbMV0/LnNwbGl0KCcgJylbMF1cbiAgICBpZiAocmVnLnRlc3QoaW5kZXgpKSB7XG4gICAgICBpbmRleERhdGEucHVzaChOdW1iZXIoaW5kZXgpKVxuICAgIH1cbiAgfSlcbiAgaW5kZXhEYXRhLnNvcnQoZnVuY3Rpb24gKGEsIGIpIHtcbiAgICByZXR1cm4gYSA8IGIgPyAxIDogLTFcbiAgfSlcbiAgcmV0dXJuIGluZGV4RGF0YVswXSB8fCAxXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRBcHBOYW1lIChcbiAgbmFtZTogc3RyaW5nLFxuICBhcHBMaXN0OiBhbnlbXSxcbiAgaW5kZXg6IG51bWJlciA9IDEsXG4gIGlzQ29weTogYm9vbGVhbiA9IGZhbHNlXG4pOiBzdHJpbmcge1xuICBjb25zdCBhcHBOYW1lID0gaW5kZXggPT09IDEgJiYgaXNDb3B5ID8gbmFtZSA6IGAke25hbWV9ICR7aW5kZXh9YFxuICBpZiAoIWlzQXBwTmFtZVJlcGVhdChhcHBOYW1lLCBhcHBMaXN0KSkge1xuICAgIHJldHVybiBhcHBOYW1lXG4gIH1cbiAgY29uc3QgX2luZGV4ID0gaW5kZXggKyAxXG4gIHJldHVybiBnZXRBcHBOYW1lKG5hbWUsIGFwcExpc3QsIF9pbmRleClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzQXBwTmFtZVJlcGVhdCAobmFtZTogc3RyaW5nLCBhcHBMaXN0OiBhbnlbXSk6IGJvb2xlYW4ge1xuICBsZXQgaXNIYXNOYW1lID0gZmFsc2VcbiAgYXBwTGlzdC5mb3JFYWNoKGVsID0+IHtcbiAgICBpZiAobmFtZSA9PT0gZWwudGl0bGUpIHtcbiAgICAgIGlzSGFzTmFtZSA9IHRydWVcbiAgICB9XG4gIH0pXG4gIHJldHVybiBpc0hhc05hbWVcbn1cblxuYXN5bmMgZnVuY3Rpb24gcmVwbGFjZUNvbmZpZ1dpdGhOZXdBcHBJRCAoXG4gIG5ld0FwcElkLFxuICBvcmlnaW5hbEFwcElkLFxuICBjb25maWdcbik6IFByb21pc2U8QXBwQ29uZmlnPiB7XG4gIGNvbnN0IHBvcnRhbFVybFByZWZpeCA9IGdldFJlc291cmNlT3JpZ2luKG9yaWdpbmFsQXBwSWQpICsgb3JpZ2luYWxBcHBJZCArICcvcmVzb3VyY2VzLydcblxuICBjb25zdCBpc1BvcnRhbFJlc291cmNlRXhwID0gbmV3IFJlZ0V4cCgnXicgKyBwb3J0YWxVcmxQcmVmaXgpXG4gIGZ1bmN0aW9uIGlzUG9ydGFsUmVzb3VyY2VzICh2YWx1ZSkge1xuICAgIHJldHVybiBpc1BvcnRhbFJlc291cmNlRXhwLnRlc3QodmFsdWUpXG4gIH1cblxuICBmdW5jdGlvbiBtYXRjaEhhbmRsZSAodmFsdWUpIHtcbiAgICBjb25zdCBuZXdWYWx1ZSA9IHZhbHVlLnJlcGxhY2UoXG4gICAgICAnLycgKyBvcmlnaW5hbEFwcElkICsgJy8nLFxuICAgICAgJy8nICsgbmV3QXBwSWQgKyAnLydcbiAgICApXG4gICAgcmV0dXJuIG5ld1ZhbHVlXG4gIH1cblxuICBjb25zdCByZXBsYWNlT3BlcmF0b3IgPSB7XG4gICAgbWF0Y2hlcjogaXNQb3J0YWxSZXNvdXJjZXMsXG4gICAgaGFuZGxlcjogbWF0Y2hIYW5kbGVcbiAgfVxuXG4gIHJldHVybiBQcm9taXNlLnJlc29sdmUodXRpbHMucmVwbGFjZVN0cmluZ0luT2JqZWN0KGNvbmZpZywgcmVwbGFjZU9wZXJhdG9yKSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUFwcENhbGxCYWNrIChcbiAgZGVmYXVsdEFwcENvbmZpZ3M6IEFwcENvbmZpZyxcbiAgaXRlbTogSUNyZWF0ZUl0ZW1SZXNwb25zZSxcbiAgd2VibWFwSWQ/OiBzdHJpbmcsXG4gIHdlYnNjZW5lSWQ/OiBzdHJpbmdcbik6IFByb21pc2U8QXBwSW5mbz4ge1xuICBjb25zdCBBcHBSZXNvdXJjZU1hbmFnZXIgPSBtb2R1bGVMb2FkZXIuZ2V0TW9kdWxlU3luYygnamltdS1mb3ItYnVpbGRlcicpXG4gICAgLkFwcFJlc291cmNlTWFuYWdlclxuICBjb25zdCBhcHBSZXNvdXJjZU1hbmFnZXJJbnN0YW5jZSA9IEFwcFJlc291cmNlTWFuYWdlci5nZXRJbnN0YW5jZSgpXG5cbiAgY29uc3QgaXRlbUlkID0gaXRlbS5pZFxuICBsZXQgZGVmYXVsdEFwcENvbmZpZyA9IHV0aWxzLnJlcGxhY2VJMThuUGxhY2Vob2xkZXJzSW5PYmplY3QoXG4gICAgZGVmYXVsdEFwcENvbmZpZ3MsXG4gICAgaTE4bi5nZXRJbnRsKCksXG4gICAgZGVmYXVsdE1lc3NhZ2VzXG4gIClcbiAgZGVmYXVsdEFwcENvbmZpZyA9IGluaXRBcHBDb25maWcoZGVmYXVsdEFwcENvbmZpZylcbiAgYXBwQ29uZmlnVXRpbHMuYWRkV2VibWFwT3JXZWJzY2VuZVRvQXBwQ29uZmlnKGRlZmF1bHRBcHBDb25maWcsIHdlYm1hcElkLCB3ZWJzY2VuZUlkKVxuXG4gIHJldHVybiBhcHBSZXNvdXJjZU1hbmFnZXJJbnN0YW5jZVxuICAgIC51cExvYWRBcHBDb25maWcoaXRlbUlkLnRvU3RyaW5nKCksIGRlZmF1bHRBcHBDb25maWcpXG4gICAgLnRoZW4oYXN5bmMgKCkgPT4ge1xuICAgICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVzb2x2ZShpdGVtKVxuICAgIH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVBcHBGb3JEdXBsaWNhdGUgKFxuICBhcHBJbmZvOiBBcHBDcmVhdGlvbkluZm8sXG4gIGZvbGRlcklkPzogc3RyaW5nXG4pOiBQcm9taXNlPElDcmVhdGVJdGVtUmVzcG9uc2U+IHtcbiAgY29uc3QgaXRlbUluZm8gPSB7XG4gICAgdGl0bGU6IGFwcEluZm8ubmFtZSxcbiAgICB0eXBlOiBhcHBJbmZvLnR5cGUgfHwgJ1dlYiBFeHBlcmllbmNlJyxcbiAgICB0eXBlS2V5d29yZHM6IGluaXREdXBsaWNhdGVkVHlwZUtleXdvcmRzKGFwcEluZm8/LnR5cGVLZXl3b3JkcyksXG4gICAgc25pcHBldDogYXBwSW5mbz8uc25pcHBldCB8fCAnJyxcbiAgICBkZXNjcmlwdGlvbjogYXBwSW5mbz8uZGVzY3JpcHRpb24gfHwgJycsXG4gICAgdGFnczogYXBwSW5mby50YWdzLFxuICAgIHRodW1ibmFpbDogKGFwcEluZm8gYXMgYW55KS50aHVtYm5haWxcbiAgICAvLyB0aHVtYm5haWxVcmw6YXBwSW5mby50aHVtYm5haWxVcmxcbiAgfVxuICByZXR1cm4gYXdhaXQgY3JlYXRlQXBwKGl0ZW1JbmZvLCBmb2xkZXJJZClcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFByZXZpZXdVcmwgKGFwcEluZm86IEFwcEluZm8pIHtcbiAgY29uc3QgeyB0eXBlLCBpZCB9ID0gYXBwSW5mb1xuICBjb25zdCB7IGlzRGV2RWRpdGlvbiwgaXNJblBvcnRhbCwgaG9zdEVudiB9ID0gd2luZG93LmppbXVDb25maWdcbiAgY29uc3QgaXNUZW1wbGF0ZSA9IHR5cGUgPT09IEFwcFR5cGUuVGVtcGxhdGVUeXBlXG4gIGNvbnN0IGlzQXJjR2lzT25saW5lQXBwID0gIWlzRGV2RWRpdGlvbiAmJiAhaXNJblBvcnRhbFxuICBpZiAoaXNEZXZFZGl0aW9uKSB7IHJldHVybiBudWxsIH1cbiAgbGV0IHByZXZpZXdVcmwgPSB1cmxVdGlscy5nZXRBcHBVcmwoeyBhcHBJZDogaWQsIGlzVGVtcGxhdGU6IGlzVGVtcGxhdGUgfSlcbiAgaWYgKGlzQXJjR2lzT25saW5lQXBwKSB7XG4gICAgc3dpdGNoIChob3N0RW52KSB7XG4gICAgICBjYXNlICdwcm9kJzpcbiAgICAgICAgcHJldmlld1VybCA9IGBodHRwczovL2V4cGVyaWVuY2UuYXJjZ2lzLmNvbSR7cHJldmlld1VybH1gXG4gICAgICAgIGJyZWFrXG4gICAgICBjYXNlICdkZXYnOlxuICAgICAgICBwcmV2aWV3VXJsID0gYGh0dHBzOi8vZXhwZXJpZW5jZWRldi5hcmNnaXMuY29tJHtwcmV2aWV3VXJsfWBcbiAgICAgICAgYnJlYWtcbiAgICAgIGNhc2UgJ3FhJzpcbiAgICAgICAgcHJldmlld1VybCA9IGBodHRwczovL2V4cGVyaWVuY2VxYS5hcmNnaXMuY29tJHtwcmV2aWV3VXJsfWBcbiAgICAgICAgYnJlYWtcbiAgICB9XG4gIH1cbiAgaWYgKGlzSW5Qb3J0YWwpIHtcbiAgICBwcmV2aWV3VXJsID0gYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0ke3ByZXZpZXdVcmx9YFxuICB9XG4gIHJldHVybiBwcmV2aWV3VXJsXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBcHBDb25maWdJblJlc291cmNlcyAoYXBwSWQ6IHN0cmluZyk6IFByb21pc2U8QXBwQ29uZmlnPiB7XG4gIGNvbnN0IHNlc3Npb25NYW5hZ2VyID0gU2Vzc2lvbk1hbmFnZXIuZ2V0SW5zdGFuY2UoKVxuICBjb25zdCB0aW1lc3RhbXAgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKVxuICBpZiAod2luZG93LmppbXVDb25maWcuaXNEZXZFZGl0aW9uKSB7XG4gICAgcmV0dXJuIGF3YWl0IHdpbmRvdy5mZXRjaChgL2FwcHMvJHthcHBJZH0vcmVzb3VyY2VzL2NvbmZpZy9jb25maWcuanNvbmApLnRoZW4oYXN5bmMgcmVzID0+IGF3YWl0IHJlcy5qc29uKCkpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGF3YWl0IHJlcXVlc3QoYCR7cG9ydGFsVXJsVXRpbHMuZ2V0UG9ydGFsUmVzdFVybChnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCkucG9ydGFsVXJsKX0vY29udGVudC9pdGVtcy8ke2FwcElkfS9yZXNvdXJjZXMvY29uZmlnL2NvbmZpZy5qc29uYCwge1xuICAgICAgYXV0aGVudGljYXRpb246IHNlc3Npb25NYW5hZ2VyLmdldFNlc3Npb25CeVVybChnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCkucG9ydGFsVXJsKSxcbiAgICAgIGh0dHBNZXRob2Q6ICdHRVQnLFxuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIHRpbWVzdGFtcDogdGltZXN0YW1wXG4gICAgICB9XG4gICAgfSkuY2F0Y2goYXN5bmMgZXJyID0+IHtcbiAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChlcnIpXG4gICAgfSlcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q3JlYXRlQXBwUGFyYW1zQnlBcHBJZCAodGVtcGxhdGVJZDogc3RyaW5nKTogUHJvbWlzZTxBcHBJbmZvPiB7XG4gIHJldHVybiBhd2FpdCBjaGVja0lzUG9ydGFsQXBwKHRlbXBsYXRlSWQpLnRoZW4oYXN5bmMgcG9ydGFsQXBwSW5mbyA9PiB7XG4gICAgLy8gQ2hlY2sgaXMgcG9ydGFsIGFwcFxuICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlc29sdmUocG9ydGFsQXBwSW5mbylcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gIH0pLmNhdGNoKGFzeW5jIGVyciA9PiB7XG4gICAgLy8gQ2hlY2sgaXMgQUdPTCBhcHBcbiAgICByZXR1cm4gYXdhaXQgY2hlY2tJc0FHT0xBcHAodGVtcGxhdGVJZCkudGhlbihhc3luYyBBR09MQXBwSW5mbyA9PiB7XG4gICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKEFHT0xBcHBJbmZvKVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgIH0pLmNhdGNoKGFzeW5jIGVyciA9PiB7XG4gICAgICAvLyBDaGVjayBpcyBsb2NhbCBhcHBcbiAgICAgIHJldHVybiBhd2FpdCBjaGVja0lzTG9jYWxBcHAodGVtcGxhdGVJZClcbiAgICB9KVxuICB9KVxufVxuXG5hc3luYyBmdW5jdGlvbiBjaGVja0lzUG9ydGFsQXBwICh0ZW1wbGF0ZUlkOiBzdHJpbmcpOiBQcm9taXNlPEFwcEluZm8+IHtcbiAgY29uc3QgcG9ydGFsVXJsID0gZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpLnBvcnRhbFVybFxuICBjb25zdCBnZXRBcHBJbmZvUGFyYW1zID0ge1xuICAgIGlkOiB0ZW1wbGF0ZUlkLFxuICAgIHBvcnRhbFVybDogcG9ydGFsVXJsLFxuICAgIGlzTG9jYWxBcHA6IGZhbHNlXG4gIH0gYXMgQXBwSW5mb1xuICByZXR1cm4gYXdhaXQgZ2V0QXBwSW5mbyhnZXRBcHBJbmZvUGFyYW1zKS50aGVuKGFzeW5jIGFwcEluZm8gPT4ge1xuICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlc29sdmUoZ2V0QXBwSW5mb1BhcmFtcylcbiAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gIH0pLmNhdGNoKGFzeW5jIGVyciA9PiB7XG4gICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVqZWN0KCdJdGVtIGRvZXMgbm90IGV4aXN0IG9yIGlzIGluYWNjZXNzaWJsZS4nKVxuICB9KVxufVxuXG5hc3luYyBmdW5jdGlvbiBjaGVja0lzTG9jYWxBcHAgKHRlbXBsYXRlSWQ6IHN0cmluZyk6IFByb21pc2U8QXBwSW5mbz4ge1xuICBpZiAoIXdpbmRvdy5qaW11Q29uZmlnLmlzRGV2RWRpdGlvbikge1xuICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlamVjdCgnSXRlbSBkb2VzIG5vdCBleGlzdCBvciBpcyBpbmFjY2Vzc2libGUuJylcbiAgfSBlbHNlIHtcbiAgICBjb25zdCBwb3J0YWxVcmwgPSBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCkucG9ydGFsVXJsXG4gICAgY29uc3QgZ2V0QXBwSW5mb1BhcmFtcyA9IHtcbiAgICAgIGlkOiB0ZW1wbGF0ZUlkLFxuICAgICAgcG9ydGFsVXJsOiBwb3J0YWxVcmwsXG4gICAgICBpc0xvY2FsQXBwOiB0cnVlXG4gICAgfSBhcyBBcHBJbmZvXG4gICAgcmV0dXJuIGF3YWl0IGdldEFwcEluZm8oZ2V0QXBwSW5mb1BhcmFtcykudGhlbihhc3luYyBsb2NhbEFwcEluZm8gPT4ge1xuICAgICAgaWYgKCFsb2NhbEFwcEluZm8/LnN1Y2Nlc3MpIHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVqZWN0KCdJdGVtIGRvZXMgbm90IGV4aXN0IG9yIGlzIGluYWNjZXNzaWJsZS4nKVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVzb2x2ZShnZXRBcHBJbmZvUGFyYW1zKVxuICAgICAgfVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgIH0pLmNhdGNoKGFzeW5jIGVyciA9PiB7XG4gICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZWplY3QoJ0l0ZW0gZG9lcyBub3QgZXhpc3Qgb3IgaXMgaW5hY2Nlc3NpYmxlLicpXG4gICAgfSlcbiAgfVxufVxuXG5hc3luYyBmdW5jdGlvbiBjaGVja0lzQUdPTEFwcCAodGVtcGxhdGVJZDogc3RyaW5nKTogUHJvbWlzZTxBcHBJbmZvPiB7XG4gIGNvbnN0IHBvcnRhbFVybCA9IGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKS5wb3J0YWxVcmxcbiAgaWYgKHBvcnRhbFVybFV0aWxzLmlzQUdPTERvbWFpbihwb3J0YWxVcmwpKSB7XG4gICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVqZWN0KGZhbHNlKVxuICB9XG4gIGNvbnN0IGdldEFwcEluZm9QYXJhbXMgPSB7XG4gICAgaWQ6IHRlbXBsYXRlSWQsXG4gICAgcG9ydGFsVXJsOiAnaHR0cHM6Ly9tYXBzLmFyY2dpcy5jb20nLFxuICAgIGlzTG9jYWxBcHA6IGZhbHNlXG4gIH0gYXMgQXBwSW5mb1xuICByZXR1cm4gYXdhaXQgZ2V0QXBwSW5mbyhnZXRBcHBJbmZvUGFyYW1zKS50aGVuKGFzeW5jIGxvY2FsQXBwSW5mbyA9PiB7XG4gICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVzb2x2ZShnZXRBcHBJbmZvUGFyYW1zKVxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmVcbiAgfSkuY2F0Y2goYXN5bmMgZXJyID0+IHtcbiAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZWplY3QoJ0l0ZW0gZG9lcyBub3QgZXhpc3Qgb3IgaXMgaW5hY2Nlc3NpYmxlLicpXG4gIH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRDb25maWdGcm9tUG9ydGFsSXRlbVJlc291cmNlIChhcHBJRDogc3RyaW5nKTogUHJvbWlzZTxBcHBDb25maWc+IHtcbiAgY29uc3Qgc2Vzc2lvbk1hbmFnZXIgPSBTZXNzaW9uTWFuYWdlci5nZXRJbnN0YW5jZSgpXG4gIGNvbnN0IHRpbWVzdGFtcCA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpXG4gIHJldHVybiBhd2FpdCByZXF1ZXN0KGAke3BvcnRhbFVybFV0aWxzLmdldFBvcnRhbFJlc3RVcmwoZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpLnBvcnRhbFVybCl9L2NvbnRlbnQvaXRlbXMvJHthcHBJRH0vcmVzb3VyY2VzL2NvbmZpZy9jb25maWcuanNvbmAsIHtcbiAgICBhdXRoZW50aWNhdGlvbjogc2Vzc2lvbk1hbmFnZXIuZ2V0U2Vzc2lvbkJ5VXJsKGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKS5wb3J0YWxVcmwpLFxuICAgIGh0dHBNZXRob2Q6ICdHRVQnLFxuICAgIHBhcmFtczoge1xuICAgICAgdGltZXN0YW1wOiB0aW1lc3RhbXBcbiAgICB9XG4gIH0pLmNhdGNoKGFzeW5jIGVyciA9PiB7XG4gICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVqZWN0KG51bGwpXG4gIH0pXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSZXNvdXJjZU9yaWdpbiAoXG4gIG9yaWdpbmFsQXBwSW5mbzogQXBwSW5mb1xuKTogc3RyaW5nIHtcbiAgY29uc3QgcG9ydGFsVXJsID0gaXNBR09MQXBwKG9yaWdpbmFsQXBwSW5mbykgPyB1cmxVdGlscy5nZXRBcmNnaXNPbmxpbmVVcmwoKSA6IGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKS5wb3J0YWxVcmxcbiAgY29uc3QgaXNMb2NhbEFwcFJlc291cmNlT3JpZ2luID0gb3JpZ2luYWxBcHBJbmZvPy5pc0xvY2FsQXBwXG4gIGlmIChpc0xvY2FsQXBwUmVzb3VyY2VPcmlnaW4pIHtcbiAgICAvLyBsb2NhbCBhcHBgcyByZXNvdXJjZSBvcmlnaW4gaW4gZGV2RWR0aW9uXG4gICAgcmV0dXJuIGxvY2FsUmVzdFNlcnZpY2UuZ2V0T3JpZ2luVXJsKCkgKyAnL2FwcHMvJ1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAoXG4gICAgICBwb3J0YWxVcmxVdGlscy5nZXRQbGF0Zm9ybVVybEJ5T3JnVXJsKHBvcnRhbFVybCkgK1xuICAgICAgJy9zaGFyaW5nL3Jlc3QvY29udGVudC9pdGVtcy8nXG4gICAgKVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVBcHAgKGFwcEluZm86IElJdGVtQWRkLCBmb2xkZXJJZD86IHN0cmluZykge1xuICBpZiAoZm9sZGVySWQpIHtcbiAgICByZXR1cm4gYXdhaXQgY3JlYXRlQXBwSW5Gb2xkZXIoe1xuICAgICAgaXRlbTogYXBwSW5mbyxcbiAgICAgIGZvbGRlcklkOiBmb2xkZXJJZCxcbiAgICAgIGF1dGhlbnRpY2F0aW9uOiBTZXNzaW9uTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldE1haW5TZXNzaW9uKClcbiAgICB9KVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBhd2FpdCBjcmVhdGVJdGVtKHtcbiAgICAgIGl0ZW06IGFwcEluZm8sXG4gICAgICBhdXRoZW50aWNhdGlvbjogU2Vzc2lvbk1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXRNYWluU2Vzc2lvbigpXG4gICAgfSlcbiAgfVxufVxuXG5mdW5jdGlvbiBpbml0QXBwQ29uZmlnIChhcHBDb25maWc6IEFwcENvbmZpZykge1xuICBpZiAoIWFwcENvbmZpZy5hdHRyaWJ1dGVzKSB7XG4gICAgYXBwQ29uZmlnLmF0dHJpYnV0ZXMgPSB7fSBhcyBhbnlcbiAgfVxuICBpZiAoIWFwcENvbmZpZy53aWRnZXRzKSB7XG4gICAgYXBwQ29uZmlnLndpZGdldHMgPSB7fSBhcyBhbnlcbiAgfVxuICBpZiAoIWFwcENvbmZpZy53aWRnZXRzTWFuaWZlc3QpIHtcbiAgICBhcHBDb25maWcud2lkZ2V0c01hbmlmZXN0ID0ge30gYXMgYW55XG4gIH1cbiAgaWYgKCFhcHBDb25maWcudmlld3MpIHtcbiAgICBhcHBDb25maWcudmlld3MgPSB7fSBhcyBhbnlcbiAgfVxuICBpZiAoIWFwcENvbmZpZy5zZWN0aW9ucykge1xuICAgIGFwcENvbmZpZy5zZWN0aW9ucyA9IHt9IGFzIGFueVxuICB9XG4gIGlmICghYXBwQ29uZmlnLmRpYWxvZ3MpIHtcbiAgICBhcHBDb25maWcuZGlhbG9ncyA9IHt9IGFzIGFueVxuICB9XG4gIGlmICghYXBwQ29uZmlnLnBhZ2VzKSB7XG4gICAgYXBwQ29uZmlnLnBhZ2VzID0ge30gYXMgYW55XG4gIH1cbiAgaWYgKCFhcHBDb25maWcubGF5b3V0cykge1xuICAgIGFwcENvbmZpZy5sYXlvdXRzID0ge30gYXMgYW55XG4gIH1cbiAgaWYgKCFhcHBDb25maWcuZGF0YVNvdXJjZXMpIHtcbiAgICBhcHBDb25maWcuZGF0YVNvdXJjZXMgPSB7fSBhcyBhbnlcbiAgfVxuICBpZiAoIWFwcENvbmZpZy5tZXNzYWdlQ29uZmlncykge1xuICAgIGFwcENvbmZpZy5tZXNzYWdlQ29uZmlncyA9IHt9IGFzIGFueVxuICB9XG5cbiAgcmV0dXJuIGFwcENvbmZpZ1xufVxuXG5leHBvcnQgZnVuY3Rpb24gb3B0aW1pemVXaWRnZXRzQ29uZmlnIChhcHBDb25maWc6IEFwcENvbmZpZywgYXBwSW5mbzogQXBwSW5mbyk6IEFwcENvbmZpZyB7XG4gIE9iamVjdC52YWx1ZXMoYXBwQ29uZmlnLndpZGdldHMpLmZvckVhY2goKGpzb24pID0+IHtcbiAgICBpZiAoanNvbi51cmkgPT09ICd3aWRnZXRzL2NvbW1vbi90ZXh0LycpIHtcbiAgICAgIG9wdGltaXplVGV4dFdpZGdldENvbmZpZyhqc29uLmNvbmZpZywgYXBwSW5mbylcbiAgICB9XG4gIH0pXG4gIHJldHVybiBhcHBDb25maWdcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIG9wdGltaXplVGV4dFdpZGdldENvbmZpZyAoY29uZmlnOiB7IHRleHQ6IHN0cmluZywgcGxhY2Vob2xkZXI/OiBzdHJpbmcgfSwgYXBwSW5mbzogQXBwSW5mbykge1xuICBjb25zdCBpc1RlbXBsYXRlID0gYXBwSW5mby50eXBlID09PSBBcHBUeXBlLlRlbXBsYXRlVHlwZVxuICAvL0RvIG5vdCByZW1vdmUgcGxhY2Vob2xkZXIgZm9yIHRlbXBsYXRlIHR5cGUgYXBwXG4gIGlmIChpc1RlbXBsYXRlKSByZXR1cm4gY29uZmlnXG4gIC8vUGxhY2Vob2xkZXIgYXJlIHVzZWxlc3MgYXQgcnVuIHRpbWUgaWYgZGlzcGxheSB0ZXh0IGlzIGNvbmZpZ3VyZWQuXG4gIGlmICghaXNCbGFua1JpY2hUZXh0KGNvbmZpZz8udGV4dCkpIHtcbiAgICBkZWxldGUgY29uZmlnLnBsYWNlaG9sZGVyXG4gIH1cbiAgcmV0dXJuIGNvbmZpZ1xufVxuXG4vKipcbiAqIFVwZGF0ZSB0aGUgaGlzdG9yeSBsYWJlbHMgaW4gZHJhZnQgYXBwIGNvbmZpZywgdGhlbiByZXR1cm4gdGhlIGRyYWZ0IGFwcCBjb25maWdcbiAqIEBwYXJhbSBkcmFmdEFwcENvbmZpZ1xuICogQHBhcmFtIHB1Ymxpc2hlZEFwcENvbmZpZ1xuICovXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlSGlzdG9yeUxhYmVscyAoZHJhZnRBcHBDb25maWc6IEFwcENvbmZpZywgcHVibGlzaGVkQXBwQ29uZmlnOiBBcHBDb25maWcpOiBBcHBDb25maWcge1xuICBpZiAocHVibGlzaGVkQXBwQ29uZmlnLl9fbm90X3B1Ymxpc2gpIHtcbiAgICByZXR1cm4gZHJhZnRBcHBDb25maWdcbiAgfVxuICAvLyByZW1vdmUgaWRzIHRoYXQgYXJlIG5vdCBleGlzdGVkXG4gIGlmIChkcmFmdEFwcENvbmZpZy5oaXN0b3J5TGFiZWxzKSB7XG4gICAgcmVtb3ZlTm9uRXhpc3RJZHMoZHJhZnRBcHBDb25maWcsICdwYWdlcycpXG4gICAgcmVtb3ZlTm9uRXhpc3RJZHMoZHJhZnRBcHBDb25maWcsICd2aWV3cycpXG4gICAgcmVtb3ZlTm9uRXhpc3RJZHMoZHJhZnRBcHBDb25maWcsICdkaWFsb2dzJylcbiAgfVxuXG4gIGFkZEhpc0xhYmVscyhkcmFmdEFwcENvbmZpZywgcHVibGlzaGVkQXBwQ29uZmlnLCAncGFnZXMnKVxuICBhZGRIaXNMYWJlbHMoZHJhZnRBcHBDb25maWcsIHB1Ymxpc2hlZEFwcENvbmZpZywgJ3ZpZXdzJylcbiAgYWRkSGlzTGFiZWxzKGRyYWZ0QXBwQ29uZmlnLCBwdWJsaXNoZWRBcHBDb25maWcsICdkaWFsb2dzJylcblxuICByZXR1cm4gZHJhZnRBcHBDb25maWdcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVRodW1ibmFpbEZvclNhdmVBc0FwcCAob3JpZ2luQXBwSW5mbzogQXBwSW5mbywgbmV3QXBwSW5mbzogQXBwSW5mbywgdGh1bWJuYWlsRmlsZXM/OiBhbnkpOiBQcm9taXNlPGFueT4ge1xuICBpZiAodGh1bWJuYWlsRmlsZXMpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gU2Vzc2lvbk1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXRNYWluU2Vzc2lvbigpXG4gICAgY29uc3QgbG9jYWxBcHBJdGVtID0ge1xuICAgICAgaWQ6IG5ld0FwcEluZm8uaWQsXG4gICAgICBmOiAnanNvbicsXG4gICAgICB0b2tlbjogc2Vzc2lvbj8udG9rZW4sXG4gICAgICB0aHVtYm5haWw6IHRodW1ibmFpbEZpbGVzXG4gICAgfVxuICAgIGF3YWl0IHVwZGF0ZUFwcFRodW1ibmFpbChsb2NhbEFwcEl0ZW0sIG5ld0FwcEluZm8ub3duZXIpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGF3YWl0IHVwZGF0ZVRodW1ibmFpbChuZXdBcHBJbmZvLmlkLCBvcmlnaW5BcHBJbmZvLCBvcmlnaW5BcHBJbmZvPy50aHVtYm5haWx1cmwgfHwgb3JpZ2luQXBwSW5mby50aHVtYm5haWwpXG4gIH1cbn1cblxuLyoqXG4gKiBEZWVwIGNsb25lLiBCdXQgb25seSBjbG9uZSB0d28gbGV2ZWxzLlxuICogQW5kIHBhcmFtIG11c3QgYmUgT2JqZWN0LlxuICovXG5leHBvcnQgZnVuY3Rpb24gY2xvbmVPYmogKG9iajogYW55KTogYW55IHtcbiAgY29uc3QgcmVzdWx0ID0ge30gYXMgYW55XG4gIE9iamVjdC5rZXlzKG9iaikuZm9yRWFjaChpZCA9PiB7XG4gICAgcmVzdWx0W2lkXSA9IHsgLi4ub2JqW2lkXSB9XG4gIH0pXG4gIHJldHVybiByZXN1bHRcbn1cblxuZnVuY3Rpb24gcmVtb3ZlTm9uRXhpc3RJZHMgKGFwcENvbmZpZzogQXBwQ29uZmlnLCB0eXBlOiAncGFnZXMnIHwgJ3ZpZXdzJyB8ICdkaWFsb2dzJykge1xuICBjb25zdCBoaXMgPSBhcHBDb25maWcuaGlzdG9yeUxhYmVsc1xuICBPYmplY3Qua2V5cyhoaXNbdHlwZV0gfHwge30pLmZvckVhY2goaGlzSWQgPT4ge1xuICAgIGlmICghYXBwQ29uZmlnW3R5cGVdPy5baGlzSWRdKSB7XG4gICAgICBkZWxldGUgaGlzW3R5cGVdW2hpc0lkXVxuICAgIH1cbiAgfSlcbn1cblxuZnVuY3Rpb24gYWRkSGlzTGFiZWxzIChkcmFmdEFwcENvbmZpZzogQXBwQ29uZmlnLCBwdWJsaXNoZWRBcHBDb25maWc6IEFwcENvbmZpZywgdHlwZTogJ3BhZ2VzJyB8ICd2aWV3cycgfCAnZGlhbG9ncycpIHtcbiAgY29uc3QgZHJhZnRPYmogPSBkcmFmdEFwcENvbmZpZ1t0eXBlXVxuICBjb25zdCBwdWJsaXNoZWRPYmogPSBwdWJsaXNoZWRBcHBDb25maWdbdHlwZV1cblxuICBpZiAoIWRyYWZ0T2JqIHx8ICFwdWJsaXNoZWRPYmopIHtcbiAgICByZXR1cm5cbiAgfVxuXG4gIE9iamVjdC5rZXlzKGRyYWZ0T2JqKS5mb3JFYWNoKGlkID0+IHtcbiAgICBjb25zdCBoaXNMYWJlbHMgPSBwdWJsaXNoZWRBcHBDb25maWcuaGlzdG9yeUxhYmVscz8uW3R5cGVdPy5baWRdIHx8IFtdXG4gICAgaWYgKHB1Ymxpc2hlZE9ialtpZF0gJiYgZHJhZnRPYmpbaWRdLmxhYmVsICE9PSBwdWJsaXNoZWRPYmpbaWRdLmxhYmVsKSB7XG4gICAgICBpZiAoIWhpc0xhYmVscy5pbmNsdWRlcyhwdWJsaXNoZWRPYmpbaWRdLmxhYmVsKSkge1xuICAgICAgICBoaXNMYWJlbHMucHVzaChwdWJsaXNoZWRPYmpbaWRdLmxhYmVsKVxuICAgICAgfVxuICAgIH1cbiAgICBpZiAoaGlzTGFiZWxzLmxlbmd0aCA+IDApIHtcbiAgICAgIGlmICghZHJhZnRBcHBDb25maWcuaGlzdG9yeUxhYmVscykge1xuICAgICAgICBkcmFmdEFwcENvbmZpZy5oaXN0b3J5TGFiZWxzID0ge1xuICAgICAgICAgIFt0eXBlXToge1xuICAgICAgICAgICAgW2lkXTogaGlzTGFiZWxzXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKCFkcmFmdEFwcENvbmZpZy5oaXN0b3J5TGFiZWxzW3R5cGVdKSB7XG4gICAgICAgIGRyYWZ0QXBwQ29uZmlnLmhpc3RvcnlMYWJlbHNbdHlwZV0gPSB7XG4gICAgICAgICAgW2lkXTogaGlzTGFiZWxzXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGRyYWZ0QXBwQ29uZmlnLmhpc3RvcnlMYWJlbHNbdHlwZV1baWRdID0gaGlzTGFiZWxzXG4gICAgICB9XG4gICAgfVxuICB9KVxufVxuXG5jb25zdCBIVE1MX1RBR19SRUdFWFAgPSAvPFtePl0qPi9tZ1xuLyoqXG4gKiBDaGVjayB3aGV0aGVyIGlzIHJpY2ggdGV4dCB3aXRoIGVtcHR5IGNvbnRlbnQuXG4gKi9cbmNvbnN0IGlzQmxhbmtSaWNoVGV4dCA9IChodG1sOiBzdHJpbmcpOiBib29sZWFuID0+IHtcbiAgaWYgKCFodG1sKSByZXR1cm4gdHJ1ZVxuICBpZiAoaHRtbCA9PT0gJzxwPjwvcD4nIHx8IGh0bWwgPT09ICc8cD48YnI+PC9wPicpIHJldHVybiB0cnVlXG4gIGxldCBwbGFpblRleHQgPSAnJ1xuICBpZiAoIWh0bWwuaW5jbHVkZXMoJzwnKSkge1xuICAgIHBsYWluVGV4dCA9IGh0bWxcbiAgfSBlbHNlIHtcbiAgICBwbGFpblRleHQgPSBodG1sLnJlcGxhY2UoSFRNTF9UQUdfUkVHRVhQLCAnJylcbiAgfVxuICBwbGFpblRleHQgPSBwbGFpblRleHQ/LnRyaW0oKVxuICByZXR1cm4gIXBsYWluVGV4dFxufVxuXG5leHBvcnQgZnVuY3Rpb24gcmVwbGFjZUV4YlZlcnNpb25JbkFwcENvbmZpZyAoYXBwQ29uZmlnOiBJTUFwcENvbmZpZyk6IElNQXBwQ29uZmlnIHtcbiAgaWYgKCFhcHBDb25maWcpIHJldHVybiBudWxsXG4gIGNvbnN0IGlzSGlnaGVyVmVyc2lvbkFwcCA9IHNlbXZlci5sdCh2ZXJzaW9uLCBhcHBDb25maWc/LmV4YlZlcnNpb24pXG4gIGlmIChpc0hpZ2hlclZlcnNpb25BcHApIHtcbiAgICAvL2Rvd25ncmFkZSBhcHAgdmVyc2lvblxuICAgIGFwcENvbmZpZyA9IGFwcENvbmZpZy5zZXQoJ2V4YlZlcnNpb24nLCB2ZXJzaW9uKVxuICB9XG4gIGNvbnN0IGNvbmZpZyA9IGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKS5hcHBTdGF0ZUluQnVpbGRlcj8uYXBwQ29uZmlnXG4gIGNvbnN0IHdpZGdldHMgPSBjb25maWcud2lkZ2V0cyB8fCB7fVxuICBPYmplY3Qua2V5cyh3aWRnZXRzKS5mb3JFYWNoKHdpZGdldElkID0+IHtcbiAgICAvL01hbmlmZXN0LnZlcnNpb24gaXMgdGhlIHZlcnNpb24gb2YgdGhlIGN1cnJlbnQgd2lkZ2V0IGNvZGUsXG4gICAgLy9XaGVuIHRoZSB2ZXJzaW9uIG9mIHRoZSB3aWRnZXQgaXMgaGlnaGVyIHRoYW4gdGhlIGN1cnJlbnQgY29kZSB2ZXJzaW9uLCBpdCBuZWVkcyB0byBiZSBkb3duZ3JhZGVkIHRvIGJlIGNvbnNpc3RlbnQgd2l0aCB0aGUgbWFuaWZlc3QudmVyc2lvblxuICAgIC8vRm9yIGN1c3RvbSB3aWRnZXRzLCBpZiB0aGUgdmVyc2lvbiB0aGV5IHVzZSBpcyBub3QgY29uc2lzdGVudCB3aXRoIEV4YkJ1aWxkZXIsIGl0IG5lZWRzIGZ1cnRoZXIgZGlzY3Vzc2lvbiBvbiBob3cgdG8gZGVhbCB3aXRoIGl0XG4gICAgY29uc3QgaXNIaWdoZXJWZXJzaW9uV2lkZ2V0ID0gc2VtdmVyLmx0KHdpZGdldHNbd2lkZ2V0SWRdPy5tYW5pZmVzdD8udmVyc2lvbiwgd2lkZ2V0c1t3aWRnZXRJZF0/LnZlcnNpb24pXG4gICAgaWYgKGlzSGlnaGVyVmVyc2lvbldpZGdldCkge1xuICAgICAgYXBwQ29uZmlnID0gYXBwQ29uZmlnLnNldEluKFsnd2lkZ2V0cycsIHdpZGdldElkLCAndmVyc2lvbiddLCB3aWRnZXRzW3dpZGdldElkXT8ubWFuaWZlc3Q/LnZlcnNpb24pXG4gICAgfVxuICB9KVxuICByZXR1cm4gYXBwQ29uZmlnXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpbml0QXBwQ29uZmlnT2ZOZXdBcHAgKGFwcENvbmZpZzogQXBwQ29uZmlnKTogQXBwQ29uZmlnIHtcbiAgaWYgKGFwcENvbmZpZy5hdHRyaWJ1dGVzKSB7XG4gICAgYXBwQ29uZmlnLmF0dHJpYnV0ZXMucG9ydGFsVXJsID0gZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpLnBvcnRhbFVybFxuICB9IGVsc2Uge1xuICAgIGFwcENvbmZpZy5hdHRyaWJ1dGVzID0ge1xuICAgICAgcG9ydGFsVXJsOiBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCkucG9ydGFsVXJsXG4gICAgfVxuICB9XG5cbiAgY29uc3Qgc2hhcmVkVGhlbWVKc29uID0gZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpLnBvcnRhbFNlbGY/LnBvcnRhbFByb3BlcnRpZXM/LnNoYXJlZFRoZW1lXG4gIGFwcENvbmZpZy5zaGFyZWRUaGVtZVZhcmlhYmxlcyA9IHNoYXJlZFRoZW1lVXRpbHMuY3JlYXRlU2hhcmVkVGhlbWVWYXJpYWJsZXMoc2hhcmVkVGhlbWVKc29uKVxuICByZXR1cm4gYXBwQ29uZmlnXG59XG4iLCJpbXBvcnQgKiBhcyBhcHBTZXJ2aWNlcyBmcm9tICcuL2FwcC1zZXJ2aWNlJ1xuaW1wb3J0ICogYXMgdXNlclNlcnZpY2VzIGZyb20gJy4vdXNlci1zZXJ2aWNlJ1xuZXhwb3J0ICogZnJvbSAnLi90eXBlJ1xuZXhwb3J0IHsgZ2V0UmVzb3VyY2VPcmlnaW4sIGluaXRBcHBDb25maWdPZk5ld0FwcCwgdG9DcmVhdGVBcHBCeURlZmF1bHRUZW1wbGF0ZSwgY3JlYXRlQXBwQ2FsbEJhY2sgfSBmcm9tICcuL2FwcC1zZXJ2aWNlL3V0aWwnXG5leHBvcnQgeyBhcHBTZXJ2aWNlcywgdXNlclNlcnZpY2VzIH1cbiIsImV4cG9ydCAqIGZyb20gJy4vaXRlbXMvdXBkYXRlLXRodW1ibmFpbCdcbmV4cG9ydCAqIGZyb20gJy4vaXRlbXMvZ2V0LXVzZXItY29udGVudCdcbmV4cG9ydCAqIGZyb20gJy4vaXRlbXMvc2hhcmUtaXRlbXMnXG5leHBvcnQgKiBmcm9tICcuL2l0ZW1zL3Vuc2hhcmUtaXRlbXMnXG5leHBvcnQgKiBmcm9tICcuL2l0ZW1zL2l0ZW1zZ3JvdXBzJ1xuZXhwb3J0ICogZnJvbSAnLi9pdGVtcy9nZXQtY2F0ZWdvcnktc2NoZW1hJ1xuIiwiaW1wb3J0IHsgdHlwZSBJUmVxdWVzdE9wdGlvbnMsIHR5cGUgSFRUUE1ldGhvZHMgfSBmcm9tICdAZXNyaS9hcmNnaXMtcmVzdC1yZXF1ZXN0J1xuaW1wb3J0IHsgZ2V0T3JpZ2luVXJsLCBnZXRPcmlnaW5JZCB9IGZyb20gJy4uL3V0aWwnXG5pbXBvcnQgeyBnZXRBcHBTdG9yZSwgcG9ydGFsVXJsVXRpbHMsIGVzcmkgfSBmcm9tICdqaW11LWNvcmUnXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRHcm91cENhdGVnb3J5U2NoZW1hIChcbiAgZ3JvdXBJZDogc3RyaW5nLFxuICByZXF1ZXN0T3B0aW9ucz86IElSZXF1ZXN0T3B0aW9ucyxcbiAgaXNBcmNHaXNPbmxpbmVSZXF1ZXN0ID0gZmFsc2Vcbik6IFByb21pc2U8YW55PiB7XG4gIGNvbnN0IHVybCA9IGAke2dldE9yaWdpblVybChpc0FyY0dpc09ubGluZVJlcXVlc3QpfS9zaGFyaW5nL3Jlc3QvY29tbXVuaXR5L2dyb3Vwcy8ke2dyb3VwSWR9L2NhdGVnb3J5U2NoZW1hYFxuICBpZiAoaXNBcmNHaXNPbmxpbmVSZXF1ZXN0ICYmICFpc1BvcnRhbEFHT0woKSkge1xuICAgIGRlbGV0ZSByZXF1ZXN0T3B0aW9ucy5hdXRoZW50aWNhdGlvblxuICB9XG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgLi4ucmVxdWVzdE9wdGlvbnMsXG4gICAgcGFyYW1zOiB7XG4gICAgICBpZDogZ3JvdXBJZFxuICAgIH0sXG4gICAgaHR0cE1ldGhvZDogJ0dFVCcgYXMgSFRUUE1ldGhvZHNcbiAgfVxuICBjb25zdCByZXF1ZXN0ID0gZXNyaS5yZXN0UmVxdWVzdC5yZXF1ZXN0XG4gIHJldHVybiBhd2FpdCByZXF1ZXN0KHVybCwgb3B0aW9ucylcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldE9yZ0NhdGVnb3J5U2NoZW1hIChcbiAgcmVxdWVzdE9wdGlvbnM/OiBJUmVxdWVzdE9wdGlvbnMsXG4gIGlzQXJjR2lzT25saW5lUmVxdWVzdCA9IGZhbHNlXG4pOiBQcm9taXNlPGFueT4ge1xuICBjb25zdCBvcmdJZCA9IGdldE9yaWdpbklkKGlzQXJjR2lzT25saW5lUmVxdWVzdClcbiAgY29uc3QgdXJsID0gYCR7Z2V0T3JpZ2luVXJsKGlzQXJjR2lzT25saW5lUmVxdWVzdCl9L3NoYXJpbmcvcmVzdC9wb3J0YWxzLyR7b3JnSWR9L2NhdGVnb3J5U2NoZW1hYFxuICBpZiAoaXNBcmNHaXNPbmxpbmVSZXF1ZXN0ICYmICFpc1BvcnRhbEFHT0woKSkge1xuICAgIGRlbGV0ZSByZXF1ZXN0T3B0aW9ucy5hdXRoZW50aWNhdGlvblxuICB9XG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgLi4ucmVxdWVzdE9wdGlvbnMsXG4gICAgaHR0cE1ldGhvZDogJ0dFVCcgYXMgSFRUUE1ldGhvZHNcbiAgfVxuICBjb25zdCByZXF1ZXN0ID0gZXNyaS5yZXN0UmVxdWVzdC5yZXF1ZXN0XG4gIHJldHVybiBhd2FpdCByZXF1ZXN0KHVybCwgb3B0aW9ucylcbn1cblxuZnVuY3Rpb24gaXNQb3J0YWxBR09MICgpIHtcbiAgY29uc3QgcG9ydGFsVXJsID0gZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpLnBvcnRhbFVybFxuICByZXR1cm4gcG9ydGFsVXJsVXRpbHMuaXNBR09MRG9tYWluKHBvcnRhbFVybClcbn1cbiIsImltcG9ydCB7IGdldEFwcFN0b3JlLCBTZXNzaW9uTWFuYWdlciwgZXNyaSB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IHR5cGUgSVBhcmFtcywgdHlwZSBIVFRQTWV0aG9kcywgdHlwZSBJUmVxdWVzdE9wdGlvbnMgfSBmcm9tICdAZXNyaS9hcmNnaXMtcmVzdC1yZXF1ZXN0J1xuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJy4uL3JlcXVlc3QnXG5pbXBvcnQgeyBnZXRPcmlnaW5VcmwsIGlzUG9ydGFsQUdPTCB9IGZyb20gJy4uL3V0aWwnXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0VXNlckNvbnRlbnQgKFxuICByZXF1ZXN0T3B0aW9uczogSVBhcmFtc1xuKTogUHJvbWlzZTxhbnk+IHtcbiAgY29uc3Qgc2Vzc2lvbiA9IFNlc3Npb25NYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0TWFpblNlc3Npb24oKVxuICBjb25zdCB1cmwgPSBgJHtnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCkucG9ydGFsVXJsfS9zaGFyaW5nL3Jlc3QvY29udGVudC91c2Vycy8ke3Nlc3Npb24/LnVzZXJuYW1lfWBcbiAgY29uc3QgcmVxdWVzdE9wdGlvbiA9IHtcbiAgICAuLi5yZXF1ZXN0T3B0aW9ucy5wYXJhbXMsXG4gICAgZjogJ2pzb24nLFxuICAgIHRva2VuOiBzZXNzaW9uPy50b2tlblxuICB9XG4gIHJldHVybiBhd2FpdCByZXF1ZXN0KHVybCwgcmVxdWVzdE9wdGlvbiwgJ0dFVCcpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRHcm91cENvbnRlbnQgKFxuICBncm91cElkOiBzdHJpbmcsXG4gIHJlcXVlc3RPcHRpb25zPzogSVJlcXVlc3RPcHRpb25zLFxuICBpc0dldEFHT0xDb250ZW50ID0gZmFsc2Vcbik6IFByb21pc2U8YW55PiB7XG4gIGNvbnN0IHVybCA9IGAke2dldE9yaWdpblVybChpc0dldEFHT0xDb250ZW50KX0vc2hhcmluZy9yZXN0L2NvbnRlbnQvZ3JvdXBzLyR7Z3JvdXBJZH0vc2VhcmNoYFxuICBpZiAoaXNHZXRBR09MQ29udGVudCAmJiAhaXNQb3J0YWxBR09MKCkpIHtcbiAgICBkZWxldGUgcmVxdWVzdE9wdGlvbnMuYXV0aGVudGljYXRpb25cbiAgfVxuICBjb25zdCBvcHRpb25zID0ge1xuICAgIC4uLnJlcXVlc3RPcHRpb25zLFxuICAgIGh0dHBNZXRob2Q6ICdHRVQnIGFzIEhUVFBNZXRob2RzXG4gIH1cbiAgY29uc3QgcmVxdWVzdCA9IGVzcmkucmVzdFJlcXVlc3QucmVxdWVzdFxuICByZXR1cm4gYXdhaXQgcmVxdWVzdCh1cmwsIG9wdGlvbnMpXG59XG4iLCJpbXBvcnQgeyBnZXRBcHBTdG9yZSwgU2Vzc2lvbk1hbmFnZXIsIGVzcmkgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyB0eXBlIElQYXJhbXMsIHR5cGUgSFRUUE1ldGhvZHMgfSBmcm9tICdAZXNyaS9hcmNnaXMtcmVzdC1yZXF1ZXN0J1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGl0ZW1zZ3JvdXBzIChcbiAgcmVxdWVzdE9wdGlvbnM6IElQYXJhbXNcbik6IFByb21pc2U8YW55PiB7XG4gIGNvbnN0IHNlc3Npb24gPSBTZXNzaW9uTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldE1haW5TZXNzaW9uKClcbiAgY29uc3QgdXJsID0gYCR7Z2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpLnBvcnRhbFVybH0vc2hhcmluZy9yZXN0L2NvbnRlbnQvaXRlbXNncm91cHNgXG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgcGFyYW1zOiByZXF1ZXN0T3B0aW9ucyxcbiAgICBodHRwTWV0aG9kOiAnR0VUJyBhcyBIVFRQTWV0aG9kcyxcbiAgICBhdXRoZW50aWNhdGlvbjogc2Vzc2lvblxuICB9XG5cbiAgcmV0dXJuIGF3YWl0IGVzcmkucmVzdFJlcXVlc3QucmVxdWVzdCh1cmwsIG9wdGlvbnMpXG59XG4iLCJpbXBvcnQgeyBnZXRBcHBTdG9yZSwgU2Vzc2lvbk1hbmFnZXIgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyB0eXBlIElQYXJhbXMgfSBmcm9tICdAZXNyaS9hcmNnaXMtcmVzdC1yZXF1ZXN0J1xuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJy4uL3JlcXVlc3QnXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2hhcmVJdGVtcyAoXG4gIHJlcXVlc3RPcHRpb25zOiBJUGFyYW1zXG4pOiBQcm9taXNlPGFueT4ge1xuICBjb25zdCBzZXNzaW9uID0gU2Vzc2lvbk1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXRNYWluU2Vzc2lvbigpXG4gIGNvbnN0IHVybCA9IGAke2dldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKS5wb3J0YWxVcmx9L3NoYXJpbmcvcmVzdC9jb250ZW50L2l0ZW1zLyR7cmVxdWVzdE9wdGlvbnMuaXRlbXN9L3NoYXJlYFxuICByZXF1ZXN0T3B0aW9ucyA9IHtcbiAgICAuLi5yZXF1ZXN0T3B0aW9ucyxcbiAgICBmOiAnanNvbicsXG4gICAgdG9rZW46IHNlc3Npb24/LnRva2VuXG4gIH1cblxuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMocmVxdWVzdE9wdGlvbnMpXG4gIGNvbnN0IGRhdGE6IEZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKClcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgZGF0YS5hcHBlbmQoa2V5c1tpXSwgcmVxdWVzdE9wdGlvbnNba2V5c1tpXV0pXG4gIH1cbiAgcmVxdWVzdE9wdGlvbnMgPSBkYXRhXG4gIHJldHVybiBhd2FpdCByZXF1ZXN0KHVybCwgcmVxdWVzdE9wdGlvbnMpXG59XG4iLCJpbXBvcnQgeyBnZXRBcHBTdG9yZSwgU2Vzc2lvbk1hbmFnZXIgfSBmcm9tICdqaW11LWNvcmUnXG5pbXBvcnQgeyB0eXBlIElQYXJhbXMgfSBmcm9tICdAZXNyaS9hcmNnaXMtcmVzdC1yZXF1ZXN0J1xuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJy4uL3JlcXVlc3QnXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdW5TaGFyZUl0ZW1zIChcbiAgcmVxdWVzdE9wdGlvbnM6IElQYXJhbXNcbik6IFByb21pc2U8YW55PiB7XG4gIGNvbnN0IHNlc3Npb24gPSBTZXNzaW9uTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldE1haW5TZXNzaW9uKClcbiAgY29uc3QgdXJsID0gYCR7Z2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpLnBvcnRhbFVybH0vc2hhcmluZy9yZXN0L2NvbnRlbnQvaXRlbXMvJHtyZXF1ZXN0T3B0aW9ucy5pdGVtc30vdW5zaGFyZWBcbiAgcmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgLi4ucmVxdWVzdE9wdGlvbnMsXG4gICAgZjogJ2pzb24nLFxuICAgIHRva2VuOiBzZXNzaW9uPy50b2tlblxuICB9XG5cbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHJlcXVlc3RPcHRpb25zKVxuICBjb25zdCBkYXRhOiBGb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpXG4gIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGRhdGEuYXBwZW5kKGtleXNbaV0sIHJlcXVlc3RPcHRpb25zW2tleXNbaV1dKVxuICB9XG4gIHJlcXVlc3RPcHRpb25zID0gZGF0YVxuICByZXR1cm4gYXdhaXQgcmVxdWVzdCh1cmwsIHJlcXVlc3RPcHRpb25zKVxufVxuIiwiaW1wb3J0IHsgZ2V0QXBwU3RvcmUsIFNlc3Npb25NYW5hZ2VyIH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgdHlwZSBJVXBkYXRlSXRlbU9wdGlvbnMsIHR5cGUgSVVwZGF0ZUl0ZW1SZXNwb25zZSB9IGZyb20gJ0Blc3JpL2FyY2dpcy1yZXN0LXBvcnRhbCdcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcuLi9yZXF1ZXN0J1xuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUl0ZW0gKFxuICByZXF1ZXN0T3B0aW9uczogSVVwZGF0ZUl0ZW1PcHRpb25zXG4pOiBQcm9taXNlPElVcGRhdGVJdGVtUmVzcG9uc2U+IHtcbiAgY29uc3Qgc2Vzc2lvbiA9IFNlc3Npb25NYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0TWFpblNlc3Npb24oKVxuICBjb25zdCBvd25lciA9IHJlcXVlc3RPcHRpb25zLm93bmVyID8gcmVxdWVzdE9wdGlvbnMub3duZXIgOiBzZXNzaW9uPy51c2VybmFtZVxuICBjb25zdCB1cmwgPSBgJHtnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCkucG9ydGFsVXJsfS9zaGFyaW5nL3Jlc3QvY29udGVudC91c2Vycy8ke293bmVyfS9pdGVtcy8ke3JlcXVlc3RPcHRpb25zLml0ZW0uaWR9L3VwZGF0ZWBcblxuICByZXF1ZXN0T3B0aW9ucy5wYXJhbXMgPSB7XG4gICAgLi4ucmVxdWVzdE9wdGlvbnMucGFyYW1zLFxuICAgIC4uLnJlcXVlc3RPcHRpb25zLml0ZW1cbiAgfVxuXG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhyZXF1ZXN0T3B0aW9ucy5wYXJhbXMpXG4gIGNvbnN0IGRhdGE6IEZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKClcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgZGF0YS5hcHBlbmQoa2V5c1tpXSwgcmVxdWVzdE9wdGlvbnMucGFyYW1zW2tleXNbaV1dKVxuICB9XG4gIHJlcXVlc3RPcHRpb25zLnBhcmFtcyA9IGRhdGFcbiAgcmV0dXJuIGF3YWl0IHJlcXVlc3QodXJsLCBkYXRhKVxufVxuIiwiaW1wb3J0IHsgdHlwZSBJUGFyYW1zIH0gZnJvbSAnQGVzcmkvYXJjZ2lzLXJlc3QtcmVxdWVzdCdcbmltcG9ydCB7IGdldEFwcFN0b3JlLCBTZXNzaW9uTWFuYWdlciB9IGZyb20gJ2ppbXUtY29yZSdcbmNvbnN0IGlzV2ViVGllciA9IFNlc3Npb25NYW5hZ2VyLmdldEluc3RhbmNlKCkuaXNUcnVzdGVkU2VydmVyKGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKS5wb3J0YWxVcmwpXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVxdWVzdCAoXG4gIHVybDogc3RyaW5nLFxuICByZXF1ZXN0T3B0aW9uczogSVBhcmFtcyA9IHsgZjogJ2pzb24nIH0sXG4gIHJlcXVlc3RUeXBlOiAnR0VUJyB8ICdQT1NUJyA9ICdQT1NUJ1xuKTogUHJvbWlzZTxhbnk+IHtcbiAgaWYgKHJlcXVlc3RUeXBlID09PSAnR0VUJykge1xuICAgIGNvbnN0IHJlcXVlc3RVcmwgPSB1cmwgKyBlbmNvZGVRdWVyeVN0cmluZyhyZXF1ZXN0T3B0aW9ucylcbiAgICByZXR1cm4gYXdhaXQgZmV0Y2gocmVxdWVzdFVybCwge1xuICAgICAgY3JlZGVudGlhbHM6IGlzV2ViVGllciA/ICdpbmNsdWRlJyA6ICdzYW1lLW9yaWdpbicsXG4gICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICB9XG4gICAgfSkudGhlbihhc3luYyAocmVzcG9uc2UpID0+IHtcbiAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICB9KS50aGVuKGFzeW5jIGRhdGEgPT4ge1xuICAgICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVzb2x2ZShkYXRhKVxuICAgIH0pXG4gIH1cblxuICBpZiAocmVxdWVzdFR5cGUgPT09ICdQT1NUJykge1xuICAgIGlmIChyZXF1ZXN0T3B0aW9ucyAmJiByZXF1ZXN0T3B0aW9ucy5jb25zdHJ1Y3Rvci5uYW1lID09PSAnRm9ybURhdGEnKSB7XG4gICAgICByZXR1cm4gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICAgIGNyZWRlbnRpYWxzOiBpc1dlYlRpZXIgPyAnaW5jbHVkZScgOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgYm9keTogcmVxdWVzdE9wdGlvbnMgYXMgRm9ybURhdGFcbiAgICAgIH0pLnRoZW4oYXN5bmMgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICAgIH0pLnRoZW4oYXN5bmMgZGF0YSA9PiB7XG4gICAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlc29sdmUoZGF0YSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgICAgY3JlZGVudGlhbHM6IGlzV2ViVGllciA/ICdpbmNsdWRlJyA6ICdzYW1lLW9yaWdpbicsXG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICB9LFxuICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShyZXF1ZXN0T3B0aW9ucylcbiAgICAgIH0pLnRoZW4oYXN5bmMgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICAgIH0pLnRoZW4oYXN5bmMgZGF0YSA9PiB7XG4gICAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlc29sdmUoZGF0YSlcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVqZWN0KG51bGwpXG59XG5cbmZ1bmN0aW9uIGVuY29kZVF1ZXJ5U3RyaW5nIChwYXJhbXMpIHtcbiAgaWYgKCFwYXJhbXMpIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhwYXJhbXMpXG4gIHJldHVybiBrZXlzLmxlbmd0aFxuICAgID8gJz8nICsga2V5c1xuICAgICAgLm1hcChrZXkgPT4gZW5jb2RlVVJJQ29tcG9uZW50KGtleSkgK1xuICAgICAgICAgICAgICAnPScgKyBlbmNvZGVVUklDb21wb25lbnQocGFyYW1zW2tleV0pKVxuICAgICAgLmpvaW4oJyYnKVxuICAgIDogJydcbn1cbiIsImltcG9ydCB7IGdldEFwcFN0b3JlLCB1cmxVdGlscywgcG9ydGFsVXJsVXRpbHMgfSBmcm9tICdqaW11LWNvcmUnXG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRPcmlnaW5VcmwgKGlzQXJjR2lzT25saW5lUmVxdWVzdCA9IGZhbHNlKSB7XG4gIGlmIChpc0FyY0dpc09ubGluZVJlcXVlc3QpIHtcbiAgICByZXR1cm4gdXJsVXRpbHMuZ2V0QXJjZ2lzT25saW5lVXJsKClcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLm9yaWdpblxuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVc2VyQ29udGVudFVybCAoaXNOb3RDb250YWluVXNlcnMgPSBmYWxzZSkge1xuICBpZiAoaXNOb3RDb250YWluVXNlcnMpIHtcbiAgICByZXR1cm4gJy9zaGFyaW5nL3Jlc3QvY29udGVudC8nXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICcvc2hhcmluZy9yZXN0L2NvbnRlbnQvdXNlcnMvJ1xuICB9XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVc2VyTmFtZSAoKSB7XG4gIHJldHVybiBnZXRBcHBTdG9yZSgpLmdldFN0YXRlKCkudXNlcj8udXNlcm5hbWVcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldE9yaWdpbklkIChpc0FyY0dpc09ubGluZVJlcXVlc3QgPSBmYWxzZSkge1xuICBpZiAoaXNBcmNHaXNPbmxpbmVSZXF1ZXN0KSB7XG4gICAgcmV0dXJuIHVybFV0aWxzLmdldEFyY2dpc09ubGluZU9yZ0lkKClcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpLnVzZXI/Lm9yZ0lkXG4gIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGlzUG9ydGFsQUdPTCAoKSB7XG4gIGNvbnN0IHBvcnRhbFVybCA9IGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKS5wb3J0YWxVcmxcbiAgcmV0dXJuIHBvcnRhbFVybFV0aWxzLmlzQUdPTERvbWFpbihwb3J0YWxVcmwpXG59XG4iLCJleHBvcnQgKiBmcm9tICcuL2l0ZW1zL3NlYXJjaCdcbmV4cG9ydCAqIGZyb20gJy4vaXRlbXMvY3JlYXRlJ1xuZXhwb3J0ICogZnJvbSAnLi9pdGVtcy9nZXQnXG5leHBvcnQgKiBmcm9tICcuL2l0ZW1zL3JlbW92ZSdcbmV4cG9ydCAqIGZyb20gJy4vaXRlbXMvdXBkYXRlJ1xuZXhwb3J0ICogZnJvbSAnLi9pdGVtcy9hZGQnXG5leHBvcnQgKiBmcm9tICcuL3JlcXVlc3QnXG5leHBvcnQgKiBmcm9tICcuL3V0aWwnXG4iLCJpbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnLi4vcmVxdWVzdCdcbmltcG9ydCB7IGdldE9yaWdpblVybCwgZ2V0VXNlckNvbnRlbnRVcmwgfSBmcm9tICcuLi91dGlsJ1xuaW1wb3J0IHsgdHlwZSBJSXRlbVJlc291cmNlT3B0aW9ucywgdHlwZSBJSXRlbVJlc291cmNlUmVzcG9uc2UgfSBmcm9tICcuL2hlbHBlcnMnXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGRJdGVtUmVzb3VyY2UgKFxuICByZXF1ZXN0T3B0aW9uczogSUl0ZW1SZXNvdXJjZU9wdGlvbnNcbik6IFByb21pc2U8SUl0ZW1SZXNvdXJjZVJlc3BvbnNlPiB7XG4gIGNvbnN0IHVybCA9IGAke2dldE9yaWdpblVybCgpfSR7Z2V0VXNlckNvbnRlbnRVcmwoKX1pdGVtcy8ke1xuICAgIHJlcXVlc3RPcHRpb25zLmlkXG4gIH0vYWRkUmVzb3VyY2VzYFxuXG4gIHJlcXVlc3RPcHRpb25zLnBhcmFtcyA9IHtcbiAgICBmaWxlTmFtZTogcmVxdWVzdE9wdGlvbnMubmFtZSxcbiAgICB0ZXh0OiByZXF1ZXN0T3B0aW9ucy5jb250ZW50LFxuICAgIGFjY2VzczogcmVxdWVzdE9wdGlvbnMucHJpdmF0ZSA/ICdwcml2YXRlJyA6ICdpbmhlcml0JyxcbiAgICAuLi5yZXF1ZXN0T3B0aW9ucy5wYXJhbXMsXG4gICAgZmlsZTogcmVxdWVzdE9wdGlvbnMucmVzb3VyY2VcbiAgfVxuXG4gIGRlbGV0ZSByZXF1ZXN0T3B0aW9ucy5wYXJhbXMuZmlsZVxuICByZXF1ZXN0T3B0aW9ucy5wYXJhbXMuZmlsZSA9IHJlcXVlc3RPcHRpb25zLnJlc291cmNlXG5cbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHJlcXVlc3RPcHRpb25zLnBhcmFtcylcbiAgY29uc3QgZGF0YTogRm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKVxuXG4gIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGRhdGEuYXBwZW5kKGtleXNbaV0sIHJlcXVlc3RPcHRpb25zLnBhcmFtc1trZXlzW2ldXSlcbiAgfVxuICByZXF1ZXN0T3B0aW9ucy5wYXJhbXMgPSBkYXRhXG5cbiAgcmV0dXJuIGF3YWl0IHJlcXVlc3QodXJsLCByZXF1ZXN0T3B0aW9ucylcbn1cbiIsImltcG9ydCB7IGVzcmksIGdldEFwcFN0b3JlIH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgdHlwZSBJQ3JlYXRlSXRlbU9wdGlvbnMsIHR5cGUgSUNyZWF0ZUl0ZW1SZXNwb25zZSwgdHlwZSBJSXRlbURhdGFPcHRpb25zIH0gZnJvbSAnQGVzcmkvYXJjZ2lzLXJlc3QtcG9ydGFsJ1xuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJy4uL3JlcXVlc3QnXG5pbXBvcnQgeyBnZXRPcmlnaW5VcmwsIGdldFVzZXJDb250ZW50VXJsLCBnZXRVc2VyTmFtZSB9IGZyb20gJy4uL3V0aWwnXG5pbXBvcnQgeyBzZXJpYWxpemVJdGVtIH0gZnJvbSAnLi9oZWxwZXJzJ1xuaW1wb3J0IHsgdHlwZSBJbXBvcnRBcHBPcHRpb24gfSBmcm9tICcuLi8uLi90eXBlJ1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlSXRlbSAoXG4gIHJlcXVlc3RPcHRpb25zOiBJQ3JlYXRlSXRlbU9wdGlvbnNcbik6IFByb21pc2U8SUNyZWF0ZUl0ZW1SZXNwb25zZT4ge1xuICAvLyBkZWxlZ2F0ZSB0byBjcmVhdGVJdGVtSW5Gb2xkZXIgcGxhY2luZyBpbiB0aGUgcm9vdCBvZiB0aGUgZmlsZXN0b3JlXG4gIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgZm9sZGVySWQ6IG51bGwsXG4gICAgLi4ucmVxdWVzdE9wdGlvbnNcbiAgfSBhcyBJQ3JlYXRlSXRlbU9wdGlvbnNcbiAgcmV0dXJuIGF3YWl0IGNyZWF0ZUl0ZW1JbkZvbGRlcihvcHRpb25zKVxufVxuXG5hc3luYyBmdW5jdGlvbiBjcmVhdGVJdGVtSW5Gb2xkZXIgKFxuICByZXF1ZXN0T3B0aW9uczogSUNyZWF0ZUl0ZW1PcHRpb25zXG4pOiBQcm9taXNlPElDcmVhdGVJdGVtUmVzcG9uc2U+IHtcbiAgaWYgKHJlcXVlc3RPcHRpb25zLmZpbGUgJiYgIXJlcXVlc3RPcHRpb25zLm11bHRpcGFydCkge1xuICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlamVjdChcbiAgICAgIG5ldyBFcnJvcignVGhlIHJlcXVlc3QgbXVzdCBiZSBhIG11bHRpcGFydCByZXF1ZXN0IGZvciBmaWxlIHVwbG9hZGluZy4nKVxuICAgIClcbiAgfVxuXG4gIGlmIChyZXF1ZXN0T3B0aW9ucy5tdWx0aXBhcnQgJiYgIXJlcXVlc3RPcHRpb25zLmZpbGVuYW1lKSB7XG4gICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVqZWN0KFxuICAgICAgbmV3IEVycm9yKCdUaGUgZmlsZSBuYW1lIGlzIHJlcXVpcmVkIGZvciBhIG11bHRpcGFydCByZXF1ZXN0LicpXG4gICAgKVxuICB9XG5cbiAgY29uc3QgdXNlck5hbWUgPSBnZXRVc2VyTmFtZSgpXG5cbiAgY29uc3Qgb3duZXIgPSB1c2VyTmFtZVxuICBjb25zdCBiYXNlVXJsID0gZ2V0T3JpZ2luVXJsKClcbiAgY29uc3QgdXJsID0gYCR7YmFzZVVybH0ke2dldFVzZXJDb250ZW50VXJsKCl9YWRkSXRlbWBcblxuICByZXF1ZXN0T3B0aW9ucy5wYXJhbXMgPSB7XG4gICAgLi4ucmVxdWVzdE9wdGlvbnMucGFyYW1zLFxuICAgIC4uLnNlcmlhbGl6ZUl0ZW0ocmVxdWVzdE9wdGlvbnMuaXRlbSksXG4gICAgcG9ydGFsVXJsOiBnZXRBcHBTdG9yZSgpPy5nZXRTdGF0ZSgpPy5wb3J0YWxVcmxcbiAgfVxuXG4gIC8vIHNlcmlhbGl6ZSB0aGUgaXRlbSBpbnRvIHNvbWV0aGluZyBQb3J0YWwgd2lsbCBhY2NlcHRcbiAgY29uc3Qgb3B0aW9ucyA9IGVzcmkucmVzdFJlcXVlc3QuYXBwZW5kQ3VzdG9tUGFyYW1zPElDcmVhdGVJdGVtT3B0aW9ucz4oXG4gICAgcmVxdWVzdE9wdGlvbnMsXG4gICAgW1xuICAgICAgJ293bmVyJyxcbiAgICAgICdmb2xkZXJJZCcsXG4gICAgICAnZmlsZScsXG4gICAgICAnZGF0YVVybCcsXG4gICAgICAndGV4dCcsXG4gICAgICAnYXN5bmMnLFxuICAgICAgJ211bHRpcGFydCcsXG4gICAgICAnZmlsZW5hbWUnLFxuICAgICAgJ292ZXJ3cml0ZSdcbiAgICBdLFxuICAgIHtcbiAgICAgIHBhcmFtczogeyAuLi5yZXF1ZXN0T3B0aW9ucy5wYXJhbXMgfVxuICAgIH1cbiAgKVxuXG4gIG9wdGlvbnMucGFyYW1zLnVzZXJuYW1lID0gb3duZXJcblxuICByZXR1cm4gYXdhaXQgcmVxdWVzdCh1cmwsIG9wdGlvbnMpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBpbXBvcnRJdGVtIChcbiAgaXRlbTogSW1wb3J0QXBwT3B0aW9uLFxuICByZXF1ZXN0T3B0aW9uczogSUl0ZW1EYXRhT3B0aW9uc1xuKTogUHJvbWlzZTxJQ3JlYXRlSXRlbVJlc3BvbnNlPiB7XG4gIGNvbnN0IGJhc2VVcmwgPSBnZXRPcmlnaW5VcmwoKVxuXG4gIGNvbnN0IHVybCA9IGAke2Jhc2VVcmx9JHtnZXRVc2VyQ29udGVudFVybCgpfWltcG9ydEl0ZW1gXG5cbiAgaWYgKCFpdGVtPy5hcHBaaXApIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoJ05vIGFwcCBmaWxlcycpXG4gIH1cblxuICByZXF1ZXN0T3B0aW9ucy5wYXJhbXMgPSB7XG4gICAgLi4ucmVxdWVzdE9wdGlvbnMucGFyYW1zLFxuICAgIC4uLml0ZW1cbiAgfVxuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMocmVxdWVzdE9wdGlvbnMucGFyYW1zKVxuICBjb25zdCBkYXRhOiBGb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpXG4gIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGRhdGEuYXBwZW5kKGtleXNbaV0sIHJlcXVlc3RPcHRpb25zLnBhcmFtc1trZXlzW2ldXSlcbiAgfVxuICByZXF1ZXN0T3B0aW9ucy5wYXJhbXMgPSBkYXRhXG5cbiAgcmV0dXJuIGF3YWl0IHJlcXVlc3QodXJsLCByZXF1ZXN0T3B0aW9ucyBhcyBhbnkpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjaGVja0l0ZW1WZXJzaW9uIChcbiAgaXRlbTogSW1wb3J0QXBwT3B0aW9uLFxuICByZXF1ZXN0T3B0aW9uczogSUl0ZW1EYXRhT3B0aW9uc1xuKTogUHJvbWlzZTxJQ3JlYXRlSXRlbVJlc3BvbnNlPiB7XG4gIGNvbnN0IGJhc2VVcmwgPSBnZXRPcmlnaW5VcmwoKVxuXG4gIGNvbnN0IHVybCA9IGAke2Jhc2VVcmx9JHtnZXRVc2VyQ29udGVudFVybCgpfWNoZWNrSXRlbVZlcnNpb25gXG5cbiAgaWYgKCFpdGVtPy5hcHBaaXApIHtcbiAgICByZXR1cm4gUHJvbWlzZS5yZWplY3QoJ05vIGFwcCBmaWxlcycpXG4gIH1cblxuICByZXF1ZXN0T3B0aW9ucy5wYXJhbXMgPSB7XG4gICAgLi4ucmVxdWVzdE9wdGlvbnMucGFyYW1zLFxuICAgIC4uLml0ZW1cbiAgfVxuICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMocmVxdWVzdE9wdGlvbnMucGFyYW1zKVxuICBjb25zdCBkYXRhOiBGb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpXG4gIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgIGRhdGEuYXBwZW5kKGtleXNbaV0sIHJlcXVlc3RPcHRpb25zLnBhcmFtc1trZXlzW2ldXSlcbiAgfVxuICByZXF1ZXN0T3B0aW9ucy5wYXJhbXMgPSBkYXRhXG5cbiAgcmV0dXJuIGF3YWl0IHJlcXVlc3QodXJsLCByZXF1ZXN0T3B0aW9ucyBhcyBhbnkpXG59XG4iLCJpbXBvcnQgeyB0eXBlIElSZXF1ZXN0T3B0aW9ucyB9IGZyb20gJ0Blc3JpL2FyY2dpcy1yZXN0LXJlcXVlc3QnXG5pbXBvcnQgeyB0eXBlIElJdGVtIH0gZnJvbSAnQGVzcmkvYXJjZ2lzLXJlc3QtdHlwZXMnXG5pbXBvcnQgeyB0eXBlIElJdGVtRGF0YU9wdGlvbnMgfSBmcm9tICcuL2hlbHBlcnMnXG5pbXBvcnQgeyBnZXRPcmlnaW5VcmwsIGdldFVzZXJDb250ZW50VXJsLCBnZXRSZXF1ZXN0TWV0aG9kIH0gZnJvbSAnLi4vdXRpbCdcbmltcG9ydCB7IGdldEFwcFN0b3JlLCBwb3J0YWxVcmxVdGlscyB9IGZyb20gJ2ppbXUtY29yZSdcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRJdGVtRGF0YSAoXG4gIGlkOiBzdHJpbmcsXG4gIHJlcXVlc3RPcHRpb25zPzogSUl0ZW1EYXRhT3B0aW9ucyxcbiAgaXNBcmNHaXNPbmxpbmVSZXF1ZXN0ID0gZmFsc2Vcbik6IFByb21pc2U8YW55PiB7XG4gIGNvbnN0IGJhc2VVcmwgPSBnZXRPcmlnaW5VcmwoaXNBcmNHaXNPbmxpbmVSZXF1ZXN0KVxuICBjb25zdCB1cmwgPSBgJHtiYXNlVXJsfSR7Z2V0VXNlckNvbnRlbnRVcmwoaXNBcmNHaXNPbmxpbmVSZXF1ZXN0KX1pdGVtcy8ke2lkfS9kYXRhYFxuICAvLyBkZWZhdWx0IHRvIGEgR0VUIHJlcXVlc3RcbiAgY29uc3Qgb3B0aW9uczogSUl0ZW1EYXRhT3B0aW9ucyA9IHtcbiAgICAuLi57IHBhcmFtczoge30gfSxcbiAgICAuLi5yZXF1ZXN0T3B0aW9uc1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuZmlsZSkge1xuICAgIG9wdGlvbnMucGFyYW1zLmYgPSBudWxsXG4gIH1cbiAgaWYgKGlzQXJjR2lzT25saW5lUmVxdWVzdCAmJiAhaXNQb3J0YWxBR09MKCkpIHtcbiAgICBkZWxldGUgb3B0aW9ucy5hdXRoZW50aWNhdGlvblxuICB9XG4gIGNvbnN0IHJlcXVlc3QgPSBnZXRSZXF1ZXN0TWV0aG9kKGlzQXJjR2lzT25saW5lUmVxdWVzdClcbiAgcmV0dXJuIGF3YWl0IHJlcXVlc3QodXJsLCBvcHRpb25zKS5jYXRjaChlcnIgPT4ge1xuICAgIC8qIGlmIHRoZSBpdGVtIGRvZXNuJ3QgaW5jbHVkZSBkYXRhLCB0aGUgcmVzcG9uc2Ugd2lsbCBiZSBlbXB0eVxuICAgICAgIGFuZCB0aGUgaW50ZXJuYWwgY2FsbCB0byByZXNwb25zZS5qc29uKCkgd2lsbCBmYWlsICovXG4gICAgY29uc3QgZW1wdHlSZXNwb25zZUVyciA9IC9VbmV4cGVjdGVkIGVuZCBvZiAoSlNPTiBpbnB1dHxkYXRhIGF0IGxpbmUgMSBjb2x1bW4gMSkvaVxuICAgIC8qIGlzdGFuYnVsIGlnbm9yZSBlbHNlICovXG4gICAgaWYgKCFlbXB0eVJlc3BvbnNlRXJyLnRlc3QoZXJyLm1lc3NhZ2UpKSB7XG4gICAgICB0aHJvdyBlcnJcbiAgICB9XG4gIH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRJdGVtIChcbiAgaWQ6IHN0cmluZyxcbiAgcmVxdWVzdE9wdGlvbnM/OiBJUmVxdWVzdE9wdGlvbnMsXG4gIGlzQXJjR2lzT25saW5lUmVxdWVzdCA9IGZhbHNlXG4pOiBQcm9taXNlPElJdGVtPiB7XG4gIGNvbnN0IGJhc2VVcmwgPSBnZXRPcmlnaW5VcmwoaXNBcmNHaXNPbmxpbmVSZXF1ZXN0KVxuICAvLyBjb25zdCB1c2VycyA9IGlzQXJjR2lzT25saW5lUmVxdWVzdCA/ICcnIDogJ3VzZXJzLydcblxuICBjb25zdCB1cmwgPSBgJHtiYXNlVXJsfSR7Z2V0VXNlckNvbnRlbnRVcmwoaXNBcmNHaXNPbmxpbmVSZXF1ZXN0KX1pdGVtcy8ke2lkfWBcblxuICAvLyBkZWZhdWx0IHRvIGEgR0VUIHJlcXVlc3RcbiAgY29uc3Qgb3B0aW9uczogSVJlcXVlc3RPcHRpb25zID0ge1xuICAgIC4uLnJlcXVlc3RPcHRpb25zXG4gIH1cbiAgaWYgKGlzQXJjR2lzT25saW5lUmVxdWVzdCAmJiAhaXNQb3J0YWxBR09MKCkpIHtcbiAgICBkZWxldGUgb3B0aW9ucy5hdXRoZW50aWNhdGlvblxuICB9XG4gIGNvbnN0IHJlcXVlc3QgPSBnZXRSZXF1ZXN0TWV0aG9kKGlzQXJjR2lzT25saW5lUmVxdWVzdClcbiAgcmV0dXJuIGF3YWl0IHJlcXVlc3QodXJsLCBvcHRpb25zKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0SXRlbVJlc291cmNlcyAoXG4gIGlkOiBzdHJpbmcsXG4gIHJlcXVlc3RPcHRpb25zPzogSVJlcXVlc3RPcHRpb25zLFxuICBpc0FyY0dpc09ubGluZVJlcXVlc3QgPSBmYWxzZVxuKTogUHJvbWlzZTxhbnk+IHtcbiAgY29uc3QgdXJsID0gYCR7Z2V0T3JpZ2luVXJsKGlzQXJjR2lzT25saW5lUmVxdWVzdCl9JHtnZXRVc2VyQ29udGVudFVybChpc0FyY0dpc09ubGluZVJlcXVlc3QpfWl0ZW1zLyR7aWR9L3Jlc291cmNlc2BcblxuICAvLyBtaXggaW4gdXNlciBzdXBwbGllZCBwYXJhbXNcbiAgcmVxdWVzdE9wdGlvbnMucGFyYW1zID0ge1xuICAgIC4uLnJlcXVlc3RPcHRpb25zLnBhcmFtcyxcbiAgICBudW06IDEwMDBcbiAgfVxuICBpZiAoaXNBcmNHaXNPbmxpbmVSZXF1ZXN0ICYmICFpc1BvcnRhbEFHT0woKSkge1xuICAgIGRlbGV0ZSByZXF1ZXN0T3B0aW9ucy5hdXRoZW50aWNhdGlvblxuICB9XG4gIGNvbnN0IHJlcXVlc3QgPSBnZXRSZXF1ZXN0TWV0aG9kKGlzQXJjR2lzT25saW5lUmVxdWVzdClcbiAgcmV0dXJuIGF3YWl0IHJlcXVlc3QodXJsLCByZXF1ZXN0T3B0aW9ucywgJ0dFVCcpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRJdGVtUmVzb3VyY2UgKFxuICBpZDogc3RyaW5nLFxuICByZXF1ZXN0T3B0aW9ucz86IElSZXF1ZXN0T3B0aW9ucyxcbiAgaXNBcmNHaXNPbmxpbmVSZXF1ZXN0ID0gZmFsc2Vcbik6IFByb21pc2U8YW55PiB7XG4gIGNvbnN0IHJlc291cmNlTmFtZSA9IChyZXF1ZXN0T3B0aW9ucyBhcyBhbnkpLmZpbGVOYW1lXG4gIGNvbnN0IHVybCA9IGAke2dldE9yaWdpblVybChpc0FyY0dpc09ubGluZVJlcXVlc3QpfSR7Z2V0VXNlckNvbnRlbnRVcmwoaXNBcmNHaXNPbmxpbmVSZXF1ZXN0KX1pdGVtcy8ke2lkfS9yZXNvdXJjZXMvJHtyZXNvdXJjZU5hbWV9YFxuXG4gIGlmIChpc0FyY0dpc09ubGluZVJlcXVlc3QgJiYgIWlzUG9ydGFsQUdPTCgpKSB7XG4gICAgZGVsZXRlIHJlcXVlc3RPcHRpb25zLmF1dGhlbnRpY2F0aW9uXG4gIH1cbiAgY29uc3QgcmVxdWVzdCA9IGdldFJlcXVlc3RNZXRob2QoaXNBcmNHaXNPbmxpbmVSZXF1ZXN0KVxuICByZXR1cm4gYXdhaXQgcmVxdWVzdCh1cmwsIHJlcXVlc3RPcHRpb25zLCAnR0VUJylcbn1cblxuZnVuY3Rpb24gaXNQb3J0YWxBR09MICgpIHtcbiAgY29uc3QgcG9ydGFsVXJsID0gZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpLnBvcnRhbFVybFxuICByZXR1cm4gcG9ydGFsVXJsVXRpbHMuaXNBR09MRG9tYWluKHBvcnRhbFVybClcbn1cbiIsIi8qIENvcHlyaWdodCAoYykgMjAxNy0yMDE4IEVudmlyb25tZW50YWwgU3lzdGVtcyBSZXNlYXJjaCBJbnN0aXR1dGUsIEluYy5cbiAqIEFwYWNoZS0yLjAgKi9cblxuaW1wb3J0IHsgdHlwZSBJUmVxdWVzdE9wdGlvbnMgfSBmcm9tICdAZXNyaS9hcmNnaXMtcmVzdC1yZXF1ZXN0J1xuaW1wb3J0IHsgdHlwZSBJSXRlbUFkZCwgdHlwZSBJSXRlbVVwZGF0ZSwgdHlwZSBJSXRlbSB9IGZyb20gJ0Blc3JpL2FyY2dpcy1yZXN0LXR5cGVzJ1xuaW1wb3J0IHsgdHlwZSBJVXNlclJlcXVlc3RPcHRpb25zIH0gZnJvbSAnQGVzcmkvYXJjZ2lzLXJlc3QtYXV0aCdcblxuLyoqXG4gKiBCYXNlIG9wdGlvbnMgaW50ZXJmYWNlIGZvciBtYWtpbmcgYXV0aGVudGljYXRlZCByZXF1ZXN0cyBmb3IgaXRlbXMuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgSVVzZXJJdGVtT3B0aW9ucyBleHRlbmRzIElVc2VyUmVxdWVzdE9wdGlvbnMge1xuICAvKipcbiAgICogVW5pcXVlIGlkZW50aWZpZXIgb2YgdGhlIGl0ZW0uXG4gICAqL1xuICBpZDogc3RyaW5nXG4gIC8qKlxuICAgKiBJdGVtIG93bmVyIHVzZXJuYW1lLiBJZiBub3QgcHJlc2VudCwgYGF1dGhlbnRpY2F0aW9uLnVzZXJuYW1lYCBpcyB1dGlsaXplZC5cbiAgICovXG4gIG93bmVyPzogc3RyaW5nXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSUZvbGRlcklkT3B0aW9ucyBleHRlbmRzIElVc2VyUmVxdWVzdE9wdGlvbnMge1xuICAvKipcbiAgICogVW5pcXVlIGlkZW50aWZpZXIgb2YgdGhlIGZvbGRlci5cbiAgICovXG4gIGZvbGRlcklkOiBzdHJpbmdcbiAgLyoqXG4gICAqIEl0ZW0gb3duZXIgdXNlcm5hbWUuIElmIG5vdCBwcmVzZW50LCBgYXV0aGVudGljYXRpb24udXNlcm5hbWVgIGlzIHV0aWxpemVkLlxuICAgKi9cbiAgb3duZXI/OiBzdHJpbmdcbn1cblxuZXhwb3J0IHR5cGUgSXRlbVJlbGF0aW9uc2hpcFR5cGUgPVxuICB8ICdNYXAyU2VydmljZSdcbiAgfCAnV01BMkNvZGUnXG4gIHwgJ01hcDJGZWF0dXJlQ29sbGVjdGlvbidcbiAgfCAnTW9iaWxlQXBwMkNvZGUnXG4gIHwgJ1NlcnZpY2UyRGF0YSdcbiAgfCAnU2VydmljZTJTZXJ2aWNlJ1xuICB8ICdNYXAyQXBwQ29uZmlnJ1xuICB8ICdJdGVtMkF0dGFjaG1lbnQnXG4gIHwgJ0l0ZW0yUmVwb3J0J1xuICB8ICdMaXN0ZWQyUHJvdmlzaW9uZWQnXG4gIHwgJ1N0eWxlMlN0eWxlJ1xuICB8ICdTZXJ2aWNlMlN0eWxlJ1xuICB8ICdTdXJ2ZXkyU2VydmljZSdcbiAgfCAnU3VydmV5MkRhdGEnXG4gIHwgJ1NlcnZpY2UyUm91dGUnXG4gIHwgJ0FyZWEyUGFja2FnZSdcbiAgfCAnTWFwMkFyZWEnXG4gIHwgJ1NlcnZpY2UyTGF5ZXInXG4gIHwgJ0FyZWEyQ3VzdG9tUGFja2FnZSdcblxuZXhwb3J0IGludGVyZmFjZSBJSXRlbVJlbGF0aW9uc2hpcE9wdGlvbnMgZXh0ZW5kcyBJUmVxdWVzdE9wdGlvbnMge1xuICAvKipcbiAgICogVW5pcXVlIGlkZW50aWZpZXIgb2YgdGhlIGl0ZW0uXG4gICAqL1xuICBpZDogc3RyaW5nXG4gIC8qKlxuICAgKiBUaGUgdHlwZSBvZiByZWxhdGlvbnNoaXAgYmV0d2VlbiB0aGUgdHdvIGl0ZW1zLlxuICAgKi9cbiAgcmVsYXRpb25zaGlwVHlwZTogSXRlbVJlbGF0aW9uc2hpcFR5cGUgfCBJdGVtUmVsYXRpb25zaGlwVHlwZVtdXG4gIC8qKlxuICAgKiBUaGUgZGlyZWN0aW9uIG9mIHRoZSByZWxhdGlvbnNoaXAuIEVpdGhlciBmb3J3YXJkIChmcm9tIG9yaWdpbiAtPiBkZXN0aW5hdGlvbikgb3IgcmV2ZXJzZSAoZnJvbSBkZXN0aW5hdGlvbiAtPiBvcmlnaW4pLlxuICAgKi9cbiAgZGlyZWN0aW9uPzogJ2ZvcndhcmQnIHwgJ3JldmVyc2UnXG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU1hbmFnZUl0ZW1SZWxhdGlvbnNoaXBPcHRpb25zIGV4dGVuZHMgSVVzZXJSZXF1ZXN0T3B0aW9ucyB7XG4gIG9yaWdpbkl0ZW1JZDogc3RyaW5nXG4gIGRlc3RpbmF0aW9uSXRlbUlkOiBzdHJpbmdcbiAgcmVsYXRpb25zaGlwVHlwZTogSXRlbVJlbGF0aW9uc2hpcFR5cGVcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJSXRlbVJlc291cmNlT3B0aW9ucyBleHRlbmRzIElVc2VySXRlbU9wdGlvbnMge1xuICAvKipcbiAgICogTmV3IHJlc291cmNlIGZpbGVuYW1lLlxuICAgKi9cbiAgbmFtZT86IHN0cmluZ1xuICAvKipcbiAgICogVGV4dCBpbnB1dCB0byBiZSBhZGRlZCBhcyBhIGZpbGUgcmVzb3VyY2UuXG4gICAqL1xuICBjb250ZW50Pzogc3RyaW5nXG4gIC8qKlxuICAgKiBDb250cm9scyB3aGV0aGVyIGFjY2VzcyB0byB0aGUgZmlsZSByZXNvdXJjZSBpcyByZXN0cmljdGVkIHRvIHRoZSBvd25lciBvciBpbmhlcml0ZWQgZnJvbSB0aGUgc2hhcmluZyBwZXJtaXNzaW9ucyBzZXQgZm9yIHRoZSBhc3NvY2lhdGVkIGl0ZW0uXG4gICAqL1xuICBwcml2YXRlPzogYm9vbGVhblxuICAvKipcbiAgICogT2JqZWN0IHRvIHN0b3JlXG4gICAqL1xuICByZXNvdXJjZT86IGFueVxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElDcmVhdGVVcGRhdGVJdGVtT3B0aW9ucyBleHRlbmRzIElVc2VyUmVxdWVzdE9wdGlvbnMge1xuICAvKipcbiAgICogVGhlIG93bmVyIG9mIHRoZSBpdGVtLiBJZiB0aGlzIHByb3BlcnR5IGlzIG5vdCBwcmVzZW50LCBgaXRlbS5vd25lcmAgd2lsbCBiZSBwYXNzZWQsIG9yIGxhc3RseSBgYXV0aGVudGljYXRpb24udXNlcm5hbWVgLlxuICAgKi9cbiAgb3duZXI/OiBzdHJpbmdcbiAgLyoqXG4gICAqIElkIG9mIHRoZSBmb2xkZXIgdG8gaG91c2UgdGhlIGl0ZW0uXG4gICAqL1xuICBmb2xkZXJJZD86IHN0cmluZ1xuICAvKipcbiAgICogVGhlIGZpbGUgdG8gYmUgdXBsb2FkZWQuIElmIHVwbG9hZGluZyBhIGZpbGUsIHRoZSByZXF1ZXN0IG11c3QgYmUgYSBtdWx0aXBhcnQgcmVxdWVzdC5cbiAgICovXG4gIGZpbGU/OiBhbnlcbiAgZGF0YVVybD86IHN0cmluZ1xuICAvKipcbiAgICogVGhlIHRleHQgY29udGVudCBmb3IgdGhlIGl0ZW0gdG8gYmUgc3VibWl0dGVkLlxuICAgKi9cbiAgdGV4dD86IHN0cmluZ1xuICAvKipcbiAgICogSWYgdHJ1ZSwgdGhlIGZpbGUgaXMgdXBsb2FkZWQgYXN5bmNocm9ub3VzbHkuIElmIGZhbHNlLCB0aGUgZmlsZSBpcyB1cGxvYWRlZCBzeW5jaHJvbm91c2x5LlxuICAgKi9cbiAgYXN5bmM/OiBib29sZWFuXG4gIC8qKlxuICAgKiBJZiB0cnVlLCB0aGUgZmlsZSBpcyB1cGxvYWRlZCBpbiBtdWx0aXBsZSBwYXJ0cy5cbiAgICovXG4gIG11bHRpcGFydD86IGJvb2xlYW5cbiAgLyoqXG4gICAqIFRoZSBmaWxlbmFtZSBiZWluZyB1cGxvYWRlZCBpbiBtdWx0aXBhcnQgbW9kZS4gUmVxdWlyZWQgaWYgbXVsdGlwYXJ0PXRydWUuXG4gICAqL1xuICBmaWxlbmFtZT86IHN0cmluZ1xuICAvKipcbiAgICogSWYgdHJ1ZSwgb3ZlcndyaXRlIHRoZSBleGlzdGluZyBmaWxlLlxuICAgKi9cbiAgb3ZlcndyaXRlPzogYm9vbGVhblxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElJdGVtRGF0YU9wdGlvbnMgZXh0ZW5kcyBJUmVxdWVzdE9wdGlvbnMge1xuICAvKipcbiAgICogVXNlZCB0byByZXF1ZXN0IGJpbmFyeSBkYXRhLlxuICAgKi9cbiAgZmlsZT86IGJvb2xlYW5cbn1cblxuZXhwb3J0IGludGVyZmFjZSBJSXRlbVBhcnRPcHRpb25zIGV4dGVuZHMgSVVzZXJJdGVtT3B0aW9ucyB7XG4gIC8qKlxuICAgKiBUaGUgZmlsZSBwYXJ0IHRvIGJlIHVwbG9hZGVkLlxuICAgKi9cbiAgZmlsZTogYW55XG4gIHBhcnROdW06IG51bWJlclxufVxuXG5leHBvcnQgaW50ZXJmYWNlIElVcGRhdGVJdGVtUmVzcG9uc2Uge1xuICBzdWNjZXNzOiBib29sZWFuXG4gIGlkOiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJSXRlbVJlc291cmNlUmVzcG9uc2Uge1xuICBzdWNjZXNzOiBib29sZWFuXG4gIGl0ZW1JZDogc3RyaW5nXG4gIG93bmVyOiBzdHJpbmdcbiAgZm9sZGVyOiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJQWRkRm9sZGVyUmVzcG9uc2Uge1xuICAvKipcbiAgICogU3VjY2VzcyBvciBmYWlsdXJlIG9mIHJlcXVlc3QuXG4gICAqL1xuICBzdWNjZXNzOiBib29sZWFuXG4gIC8qKlxuICAgKiBJbmZvcm1hdGlvbiBhYm91dCBjcmVhdGVkIGZvbGRlcjogaXRzIGFscGhhbnVtZXJpYyBpZCwgbmFtZSwgYW5kIG93bmVyJ3MgbmFtZS5cbiAgICovXG4gIGZvbGRlcjoge1xuICAgIGlkOiBzdHJpbmdcbiAgICB0aXRsZTogc3RyaW5nXG4gICAgdXNlcm5hbWU6IHN0cmluZ1xuICB9XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgSU1vdmVJdGVtUmVzcG9uc2Uge1xuICAvKipcbiAgICogU3VjY2VzcyBvciBmYWlsdXJlIG9mIHJlcXVlc3QuXG4gICAqL1xuICBzdWNjZXNzOiBib29sZWFuXG4gIC8qKlxuICAgKiBBbHBoYW51bWVyaWMgaWQgb2YgbW92ZWQgaXRlbS5cbiAgICovXG4gIGl0ZW1JZDogc3RyaW5nXG4gIC8qKlxuICAgKiBOYW1lIG9mIG93bmVyIG9mIGl0ZW0uXG4gICAqL1xuICBvd25lcjogc3RyaW5nXG4gIC8qKlxuICAgKiBBbHBoYW51bWVyaWMgaWQgb2YgZm9sZGVyIG5vdyBob3VzaW5nIGl0ZW0uXG4gICAqL1xuICBmb2xkZXI6IHN0cmluZ1xufVxuXG4vKipcbiAqIFNlcmlhbGl6ZSBhbiBpdGVtIGFuZCBpdHMgZGF0YSBpbnRvIGEganNvbiBmb3JtYXQgYWNjZXB0ZWQgYnkgdGhlIFBvcnRhbCBBUEkgZm9yIGNyZWF0ZSBhbmQgdXBkYXRlIG9wZXJhdGlvbnNcbiAqXG4gKiBAcGFyYW0gaXRlbSBJdGVtIHRvIGJlIHNlcmlhbGl6ZWRcbiAqIEByZXR1cm5zIGEgZm9ybWF0dGVkIGpzb24gb2JqZWN0IHRvIGJlIHNlbnQgdG8gUG9ydGFsXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBzZXJpYWxpemVJdGVtIChpdGVtOiBJSXRlbUFkZCB8IElJdGVtVXBkYXRlIHwgSUl0ZW0pOiBhbnkge1xuICAvLyBjcmVhdGUgYSBjbG9uZSBzbyB3ZSdyZSBub3QgbWVzc2luZyB3aXRoIHRoZSBvcmlnaW5hbFxuICBjb25zdCBjbG9uZSA9IEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoaXRlbSkpXG5cbiAgLy8gYmluYXJ5IGRhdGEgbmVlZHMgUE9TVGVkIGFzIGEgYGZpbGVgXG4gIC8vIEpTT04gb2JqZWN0IGxpdGVyYWxzIHNob3VsZCBiZSBwYXNzZWQgYXMgYHRleHRgLlxuICBpZiAoY2xvbmUuZGF0YSkge1xuICAgICh0eXBlb2YgQmxvYiAhPT0gJ3VuZGVmaW5lZCcgJiYgaXRlbS5kYXRhIGluc3RhbmNlb2YgQmxvYikgfHxcbiAgICAvLyBOb2RlLmpzIGRvZXNuJ3QgaW1wbGVtZW50IEJsb2JcbiAgICBpdGVtLmRhdGEuY29uc3RydWN0b3IubmFtZSA9PT0gJ1JlYWRTdHJlYW0nXG4gICAgICA/IChjbG9uZS5maWxlID0gaXRlbS5kYXRhKVxuICAgICAgOiAoY2xvbmUudGV4dCA9IGl0ZW0uZGF0YSlcbiAgICBkZWxldGUgY2xvbmUuZGF0YVxuICB9XG4gIHJldHVybiBjbG9uZVxufVxuXG4vKipcbiAqIHJlcXVlc3RPcHRpb25zLm93bmVyIGlzIGdpdmVuIHByaW9yaXR5LCByZXF1ZXN0T3B0aW9ucy5pdGVtLm93bmVyIHdpbGwgYmUgY2hlY2tlZCBuZXh0LiBJZiBuZWl0aGVyIGFyZSBwcmVzZW50LCBhdXRoZW50aWNhdGlvbi51c2VybmFtZSB3aWxsIGJlIGFzc3VtZWQuXG4gKi9cbmV4cG9ydCBmdW5jdGlvbiBkZXRlcm1pbmVPd25lciAocmVxdWVzdE9wdGlvbnM6IGFueSk6IHN0cmluZyB7XG4gIGlmIChyZXF1ZXN0T3B0aW9ucy5vd25lcikge1xuICAgIHJldHVybiByZXF1ZXN0T3B0aW9ucy5vd25lclxuICB9XG4gIGlmIChyZXF1ZXN0T3B0aW9ucy5pdGVtICYmIHJlcXVlc3RPcHRpb25zLml0ZW0ub3duZXIpIHtcbiAgICByZXR1cm4gcmVxdWVzdE9wdGlvbnMuaXRlbS5vd25lclxuICB9IGVsc2Uge1xuICAgIHJldHVybiByZXF1ZXN0T3B0aW9ucy5hdXRoZW50aWNhdGlvbi51c2VybmFtZVxuICB9XG59XG4iLCJpbXBvcnQge1xuICB0eXBlIElVc2VySXRlbU9wdGlvbnMsIHR5cGUgSUl0ZW1SZXNvdXJjZU9wdGlvbnNcbn0gZnJvbSAnLi9oZWxwZXJzJ1xuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJy4uL3JlcXVlc3QnXG5pbXBvcnQgeyBnZXRPcmlnaW5VcmwsIGdldFVzZXJDb250ZW50VXJsLCBnZXRVc2VyTmFtZSB9IGZyb20gJy4uL3V0aWwnXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZW1vdmVJdGVtIChcbiAgcmVxdWVzdE9wdGlvbnM6IElVc2VySXRlbU9wdGlvbnNcbik6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuLCBpdGVtSWQ6IHN0cmluZyB9PiB7XG4gIGNvbnN0IHVzZXJOYW1lID0gZ2V0VXNlck5hbWUoKVxuICBjb25zdCBiYXNlVXJsID0gZ2V0T3JpZ2luVXJsKCk7XG4gIChyZXF1ZXN0T3B0aW9ucyBhcyBhbnkpLnVzZXJOYW1lID0gdXNlck5hbWVcblxuICBjb25zdCB1cmwgPSBgJHtiYXNlVXJsfSR7Z2V0VXNlckNvbnRlbnRVcmwoKX1pdGVtcy8ke1xuICAgIHJlcXVlc3RPcHRpb25zLmlkXG4gIH0vZGVsZXRlYFxuXG4gIHJldHVybiBhd2FpdCByZXF1ZXN0KHVybCwgcmVxdWVzdE9wdGlvbnMpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZW1vdmVJdGVtUmVzb3VyY2UgKFxuICByZXF1ZXN0T3B0aW9uczogSUl0ZW1SZXNvdXJjZU9wdGlvbnNcbik6IFByb21pc2U8eyBzdWNjZXNzOiBib29sZWFuIH0+IHtcbiAgY29uc3QgdXJsID0gYCR7Z2V0T3JpZ2luVXJsKCl9JHtnZXRVc2VyQ29udGVudFVybCgpfWl0ZW1zLyR7XG4gICAgcmVxdWVzdE9wdGlvbnMuaWRcbiAgfS9yZW1vdmVSZXNvdXJjZXNgXG5cbiAgLy8gbWl4IGluIHVzZXIgc3VwcGxpZWQgcGFyYW1zXG4gIHJlcXVlc3RPcHRpb25zLnBhcmFtcyA9IHtcbiAgICAuLi5yZXF1ZXN0T3B0aW9ucy5wYXJhbXMsXG4gICAgcmVzb3VyY2U6IHJlcXVlc3RPcHRpb25zLnJlc291cmNlXG4gIH1cbiAgcmV0dXJuIGF3YWl0IHJlcXVlc3QodXJsLCByZXF1ZXN0T3B0aW9ucylcbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIHByZWZlci1jb25zdCAqL1xuaW1wb3J0IHsgZXNyaSB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IHR5cGUgSVJlcXVlc3RPcHRpb25zIH0gZnJvbSAnQGVzcmkvYXJjZ2lzLXJlc3QtcmVxdWVzdCdcbmltcG9ydCB7IHR5cGUgSUl0ZW0sIHR5cGUgSUdyb3VwLCB0eXBlIElVc2VyIH0gZnJvbSAnQGVzcmkvYXJjZ2lzLXJlc3QtdHlwZXMnXG5pbXBvcnQgeyB0eXBlIElTZWFyY2hPcHRpb25zLCB0eXBlIFNlYXJjaFF1ZXJ5QnVpbGRlciwgdHlwZSBJU2VhcmNoUmVzdWx0IH0gZnJvbSAnQGVzcmkvYXJjZ2lzLXJlc3QtcG9ydGFsJ1xuaW1wb3J0IHsgU2VhcmNoVHlwZSB9IGZyb20gJy4uLy4uL3R5cGUnXG5pbXBvcnQgeyByZXF1ZXN0IH0gZnJvbSAnLi4vaW5kZXgnXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2VhcmNoSXRlbXMgKFxuICBzZWFyY2g6IHN0cmluZyB8IElTZWFyY2hPcHRpb25zIHwgU2VhcmNoUXVlcnlCdWlsZGVyLFxuICBzZWFyY2hUeXBlID0gU2VhcmNoVHlwZS5PdGhlclxuKTogUHJvbWlzZTxJU2VhcmNoUmVzdWx0PElJdGVtPj4ge1xuICByZXR1cm4gYXdhaXQgZ2VuZXJpY1NlYXJjaDxJSXRlbT4oc2VhcmNoLCAnaXRlbScsIHNlYXJjaFR5cGUpXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdlbmVyaWNTZWFyY2g8VCBleHRlbmRzIElJdGVtIHwgSUdyb3VwIHwgSVVzZXI+IChcbiAgc2VhcmNoOiBzdHJpbmcgfCBJU2VhcmNoT3B0aW9ucyB8IFNlYXJjaFF1ZXJ5QnVpbGRlcixcbiAgc2VhcmNoUmVxdWVzdFR5cGU6ICdpdGVtJyB8ICdncm91cCcgfCAndXNlcicsXG4gIHNlYXJjaFR5cGUgPSBTZWFyY2hUeXBlLk90aGVyXG4pOiBQcm9taXNlPElTZWFyY2hSZXN1bHQ8YW55Pj4ge1xuICBsZXQgdXJsOiBzdHJpbmdcbiAgbGV0IG9wdGlvbnM6IElSZXF1ZXN0T3B0aW9uc1xuICBjb25zdCBvcmlnaW5VcmwgPSBzZWFyY2hUeXBlID09PSBTZWFyY2hUeXBlLkFHT0wgPyAnaHR0cHM6Ly93d3cuYXJjZ2lzLmNvbScgOiB3aW5kb3cubG9jYXRpb24ub3JpZ2luXG4gIHVybCA9IGAke29yaWdpblVybH0vc2hhcmluZy9yZXN0L3NlYXJjaGBcbiAgaWYgKHR5cGVvZiBzZWFyY2ggPT09ICdzdHJpbmcnIHx8IHNlYXJjaCBpbnN0YW5jZW9mIGVzcmkucmVzdFBvcnRhbC5TZWFyY2hRdWVyeUJ1aWxkZXIpIHtcbiAgICBvcHRpb25zID0ge1xuICAgICAgcGFyYW1zOiB7XG4gICAgICAgIHE6IHNlYXJjaFxuICAgICAgfVxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBvcHRpb25zID0gZXNyaS5yZXN0UmVxdWVzdC5hcHBlbmRDdXN0b21QYXJhbXM8SVNlYXJjaE9wdGlvbnM+KFxuICAgICAgeyAuLi5zZWFyY2gsIGY6ICdqc29uJyB9LFxuICAgICAgWydxJywgJ251bScsICdzdGFydCcsICdzb3J0RmllbGQnLCAnc29ydE9yZGVyJywgJ3BvcnRhbFVybCcsICdmJ11cbiAgICApXG4gIH1cblxuICAvLyBzZW5kIHRoZSByZXF1ZXN0XG4gIHJldHVybiByZXF1ZXN0KHVybCwgb3B0aW9ucywgJ0dFVCcpLnRoZW4ociA9PiB7XG4gICAgaWYgKHIubmV4dFN0YXJ0ICYmIHIubmV4dFN0YXJ0ICE9PSAtMSkge1xuICAgICAgci5uZXh0UGFnZSA9IGFzeW5jIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgbGV0IG5ld09wdGlvbnM6IElTZWFyY2hPcHRpb25zXG5cbiAgICAgICAgaWYgKFxuICAgICAgICAgIHR5cGVvZiBzZWFyY2ggPT09ICdzdHJpbmcnIHx8XG4gICAgICAgICAgc2VhcmNoIGluc3RhbmNlb2YgZXNyaS5yZXN0UG9ydGFsLlNlYXJjaFF1ZXJ5QnVpbGRlclxuICAgICAgICApIHtcbiAgICAgICAgICBuZXdPcHRpb25zID0ge1xuICAgICAgICAgICAgcTogc2VhcmNoLFxuICAgICAgICAgICAgc3RhcnQ6IHIubmV4dFN0YXJ0XG4gICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG5ld09wdGlvbnMgPSBzZWFyY2hcbiAgICAgICAgICBuZXdPcHRpb25zLnN0YXJ0ID0gci5uZXh0U3RhcnRcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBhd2FpdCBnZW5lcmljU2VhcmNoPFQ+KG5ld09wdGlvbnMsIHNlYXJjaFJlcXVlc3RUeXBlKVxuICAgICAgfVxuICAgIH1cblxuICAgIHJldHVybiByXG4gIH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZWFyY2hJdGVtc0J5UG9ydGFsVXJsIChcbiAgc2VhcmNoOiBzdHJpbmcgfCBJU2VhcmNoT3B0aW9ucyB8IFNlYXJjaFF1ZXJ5QnVpbGRlcixcbiAgcG9ydGFsVXJsOiBzdHJpbmdcbik6IFByb21pc2U8SVNlYXJjaFJlc3VsdDxJSXRlbT4+IHtcbiAgcmV0dXJuIGF3YWl0IGdlbmVyaWNTZWFyY2hCeVBvcnRhbFVybDxJSXRlbT4oc2VhcmNoLCBwb3J0YWxVcmwpXG59XG5cbmFzeW5jIGZ1bmN0aW9uIGdlbmVyaWNTZWFyY2hCeVBvcnRhbFVybDxUIGV4dGVuZHMgSUl0ZW0gfCBJR3JvdXAgfCBJVXNlcj4gKFxuICBzZWFyY2g6IHN0cmluZyB8IElTZWFyY2hPcHRpb25zIHwgU2VhcmNoUXVlcnlCdWlsZGVyLFxuICBwb3J0YWxVcmw6IHN0cmluZ1xuKTogUHJvbWlzZTxJU2VhcmNoUmVzdWx0PGFueT4+IHtcbiAgbGV0IHVybDogc3RyaW5nXG4gIGxldCBvcHRpb25zOiBJUmVxdWVzdE9wdGlvbnNcbiAgaWYgKCF1cmwpIFByb21pc2UucmVzb2x2ZShudWxsKVxuICB1cmwgPSBgJHtwb3J0YWxVcmx9L3NoYXJpbmcvcmVzdC9zZWFyY2hgXG4gIGlmICh0eXBlb2Ygc2VhcmNoID09PSAnc3RyaW5nJyB8fCBzZWFyY2ggaW5zdGFuY2VvZiBlc3JpLnJlc3RQb3J0YWwuU2VhcmNoUXVlcnlCdWlsZGVyKSB7XG4gICAgb3B0aW9ucyA9IHtcbiAgICAgIHBhcmFtczoge1xuICAgICAgICBxOiBzZWFyY2hcbiAgICAgIH1cbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgb3B0aW9ucyA9IGVzcmkucmVzdFJlcXVlc3QuYXBwZW5kQ3VzdG9tUGFyYW1zPElTZWFyY2hPcHRpb25zPihcbiAgICAgIHsgLi4uc2VhcmNoLCBmOiAnanNvbicgfSxcbiAgICAgIFsncScsICdudW0nLCAnc3RhcnQnLCAnc29ydEZpZWxkJywgJ3NvcnRPcmRlcicsICdwb3J0YWxVcmwnLCAnZiddXG4gICAgKVxuICB9XG5cbiAgLy8gc2VuZCB0aGUgcmVxdWVzdFxuICByZXR1cm4gcmVxdWVzdCh1cmwsIG9wdGlvbnMsICdHRVQnKS50aGVuKHIgPT4ge1xuICAgIGlmIChyLm5leHRTdGFydCAmJiByLm5leHRTdGFydCAhPT0gLTEpIHtcbiAgICAgIHIubmV4dFBhZ2UgPSBhc3luYyBmdW5jdGlvbiAoKSB7XG4gICAgICAgIGxldCBuZXdPcHRpb25zOiBJU2VhcmNoT3B0aW9uc1xuXG4gICAgICAgIGlmIChcbiAgICAgICAgICB0eXBlb2Ygc2VhcmNoID09PSAnc3RyaW5nJyB8fFxuICAgICAgICAgIHNlYXJjaCBpbnN0YW5jZW9mIGVzcmkucmVzdFBvcnRhbC5TZWFyY2hRdWVyeUJ1aWxkZXJcbiAgICAgICAgKSB7XG4gICAgICAgICAgbmV3T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHE6IHNlYXJjaCxcbiAgICAgICAgICAgIHN0YXJ0OiByLm5leHRTdGFydFxuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBuZXdPcHRpb25zID0gc2VhcmNoXG4gICAgICAgICAgbmV3T3B0aW9ucy5zdGFydCA9IHIubmV4dFN0YXJ0XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gYXdhaXQgZ2VuZXJpY1NlYXJjaEJ5UG9ydGFsVXJsPFQ+KG5ld09wdGlvbnMsICdpdGVtJylcbiAgICAgIH1cbiAgICB9XG5cbiAgICByZXR1cm4gclxuICB9KVxufVxuIiwiaW1wb3J0IHsgdHlwZSBJVXBkYXRlSXRlbU9wdGlvbnMsIHR5cGUgSVVwZGF0ZUl0ZW1SZXNwb25zZSwgdHlwZSBJSXRlbVJlc291cmNlT3B0aW9ucywgdHlwZSBJSXRlbVJlc291cmNlUmVzcG9uc2UgfSBmcm9tICdAZXNyaS9hcmNnaXMtcmVzdC1wb3J0YWwnXG5pbXBvcnQgeyBzZXJpYWxpemVJdGVtIH0gZnJvbSAnLi9oZWxwZXJzJ1xuaW1wb3J0IHsgcmVxdWVzdCB9IGZyb20gJy4uL3JlcXVlc3QnXG5pbXBvcnQgeyBnZXRPcmlnaW5VcmwsIGdldFVzZXJDb250ZW50VXJsLCBnZXRVc2VyTmFtZSB9IGZyb20gJy4uL3V0aWwnXG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVJdGVtIChcbiAgcmVxdWVzdE9wdGlvbnM6IElVcGRhdGVJdGVtT3B0aW9uc1xuKTogUHJvbWlzZTxJVXBkYXRlSXRlbVJlc3BvbnNlPiB7XG4gIGNvbnN0IHVzZXJOYW1lID0gZ2V0VXNlck5hbWUoKVxuICBjb25zdCBiYXNlVXJsID0gZ2V0T3JpZ2luVXJsKCk7XG4gIChyZXF1ZXN0T3B0aW9ucyBhcyBhbnkpLnVzZXJOYW1lID0gdXNlck5hbWVcblxuICBjb25zdCB1cmwgPSBgJHtiYXNlVXJsfSR7Z2V0VXNlckNvbnRlbnRVcmwoKX1pdGVtcy8ke1xuICAgIHJlcXVlc3RPcHRpb25zLml0ZW0uaWRcbiAgfS91cGRhdGVgXG5cbiAgLy8gc2VyaWFsaXplIHRoZSBpdGVtIGludG8gc29tZXRoaW5nIFBvcnRhbCB3aWxsIGFjY2VwdFxuICByZXF1ZXN0T3B0aW9ucy5wYXJhbXMgPSB7XG4gICAgLi4ucmVxdWVzdE9wdGlvbnMucGFyYW1zLFxuICAgIC4uLnNlcmlhbGl6ZUl0ZW0ocmVxdWVzdE9wdGlvbnMuaXRlbSlcbiAgfVxuXG4gIGlmIChyZXF1ZXN0T3B0aW9ucy5pdGVtLnRodW1ibmFpbCAmJiB0eXBlb2YgKHJlcXVlc3RPcHRpb25zLml0ZW0udGh1bWJuYWlsKSAhPT0gJ3N0cmluZycpIHtcbiAgICByZXF1ZXN0T3B0aW9ucy5wYXJhbXMgPSB7XG4gICAgICAuLi5yZXF1ZXN0T3B0aW9ucy5wYXJhbXMsXG4gICAgICAuLi5yZXF1ZXN0T3B0aW9ucy5pdGVtXG4gICAgfVxuICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhyZXF1ZXN0T3B0aW9ucy5wYXJhbXMpXG4gICAgY29uc3QgZGF0YTogRm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKVxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwga2V5cy5sZW5ndGg7IGkrKykge1xuICAgICAgZGF0YS5hcHBlbmQoa2V5c1tpXSwgcmVxdWVzdE9wdGlvbnMucGFyYW1zW2tleXNbaV1dKVxuICAgIH1cbiAgICByZXF1ZXN0T3B0aW9ucy5wYXJhbXMgPSBkYXRhXG4gIH1cblxuICByZXR1cm4gYXdhaXQgcmVxdWVzdCh1cmwsIHJlcXVlc3RPcHRpb25zKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlSXRlbVJlc291cmNlIChcbiAgcmVxdWVzdE9wdGlvbnM6IElJdGVtUmVzb3VyY2VPcHRpb25zXG4pOiBQcm9taXNlPElJdGVtUmVzb3VyY2VSZXNwb25zZT4ge1xuICBjb25zdCB1cmwgPSBgJHtnZXRPcmlnaW5VcmwoKX0ke2dldFVzZXJDb250ZW50VXJsKCl9aXRlbXMvJHtyZXF1ZXN0T3B0aW9ucy5pZH0vdXBkYXRlUmVzb3VyY2VzYFxuXG4gIC8vIG1peCBpbiB1c2VyIHN1cHBsaWVkIHBhcmFtc1xuICByZXF1ZXN0T3B0aW9ucy5wYXJhbXMgPSB7XG4gICAgZmlsZU5hbWU6IHJlcXVlc3RPcHRpb25zLm5hbWUsXG4gICAgdGV4dDogcmVxdWVzdE9wdGlvbnMuY29udGVudCxcbiAgICAuLi5yZXF1ZXN0T3B0aW9ucy5wYXJhbXMsXG4gICAgZmlsZTogcmVxdWVzdE9wdGlvbnMucmVzb3VyY2VcbiAgfVxuXG4gIGRlbGV0ZSByZXF1ZXN0T3B0aW9ucy5wYXJhbXMuZmlsZVxuICByZXF1ZXN0T3B0aW9ucy5wYXJhbXMuZmlsZSA9IHJlcXVlc3RPcHRpb25zLnJlc291cmNlXG5cbiAgLy8gb25seSBvdmVycmlkZSB0aGUgYWNjZXNzIHNwZWNpZmllZCBwcmV2aW91c2x5IGlmICdwcml2YXRlJyBpcyBwYXNzZWQgZXhwbGljaXRseVxuICBpZiAodHlwZW9mIHJlcXVlc3RPcHRpb25zLnByaXZhdGUgIT09ICd1bmRlZmluZWQnKSB7XG4gICAgcmVxdWVzdE9wdGlvbnMucGFyYW1zLmFjY2VzcyA9IHJlcXVlc3RPcHRpb25zLnByaXZhdGVcbiAgICAgID8gJ3ByaXZhdGUnXG4gICAgICA6ICdpbmhlcml0J1xuICB9XG5cbiAgY29uc3Qga2V5cyA9IE9iamVjdC5rZXlzKHJlcXVlc3RPcHRpb25zLnBhcmFtcylcbiAgY29uc3QgZGF0YTogRm9ybURhdGEgPSBuZXcgRm9ybURhdGEoKVxuICBmb3IgKGxldCBpID0gMDsgaSA8IGtleXMubGVuZ3RoOyBpKyspIHtcbiAgICBkYXRhLmFwcGVuZChrZXlzW2ldLCByZXF1ZXN0T3B0aW9ucy5wYXJhbXNba2V5c1tpXV0pXG4gIH1cbiAgcmVxdWVzdE9wdGlvbnMucGFyYW1zID0gZGF0YVxuXG4gIHJldHVybiBhd2FpdCByZXF1ZXN0KHVybCwgcmVxdWVzdE9wdGlvbnMpXG59XG4iLCJpbXBvcnQge1xuICB0eXBlIElSZXF1ZXN0T3B0aW9uc1xufSBmcm9tICdAZXNyaS9hcmNnaXMtcmVzdC1yZXF1ZXN0J1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVxdWVzdCAoXG4gIHVybDogc3RyaW5nLFxuICByZXF1ZXN0T3B0aW9uczogSVJlcXVlc3RPcHRpb25zID0geyBwYXJhbXM6IHsgZjogJ2pzb24nIH0gfSxcbiAgcmVxdWVzdFR5cGU6ICdHRVQnIHwgJ1BPU1QnID0gJ1BPU1QnXG4pOiBQcm9taXNlPGFueT4ge1xuICBpZiAocmVxdWVzdFR5cGUgPT09ICdHRVQnKSB7XG4gICAgY29uc3QgcmVxdWVzdFVybCA9IHVybCArIGVuY29kZVF1ZXJ5U3RyaW5nKHJlcXVlc3RPcHRpb25zLnBhcmFtcylcbiAgICByZXR1cm4gYXdhaXQgZmV0Y2gocmVxdWVzdFVybCwge1xuICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgfVxuICAgIH0pLnRoZW4oYXN5bmMgKHJlc3BvbnNlKSA9PiB7XG4gICAgICByZXR1cm4gYXdhaXQgcmVzcG9uc2UuanNvbigpXG4gICAgfSkudGhlbihhc3luYyBkYXRhID0+IHtcbiAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlc29sdmUoZGF0YSlcbiAgICB9KVxuICB9XG5cbiAgaWYgKHJlcXVlc3RUeXBlID09PSAnUE9TVCcpIHtcbiAgICBpZiAocmVxdWVzdE9wdGlvbnMucGFyYW1zICYmIHJlcXVlc3RPcHRpb25zLnBhcmFtcy5jb25zdHJ1Y3Rvci5uYW1lID09PSAnRm9ybURhdGEnKSB7XG4gICAgICByZXR1cm4gYXdhaXQgZmV0Y2godXJsLCB7XG4gICAgICAgIG1ldGhvZDogJ1BPU1QnLFxuICAgICAgICBib2R5OiByZXF1ZXN0T3B0aW9ucy5wYXJhbXMgYXMgRm9ybURhdGFcbiAgICAgIH0pLnRoZW4oYXN5bmMgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICAgIH0pLnRoZW4oYXN5bmMgZGF0YSA9PiB7XG4gICAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlc29sdmUoZGF0YSlcbiAgICAgIH0pXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBhd2FpdCBmZXRjaCh1cmwsIHtcbiAgICAgICAgbWV0aG9kOiAnUE9TVCcsXG4gICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgIH0sXG4gICAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlcXVlc3RPcHRpb25zLnBhcmFtcylcbiAgICAgIH0pLnRoZW4oYXN5bmMgKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgIHJldHVybiBhd2FpdCByZXNwb25zZS5qc29uKClcbiAgICAgIH0pLnRoZW4oYXN5bmMgZGF0YSA9PiB7XG4gICAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlc29sdmUoZGF0YSlcbiAgICAgIH0pXG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVqZWN0KG51bGwpXG59XG5cbmZ1bmN0aW9uIGVuY29kZVF1ZXJ5U3RyaW5nIChwYXJhbXMpIHtcbiAgaWYgKCFwYXJhbXMpIHtcbiAgICByZXR1cm4gJydcbiAgfVxuXG4gIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhwYXJhbXMpXG4gIHJldHVybiBrZXlzLmxlbmd0aFxuICAgID8gJz8nICsga2V5c1xuICAgICAgLm1hcChrZXkgPT4gZW5jb2RlVVJJQ29tcG9uZW50KGtleSkgK1xuICAgICAgICAgICAgICAnPScgKyBlbmNvZGVVUklDb21wb25lbnQocGFyYW1zW2tleV0pKVxuICAgICAgLmpvaW4oJyYnKVxuICAgIDogJydcbn1cbiIsImltcG9ydCB7IGdldEFwcFN0b3JlLCB1cmxVdGlscywgZXNyaSB9IGZyb20gJ2ppbXUtY29yZSdcbmltcG9ydCB7IHJlcXVlc3QgfSBmcm9tICcuL2luZGV4J1xuXG5jb25zdCByZXN0UmVxdWVzdCA9IGVzcmkucmVzdFJlcXVlc3QucmVxdWVzdFxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0T3JpZ2luVXJsIChpc0FyY0dpc09ubGluZVJlcXVlc3QgPSBmYWxzZSkge1xuICBpZiAoaXNBcmNHaXNPbmxpbmVSZXF1ZXN0KSB7XG4gICAgcmV0dXJuIHVybFV0aWxzLmdldEFyY2dpc09ubGluZVVybCgpXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHdpbmRvdy5sb2NhdGlvbi5vcmlnaW5cbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXNlckNvbnRlbnRVcmwgKGlzTm90Q29udGFpblVzZXJzID0gZmFsc2UpIHtcbiAgaWYgKGlzTm90Q29udGFpblVzZXJzKSB7XG4gICAgcmV0dXJuICcvc2hhcmluZy9yZXN0L2NvbnRlbnQvJ1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAnL3NoYXJpbmcvcmVzdC9jb250ZW50L3VzZXJzLydcbiAgfVxufVxuXG5leHBvcnQgZnVuY3Rpb24gZ2V0VXNlck5hbWUgKCkge1xuICByZXR1cm4gZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpLnVzZXI/LnVzZXJuYW1lXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRSZXF1ZXN0TWV0aG9kIChpc0FyY0dpc09ubGluZVJlcXVlc3QgPSBmYWxzZSkge1xuICByZXR1cm4gaXNBcmNHaXNPbmxpbmVSZXF1ZXN0ID8gcmVzdFJlcXVlc3QgOiByZXF1ZXN0XG59XG4iLCJpbXBvcnQgeyBlc3JpLCBnZXRBcHBTdG9yZSwgcG9ydGFsVXJsVXRpbHMsIHVybFV0aWxzIH0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgdHlwZSBJUmVxdWVzdE9wdGlvbnMsIHR5cGUgSVBhcmFtcyB9IGZyb20gJ0Blc3JpL2FyY2dpcy1yZXN0LXJlcXVlc3QnXG5pbXBvcnQge1xuICB0eXBlIElTZWFyY2hPcHRpb25zLFxuICB0eXBlIFNlYXJjaFF1ZXJ5QnVpbGRlcixcbiAgdHlwZSBJU2VhcmNoUmVzdWx0LFxuICB0eXBlIElVc2VySXRlbU9wdGlvbnMsXG4gIHR5cGUgSVVwZGF0ZUl0ZW1PcHRpb25zLFxuICB0eXBlIElVcGRhdGVJdGVtUmVzcG9uc2UsXG4gIHR5cGUgSUNyZWF0ZUl0ZW1PcHRpb25zLFxuICB0eXBlIElDcmVhdGVJdGVtUmVzcG9uc2UsXG4gIHR5cGUgSUl0ZW1EYXRhT3B0aW9ucyxcbiAgdHlwZSBJSXRlbVJlc291cmNlT3B0aW9ucyxcbiAgdHlwZSBJSXRlbVJlc291cmNlUmVzcG9uc2UsXG4gIHR5cGUgSVNoYXJpbmdSZXNwb25zZSxcbiAgdHlwZSBJTW92ZUl0ZW1PcHRpb25zLFxuICB0eXBlIElNb3ZlSXRlbVJlc3BvbnNlLFxuICB0eXBlIElHZXRVc2VyT3B0aW9ucyxcbiAgdHlwZSBJR2V0VXNlclRhZ3NSZXNwb25zZSxcbiAgdHlwZSBJR2V0SXRlbVJlc291cmNlT3B0aW9ucyxcbiAgdHlwZSBJR3JvdXBcbn0gZnJvbSAnQGVzcmkvYXJjZ2lzLXJlc3QtcG9ydGFsJ1xuaW1wb3J0ICogYXMgbG9jYWxSZXN0U2VydmljZSBmcm9tICcuL2xvY2FsLXJlc3Qtc2VydmljZSdcbmltcG9ydCAqIGFzIGppbXVSZXF1ZXN0IGZyb20gJy4vamltdS1yZXF1ZXN0J1xuaW1wb3J0IHsgaXNBR09MQXBwLCBpc1BvcnRhbEFwcCB9IGZyb20gJy4vYXBwLXNlcnZpY2UvdXRpbCdcbmltcG9ydCB7IHR5cGUgQXBwSW5mbywgU2VhcmNoVHlwZSwgdHlwZSBJbXBvcnRBcHBPcHRpb24gfSBmcm9tICcuL3R5cGUnXG5jb25zdCB7IGltcG9ydEl0ZW0sIGNoZWNrSXRlbVZlcnNpb24gfSA9IGxvY2FsUmVzdFNlcnZpY2VcblxuZnVuY3Rpb24gcmVxdWVzdE1ldGhvZFByb3ZpZGVyIChcbiAgcmVzdFBvcnRhbFJlcXVlc3ROYW1lOiBzdHJpbmcsXG4gIGFwcEluZm8/OiBBcHBJbmZvLFxuICBsb2NhbFJlcXVlc3ROYW1lPzogc3RyaW5nXG4pIHtcbiAgY29uc3QgbG9jYWxSZXF1ZXN0TWV0aG9kID0gbG9jYWxSZXF1ZXN0TmFtZSA/IGxvY2FsUmVzdFNlcnZpY2VbbG9jYWxSZXF1ZXN0TmFtZV0gOiBsb2NhbFJlc3RTZXJ2aWNlW3Jlc3RQb3J0YWxSZXF1ZXN0TmFtZV1cbiAgY29uc3QgcmVzdFBvcnRhbFJlcXVlc3RNZXRob2QgPSBlc3JpLnJlc3RQb3J0YWxbcmVzdFBvcnRhbFJlcXVlc3ROYW1lXVxuICBpZiAoIWFwcEluZm8pIHtcbiAgICBpZiAod2luZG93LmppbXVDb25maWcuaXNEZXZFZGl0aW9uKSB7XG4gICAgICByZXR1cm4gbG9jYWxSZXF1ZXN0TWV0aG9kXG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByZXN0UG9ydGFsUmVxdWVzdE1ldGhvZFxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBpZiAoaXNQb3J0YWxBcHAoYXBwSW5mbykpIHtcbiAgICAgIHJldHVybiByZXN0UG9ydGFsUmVxdWVzdE1ldGhvZFxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbG9jYWxSZXF1ZXN0TWV0aG9kXG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIHNlYXJjaE1ldGhvZFByb3ZpZGVyIChcbiAgc2VhcmNoVHlwZTogU2VhcmNoVHlwZVxuKSB7XG4gIGxldCBtZXRob2RcbiAgY29uc3QgcG9ydGFsVXJsID0gZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpLnBvcnRhbFVybFxuICBjb25zdCBpc0FHT0xEb21haW4gPSBwb3J0YWxVcmxVdGlscy5pc0FHT0xEb21haW4ocG9ydGFsVXJsKVxuICBzd2l0Y2ggKHNlYXJjaFR5cGUpIHtcbiAgICBjYXNlIFNlYXJjaFR5cGUuUG9ydGFsOlxuICAgICAgbWV0aG9kID0gZXNyaS5yZXN0UG9ydGFsLnNlYXJjaEl0ZW1zXG4gICAgICBicmVha1xuICAgIGNhc2UgU2VhcmNoVHlwZS5BR09MOlxuICAgICAgbWV0aG9kID0gaXNBR09MRG9tYWluID8gZXNyaS5yZXN0UG9ydGFsLnNlYXJjaEl0ZW1zIDogbG9jYWxSZXN0U2VydmljZS5zZWFyY2hJdGVtc1xuICAgICAgYnJlYWtcbiAgICBjYXNlIFNlYXJjaFR5cGUuT3RoZXI6XG4gICAgICBtZXRob2QgPSB3aW5kb3cuamltdUNvbmZpZy5pc0RldkVkaXRpb24gPyBsb2NhbFJlc3RTZXJ2aWNlLnNlYXJjaEl0ZW1zIDogZXNyaS5yZXN0UG9ydGFsLnNlYXJjaEl0ZW1zXG4gICAgICBicmVha1xuICB9XG4gIHJldHVybiBtZXRob2Rcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNlYXJjaEl0ZW1zIChcbiAgc2VhcmNoOiBzdHJpbmcgfCBJU2VhcmNoT3B0aW9ucyB8IFNlYXJjaFF1ZXJ5QnVpbGRlcixcbiAgc2VhcmNoVHlwZTogU2VhcmNoVHlwZVxuKTogUHJvbWlzZTxJU2VhcmNoUmVzdWx0PEFwcEluZm8+PiB7XG4gIHJldHVybiBzZWFyY2hNZXRob2RQcm92aWRlcihzZWFyY2hUeXBlKShzZWFyY2gsIHNlYXJjaFR5cGUpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZWFyY2hJdGVtc0J5UG9ydGFsVXJsIChcbiAgc2VhcmNoOiBzdHJpbmcgfCBJU2VhcmNoT3B0aW9ucyB8IFNlYXJjaFF1ZXJ5QnVpbGRlcixcbiAgcG9ydGFsVXJsOiBzdHJpbmdcbik6IFByb21pc2U8SVNlYXJjaFJlc3VsdDxBcHBJbmZvPj4ge1xuICByZXR1cm4gbG9jYWxSZXN0U2VydmljZS5zZWFyY2hJdGVtc0J5UG9ydGFsVXJsKHNlYXJjaCwgcG9ydGFsVXJsKSBhcyBhbnlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHJlbW92ZUl0ZW0gKFxuICByZXF1ZXN0T3B0aW9uczogSVVzZXJJdGVtT3B0aW9uc1xuKTogUHJvbWlzZTx7XG4gICAgc3VjY2VzczogYm9vbGVhblxuICAgIGl0ZW1JZDogc3RyaW5nXG4gIH0+IHtcbiAgcmV0dXJuIHJlcXVlc3RNZXRob2RQcm92aWRlcigncmVtb3ZlSXRlbScpKHJlcXVlc3RPcHRpb25zKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlSXRlbSAoXG4gIHJlcXVlc3RPcHRpb25zOiBJVXBkYXRlSXRlbU9wdGlvbnNcbik6IFByb21pc2U8SVVwZGF0ZUl0ZW1SZXNwb25zZT4ge1xuICByZXR1cm4gcmVxdWVzdE1ldGhvZFByb3ZpZGVyKCd1cGRhdGVJdGVtJykocmVxdWVzdE9wdGlvbnMpXG59XG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaW1wb3J0QXBwIChcbiAgaXRlbTogSW1wb3J0QXBwT3B0aW9uLFxuICByZXF1ZXN0T3B0aW9ucz86IElJdGVtRGF0YU9wdGlvbnNcbik6IFByb21pc2U8SVVwZGF0ZUl0ZW1SZXNwb25zZT4ge1xuICByZXR1cm4gaW1wb3J0SXRlbShpdGVtLCByZXF1ZXN0T3B0aW9ucylcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNoZWNrQXBwVmVyc2lvbiAoXG4gIGl0ZW06IEltcG9ydEFwcE9wdGlvbixcbiAgcmVxdWVzdE9wdGlvbnM/OiBJSXRlbURhdGFPcHRpb25zXG4pOiBQcm9taXNlPElVcGRhdGVJdGVtUmVzcG9uc2U+IHtcbiAgcmV0dXJuIGNoZWNrSXRlbVZlcnNpb24oaXRlbSwgcmVxdWVzdE9wdGlvbnMpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVBcHBzVGh1bWJuYWlsIChcbiAgcmVxdWVzdE9wdGlvbnM6IElVcGRhdGVJdGVtT3B0aW9uc1xuKTogUHJvbWlzZTxJVXBkYXRlSXRlbVJlc3BvbnNlPiB7XG4gIGlmICh3aW5kb3cuamltdUNvbmZpZy5pc0RldkVkaXRpb24pIHtcbiAgICByZXR1cm4gYXdhaXQgbG9jYWxSZXN0U2VydmljZS51cGRhdGVJdGVtKHJlcXVlc3RPcHRpb25zKVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBhd2FpdCBqaW11UmVxdWVzdC51cGRhdGVJdGVtKHJlcXVlc3RPcHRpb25zKVxuICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVJdGVtIChcbiAgcmVxdWVzdE9wdGlvbnM6IElDcmVhdGVJdGVtT3B0aW9uc1xuKTogUHJvbWlzZTxJQ3JlYXRlSXRlbVJlc3BvbnNlPiB7XG4gIHJldHVybiByZXF1ZXN0TWV0aG9kUHJvdmlkZXIoJ2NyZWF0ZUl0ZW0nKShyZXF1ZXN0T3B0aW9ucylcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEl0ZW0gKFxuICBhcHBJbmZvOiBBcHBJbmZvLFxuICByZXF1ZXN0T3B0aW9ucz86IElSZXF1ZXN0T3B0aW9uc1xuKTogUHJvbWlzZTxBcHBJbmZvPiB7XG4gIHJldHVybiByZXF1ZXN0TWV0aG9kUHJvdmlkZXIoXG4gICAgJ2dldEl0ZW0nLFxuICAgIGFwcEluZm9cbiAgKShhcHBJbmZvLmlkLCByZXF1ZXN0T3B0aW9ucywgaXNBR09MQXBwKGFwcEluZm8pKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0SXRlbURhdGEgKFxuICBhcHBJbmZvOiBBcHBJbmZvLFxuICByZXF1ZXN0T3B0aW9ucz86IElJdGVtRGF0YU9wdGlvbnNcbik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiByZXF1ZXN0TWV0aG9kUHJvdmlkZXIoXG4gICAgJ2dldEl0ZW1EYXRhJyxcbiAgICBhcHBJbmZvXG4gICkoYXBwSW5mby5pZCwgcmVxdWVzdE9wdGlvbnMsIGlzQUdPTEFwcChhcHBJbmZvKSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEl0ZW1SZXNvdXJjZXMgKFxuICBhcHBJbmZvOiBBcHBJbmZvLFxuICByZXF1ZXN0T3B0aW9ucz86IElSZXF1ZXN0T3B0aW9uc1xuKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIHJlcXVlc3RNZXRob2RQcm92aWRlcihcbiAgICAnZ2V0SXRlbVJlc291cmNlcycsXG4gICAgYXBwSW5mb1xuICApKGFwcEluZm8uaWQsIHJlcXVlc3RPcHRpb25zLCBpc0FHT0xBcHAoYXBwSW5mbykpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRPcmdDYXRlZ29yeVNjaGVtYSAoXG4gIHJlcXVlc3RPcHRpb25zPzogSVJlcXVlc3RPcHRpb25zLFxuICBpc0dldEFHT0xDYXRlZ29yeVNjaGVtYT86IGJvb2xlYW5cbik6IFByb21pc2U8YW55PiB7XG4gIHJldHVybiBhd2FpdCBqaW11UmVxdWVzdC5nZXRPcmdDYXRlZ29yeVNjaGVtYShyZXF1ZXN0T3B0aW9ucywgaXNHZXRBR09MQ2F0ZWdvcnlTY2hlbWEpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRHcm91cENhdGVnb3J5U2NoZW1hIChcbiAgZ3JvdXBJZDogc3RyaW5nLFxuICByZXF1ZXN0T3B0aW9ucz86IElSZXF1ZXN0T3B0aW9ucyxcbiAgaXNHZXRBR09MQ2F0ZWdvcnlTY2hlbWE/OiBib29sZWFuXG4pOiBQcm9taXNlPGFueT4ge1xuICByZXR1cm4gYXdhaXQgamltdVJlcXVlc3QuZ2V0R3JvdXBDYXRlZ29yeVNjaGVtYShncm91cElkLCByZXF1ZXN0T3B0aW9ucywgaXNHZXRBR09MQ2F0ZWdvcnlTY2hlbWEpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRHcm91cENvbnRlbnRzIChcbiAgZ3JvdXBJZDogc3RyaW5nLFxuICByZXF1ZXN0T3B0aW9ucz86IElSZXF1ZXN0T3B0aW9ucyxcbiAgaXNHZXRBR09MR3JvdXBDb250ZW50PzogYm9vbGVhblxuKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIGF3YWl0IGppbXVSZXF1ZXN0LmdldEdyb3VwQ29udGVudChncm91cElkLCByZXF1ZXN0T3B0aW9ucywgaXNHZXRBR09MR3JvdXBDb250ZW50KVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0SXRlbVJlc291cmNlIChcbiAgYXBwSW5mbzogQXBwSW5mbyxcbiAgcmVxdWVzdE9wdGlvbnM/OiBJR2V0SXRlbVJlc291cmNlT3B0aW9uc1xuKTogUHJvbWlzZTxhbnk+IHtcbiAgcmV0dXJuIHJlcXVlc3RNZXRob2RQcm92aWRlcihcbiAgICAnZ2V0SXRlbVJlc291cmNlJyxcbiAgICBhcHBJbmZvXG4gICkoYXBwSW5mby5pZCwgcmVxdWVzdE9wdGlvbnMsIGlzQUdPTEFwcChhcHBJbmZvKSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZEl0ZW1SZXNvdXJjZSAoXG4gIHJlcXVlc3RPcHRpb25zOiBJSXRlbVJlc291cmNlT3B0aW9uc1xuKTogUHJvbWlzZTxJSXRlbVJlc291cmNlUmVzcG9uc2U+IHtcbiAgcmV0dXJuIHJlcXVlc3RNZXRob2RQcm92aWRlcignYWRkSXRlbVJlc291cmNlJykocmVxdWVzdE9wdGlvbnMpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVJdGVtUmVzb3VyY2UgKFxuICByZXF1ZXN0T3B0aW9uczogSUl0ZW1SZXNvdXJjZU9wdGlvbnNcbik6IFByb21pc2U8SUl0ZW1SZXNvdXJjZVJlc3BvbnNlPiB7XG4gIHJldHVybiByZXF1ZXN0TWV0aG9kUHJvdmlkZXIoJ3VwZGF0ZUl0ZW1SZXNvdXJjZScpKHJlcXVlc3RPcHRpb25zKVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gc2hhcmVJdGVtV2l0aEdyb3VwIChcbiAgcmVxdWVzdE9wdGlvbnM6IElQYXJhbXNcbik6IFByb21pc2U8SVNoYXJpbmdSZXNwb25zZT4ge1xuICAvLyByZXR1cm4gZXNyaS5yZXN0UG9ydGFsLnNoYXJlSXRlbVdpdGhHcm91cChyZXF1ZXN0T3B0aW9ucylcbiAgcmV0dXJuIGF3YWl0IGppbXVSZXF1ZXN0LnNoYXJlSXRlbXMocmVxdWVzdE9wdGlvbnMpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1bnNoYXJlSXRlbVdpdGhHcm91cCAoXG4gIHJlcXVlc3RPcHRpb25zOiBJUGFyYW1zXG4pOiBQcm9taXNlPElTaGFyaW5nUmVzcG9uc2U+IHtcbiAgLy8gcmV0dXJuIGVzcmkucmVzdFBvcnRhbC51bnNoYXJlSXRlbVdpdGhHcm91cChyZXF1ZXN0T3B0aW9ucylcbiAgcmV0dXJuIGF3YWl0IGppbXVSZXF1ZXN0LnVuU2hhcmVJdGVtcyhyZXF1ZXN0T3B0aW9ucylcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGl0ZW1zZ3JvdXBzIChcbiAgcmVxdWVzdE9wdGlvbnM6IElQYXJhbXNcbik6IFByb21pc2U8SVNoYXJpbmdSZXNwb25zZT4ge1xuICAvLyByZXR1cm4gZXNyaS5yZXN0UG9ydGFsLnVuc2hhcmVJdGVtV2l0aEdyb3VwKHJlcXVlc3RPcHRpb25zKVxuICByZXR1cm4gYXdhaXQgamltdVJlcXVlc3QuaXRlbXNncm91cHMocmVxdWVzdE9wdGlvbnMpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZW1vdmVJdGVtUmVzb3VyY2UgKFxuICByZXF1ZXN0T3B0aW9uczogSUl0ZW1SZXNvdXJjZU9wdGlvbnNcbik6IFByb21pc2U8e1xuICAgIHN1Y2Nlc3M6IGJvb2xlYW5cbiAgfT4ge1xuICByZXR1cm4gcmVxdWVzdE1ldGhvZFByb3ZpZGVyKCdyZW1vdmVJdGVtUmVzb3VyY2UnKShyZXF1ZXN0T3B0aW9ucylcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldEl0ZW1zR3JvdXBzIChcbiAgcmVxdWVzdE9wdGlvbnM6IElQYXJhbXNcbik6IFByb21pc2U8SVNoYXJpbmdSZXNwb25zZT4ge1xuICByZXR1cm4gYXdhaXQgamltdVJlcXVlc3QuaXRlbXNncm91cHMocmVxdWVzdE9wdGlvbnMpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBtb3ZlSXRlbSAoXG4gIHJlcXVlc3RPcHRpb25zOiBJTW92ZUl0ZW1PcHRpb25zXG4pOiBQcm9taXNlPElNb3ZlSXRlbVJlc3BvbnNlPiB7XG4gIHJldHVybiBhd2FpdCBlc3JpLnJlc3RQb3J0YWwubW92ZUl0ZW0ocmVxdWVzdE9wdGlvbnMpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRVc2Vyc1RhZ3MgKFxuICByZXF1ZXN0T3B0aW9uczogSUdldFVzZXJPcHRpb25zXG4pOiBQcm9taXNlPElHZXRVc2VyVGFnc1Jlc3BvbnNlPiB7XG4gIHJldHVybiBhd2FpdCBlc3JpLnJlc3RQb3J0YWwuZ2V0VXNlclRhZ3MocmVxdWVzdE9wdGlvbnMpXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBzZWFyY2hHcm91cCAoXG4gIHJlcXVlc3RPcHRpb25zOiBJU2VhcmNoT3B0aW9ucyB8IFNlYXJjaFF1ZXJ5QnVpbGRlclxuKTogUHJvbWlzZTxJU2VhcmNoUmVzdWx0PElHcm91cD4+IHtcbiAgcmV0dXJuIGF3YWl0IGVzcmkucmVzdFBvcnRhbC5zZWFyY2hHcm91cHMocmVxdWVzdE9wdGlvbnMpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBnZXRVc2VyQ29udGVudCAocmVxdWVzdE9wdGlvbnM6IElQYXJhbXMpOiBhbnkge1xuICByZXR1cm4gamltdVJlcXVlc3QuZ2V0VXNlckNvbnRlbnQocmVxdWVzdE9wdGlvbnMpXG59XG5cbmV4cG9ydCBmdW5jdGlvbiBjcmVhdGVBcHBJbkZvbGRlciAocmVxdWVzdE9wdGlvbnM6IElDcmVhdGVJdGVtT3B0aW9ucyk6IFByb21pc2U8SUNyZWF0ZUl0ZW1SZXNwb25zZT4ge1xuICByZXR1cm4gZXNyaS5yZXN0UG9ydGFsLmNyZWF0ZUl0ZW1JbkZvbGRlcihyZXF1ZXN0T3B0aW9ucylcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGdldFJlc291cmNlT3JpZ2luIChcbiAgb3JpZ2luYWxBcHBJbmZvOiBBcHBJbmZvXG4pOiBzdHJpbmcge1xuICBjb25zdCBwb3J0YWxVcmwgPSBpc0FHT0xBcHAob3JpZ2luYWxBcHBJbmZvKSA/IHVybFV0aWxzLmdldEFyY2dpc09ubGluZVVybCgpIDogZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpLnBvcnRhbFVybFxuICBjb25zdCBpc0xvY2FsQXBwUmVzb3VyY2VPcmlnaW4gPSBvcmlnaW5hbEFwcEluZm8/LmlzTG9jYWxBcHBcbiAgaWYgKGlzTG9jYWxBcHBSZXNvdXJjZU9yaWdpbikge1xuICAgIC8vIGxvY2FsIGFwcGBzIHJlc291cmNlIG9yaWdpbiBpbiBkZXZFZHRpb25cbiAgICByZXR1cm4gbG9jYWxSZXN0U2VydmljZS5nZXRPcmlnaW5VcmwoKSArICcvYXBwcy8nXG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIChcbiAgICAgIHBvcnRhbFVybFV0aWxzLmdldFBsYXRmb3JtVXJsQnlPcmdVcmwocG9ydGFsVXJsKSArXG4gICAgICAnL3NoYXJpbmcvcmVzdC9jb250ZW50L2l0ZW1zLydcbiAgICApXG4gIH1cbn1cbiIsImltcG9ydCB0eXBlIHsgSUl0ZW0gfSBmcm9tICdAZXNyaS9hcmNnaXMtcmVzdC10eXBlcydcbmltcG9ydCB0eXBlIHsgSUl0ZW1BZGQgfSBmcm9tICdAZXNyaS9hcmNnaXMtcmVzdC1wb3J0YWwnXG5pbXBvcnQgeyB0eXBlIEFwcENvbmZpZyB9IGZyb20gJ2ppbXUtY29yZSdcblxuZXhwb3J0IGludGVyZmFjZSByZXF1ZXN0TWV0aG9kUHJvdmlkZXIge1xuICByZXF1ZXN0TWV0aG9kUHJvdmlkZXI6IChyZXN0UG9ydGFsUmVxdWVzdE5hbWU6IHN0cmluZywgbG9jYWxSZXF1ZXN0TmFtZT86IHN0cmluZywgYXBwSW5mbz86IEFwcEluZm8pID0+IGFueVxufVxuXG5leHBvcnQgZW51bSBTZWFyY2hUeXBlIHtcbiAgQUdPTCA9ICdBR09MJywgLy8gU2VhcmNoIEFHT0wgYXBwXG4gIFBvcnRhbCA9ICdQb3J0YWwnLCAvLyBTZWFyY2ggcG9ydGFsIGFwcFxuICBPdGhlciA9ICdPdGhlcicsXG59XG5cbmV4cG9ydCBlbnVtIEFwcFR5cGUge1xuICBUZW1wbGF0ZVR5cGUgPSAnV2ViIEV4cGVyaWVuY2UgVGVtcGxhdGUnLFxuICBFeHBlcmllbmNlVHlwZSA9ICdXZWIgRXhwZXJpZW5jZSdcbn1cblxuZXhwb3J0IGVudW0gUHVibGlzaFN0YXR1cyB7XG4gIFB1Ymxpc2hlZCA9ICdQdWJsaXNoZWQnLFxuICBEcmFmdCA9ICdEcmFmdCcsIC8vIEl0ZW0gaXMgbm90IHB1Ymxpc2hlZFxuICBDaGFuZ2VkID0gJ0NoYW5nZWQnIC8vIFRoZXJlIGFyZSB1bnB1Ymxpc2hlZCBjaGFuZ2VzIHNpbmNlIGxhc3QgcHVibGlzaGluZy5cbn1cbmV4cG9ydCBpbnRlcmZhY2UgQXBwSW5mbyBleHRlbmRzIElJdGVtIHtcbiAgaWQ6IHN0cmluZ1xuICB0eXBlOiBBcHBUeXBlXG5cbiAgbmFtZT86IHN0cmluZ1xuICB0ZXh0PzogYW55XG4gIHVzZXJuYW1lPzogc3RyaW5nXG4gIHRodW1ibmFpbD86IHN0cmluZ1xuICBpc0xvY2FsQXBwPzogYm9vbGVhblxuICBwb3J0YWxVcmw/OiBzdHJpbmdcbn1cblxuZXhwb3J0IGludGVyZmFjZSBJbXBvcnRBcHBPcHRpb24gZXh0ZW5kcyBJSXRlbUFkZCB7XG4gIGFwcFppcDogYW55XG59XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2F2ZUFzUmVzcG9uc2Uge1xuICBpZDogc3RyaW5nXG4gIGFwcENvbmZpZzogQXBwQ29uZmlnXG59XG4iLCJpbXBvcnQge1xuICBnZXRBcHBTdG9yZSxcbiAgcG9ydGFsVXJsVXRpbHMsXG4gIFNlc3Npb25NYW5hZ2VyLFxuICBVU0VSX1NFVFRJTkdfRklMRV9LRVksXG4gIHR5cGUgVXNlclNldHRpbmdJbmZvLFxuICBJbW11dGFibGUsXG4gIGVzcmlcbn0gZnJvbSAnamltdS1jb3JlJ1xuaW1wb3J0IHsgdHlwZSBJUmVxdWVzdE9wdGlvbnMsIHR5cGUgSVBhcmFtcyB9IGZyb20gJ0Blc3JpL2FyY2dpcy1yZXN0LXJlcXVlc3QnXG5pbXBvcnQgeyB0eXBlIFVzZXJTZXNzaW9uIH0gZnJvbSAnQGVzcmkvYXJjZ2lzLXJlc3QtYXV0aCdcblxuY29uc3QgcmVxdWVzdCA9IGVzcmkucmVzdFJlcXVlc3QucmVxdWVzdFxuXG5lbnVtIFJlcXVlc3RUeXBlIHtcbiAgQWRkID0gJ0FERCcsXG4gIFJlbW92ZSA9ICdSRU1PVkUnLFxuICBHZXQgPSAnR0VUJyxcbiAgR2V0QWxsID0gJ0dFVEFMTCdcbn1cblxubGV0IGluaXRVc2VyUmVzb3VyY2VQcm9taXNlXG5sZXQgdXNlclJlc291cmNlTmFtZVxuXG5hc3luYyBmdW5jdGlvbiByZXF1ZXN0VXJsUHJvdmlkZXIgKFxuICB0eXBlOiBSZXF1ZXN0VHlwZSxcbiAgcmVzb3VyY2VOYW1lPzogc3RyaW5nXG4pOiBQcm9taXNlPHN0cmluZz4ge1xuICBjb25zdCBzZXNzaW9uID0gU2Vzc2lvbk1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXRNYWluU2Vzc2lvbigpXG4gIGNvbnN0IHsgdXNlcm5hbWUgfSA9IHNlc3Npb25cbiAgY29uc3QgcG9ydGFsVXJsID0gZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpLnBvcnRhbFVybFxuICBjb25zdCBwb3J0YWxVc2VyVXJsID0gcG9ydGFsVXJsVXRpbHMuZ2V0QmFzZVVzZXJVcmwocG9ydGFsVXJsKVxuICBjb25zdCB0b2tlbiA9IGF3YWl0IFRva2VuTWFuYWdlci5nZXRJbnN0YW5jZSgpLmdldFRva2VuKClcbiAgbGV0IHJlcXVlc3RVcmxcbiAgcmVzb3VyY2VOYW1lID0gcmVzb3VyY2VOYW1lID8/IGdldFJlc291cmNlTmFtZSgpXG5cbiAgc3dpdGNoICh0eXBlKSB7XG4gICAgY2FzZSBSZXF1ZXN0VHlwZS5BZGQ6XG4gICAgICByZXF1ZXN0VXJsID1cbiAgICAgICAgcG9ydGFsVXNlclVybCArICcvJyArIHVzZXJuYW1lICsgJy9hZGRSZXNvdXJjZS8nICsgJz90b2tlbj0nICsgdG9rZW5cbiAgICAgIGJyZWFrXG4gICAgY2FzZSBSZXF1ZXN0VHlwZS5SZW1vdmU6XG4gICAgICByZXF1ZXN0VXJsID1cbiAgICAgICAgcG9ydGFsVXNlclVybCArICcvJyArIHVzZXJuYW1lICsgJy9yZW1vdmVSZXNvdXJjZS8nICsgJz90b2tlbj0nICsgdG9rZW5cbiAgICAgIGJyZWFrXG4gICAgY2FzZSBSZXF1ZXN0VHlwZS5HZXQ6XG4gICAgICByZXF1ZXN0VXJsID1cbiAgICAgICAgcG9ydGFsVXNlclVybCArXG4gICAgICAgICcvJyArXG4gICAgICAgIHVzZXJuYW1lICtcbiAgICAgICAgJy9yZXNvdXJjZXMvJyArXG4gICAgICAgIHJlc291cmNlTmFtZSArXG4gICAgICAgICc/dG9rZW49JyArXG4gICAgICAgIHRva2VuXG4gICAgICBicmVha1xuICAgIGNhc2UgUmVxdWVzdFR5cGUuR2V0QWxsOlxuICAgICAgcmVxdWVzdFVybCA9XG4gICAgICAgIHBvcnRhbFVzZXJVcmwgKyAnLycgKyB1c2VybmFtZSArICcvcmVzb3VyY2VzLycgKyAnP3Rva2VuPScgKyB0b2tlblxuICAgICAgYnJlYWtcbiAgfVxuXG4gIHJldHVybiBhd2FpdCBQcm9taXNlLnJlc29sdmUocmVxdWVzdFVybClcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZFVzZXJSZXNvdXJjZSAoXG4gIHBhcmFtcz86IElQYXJhbXMsXG4gIHJlc291cmNlTmFtZT86IHN0cmluZ1xuKTogUHJvbWlzZTx7XG4gICAgc3VjY2VzczogYm9vbGVhblxuICB9PiB7XG4gIHJlc291cmNlTmFtZSA9IHJlc291cmNlTmFtZSA/PyBnZXRSZXNvdXJjZU5hbWUoKVxuICBjb25zdCByZXF1ZXN0T3B0aW9uczogSVJlcXVlc3RPcHRpb25zID0ge1xuICAgIGh0dHBNZXRob2Q6ICdQT1NUJyxcbiAgICBwYXJhbXM6IHtcbiAgICAgIC4uLnBhcmFtcyxcbiAgICAgIGtleTogcmVzb3VyY2VOYW1lLFxuICAgICAgYWNjZXNzOiAnVXNlclByaXZhdGVBbGxBcHBzJ1xuICAgIH1cbiAgfVxuICByZXR1cm4gYXdhaXQgcmVxdWVzdFVybFByb3ZpZGVyKFJlcXVlc3RUeXBlLkFkZClcbiAgICAudGhlbihhc3luYyByZXF1ZXN0VVJMID0+IHtcbiAgICAgIHJldHVybiBhd2FpdCByZXF1ZXN0KHJlcXVlc3RVUkwsIHJlcXVlc3RPcHRpb25zKS50aGVuKGFzeW5jIHJlc3BvbnNlID0+IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVzb2x2ZShyZXNwb25zZSlcbiAgICAgIH0pXG4gICAgfSlcbiAgICAuY2F0Y2goYXN5bmMgZXJyID0+IHtcbiAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlamVjdChcbiAgICAgICAgbmV3IEVycm9yKCdGYWlsZWQgYWRkaW5nIHVzZXIgcmVzb3VyY2U6JyArIGVyci5tZXNzYWdlKVxuICAgICAgKVxuICAgIH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRVc2VyUmVzb3VyY2UgKFxuICByZXNvdXJjZU5hbWU/OiBzdHJpbmdcbik6IFByb21pc2U8VXNlclNldHRpbmdJbmZvPiB7XG4gIHJlc291cmNlTmFtZSA9IHJlc291cmNlTmFtZSA/PyBnZXRSZXNvdXJjZU5hbWUoKVxuICByZXR1cm4gYXdhaXQgcmVxdWVzdFVybFByb3ZpZGVyKFJlcXVlc3RUeXBlLkdldCwgcmVzb3VyY2VOYW1lKVxuICAgIC50aGVuKGFzeW5jIHJlcXVlc3RVUkwgPT4ge1xuICAgICAgcmV0dXJuIGF3YWl0IHJlcXVlc3QocmVxdWVzdFVSTCwgeyBwYXJhbXM6IHsgZjogJ2pzb24nIH0gfSkudGhlbihhc3luYyByZXNwb25zZSA9PiB7XG4gICAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlc29sdmUocmVzcG9uc2UpXG4gICAgICB9KVxuICAgIH0pXG4gICAgLmNhdGNoKGFzeW5jIGVyciA9PiB7XG4gICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZWplY3QoXG4gICAgICAgIG5ldyBFcnJvcignRmFpbGVkIHJldHJpZXZpbmcgdXNlciByZXNvdXJjZTonICsgZXJyLm1lc3NhZ2UpXG4gICAgICApXG4gICAgfSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFVzZXJSZXNvdXJjZXMgKCk6IFByb21pc2U8e1xuICB0b3RhbDogbnVtYmVyXG4gIHN0YXJ0OiBudW1iZXJcbiAgbnVtOiBudW1iZXJcbiAgbmV4dFN0YXJ0OiBudW1iZXJcbiAgdXNlclJlc291cmNlczogYW55W11cbn0+IHtcbiAgcmV0dXJuIGF3YWl0IHJlcXVlc3RVcmxQcm92aWRlcihSZXF1ZXN0VHlwZS5HZXRBbGwpXG4gICAgLnRoZW4oYXN5bmMgcmVxdWVzdFVSTCA9PiB7XG4gICAgICByZXR1cm4gYXdhaXQgcmVxdWVzdChyZXF1ZXN0VVJMLCB7IHBhcmFtczogeyBmOiAnanNvbicgfSB9KS50aGVuKGFzeW5jIHJlc3BvbnNlID0+IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVzb2x2ZShyZXNwb25zZSlcbiAgICAgIH0pXG4gICAgfSlcbiAgICAuY2F0Y2goYXN5bmMgZXJyID0+IHtcbiAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlamVjdChcbiAgICAgICAgbmV3IEVycm9yKCdGYWlsZWQgcmV0cmlldmluZyB1c2VyIHJlc291cmNlIGxpc3Q6JyArIGVyci5tZXNzYWdlKVxuICAgICAgKVxuICAgIH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZW1vdmVVc2VyUmVzb3VyY2UgKFxuICByZXNvdXJjZU5hbWU/OiBzdHJpbmdcbik6IFByb21pc2U8e1xuICAgIHN1Y2Nlc3M6IGJvb2xlYW5cbiAgfT4ge1xuICByZXNvdXJjZU5hbWUgPSByZXNvdXJjZU5hbWUgPz8gZ2V0UmVzb3VyY2VOYW1lKClcbiAgcmV0dXJuIGF3YWl0IHJlcXVlc3RVcmxQcm92aWRlcihSZXF1ZXN0VHlwZS5SZW1vdmUpXG4gICAgLnRoZW4oYXN5bmMgcmVxdWVzdFVSTCA9PiB7XG4gICAgICBjb25zdCByZXF1ZXN0T3B0aW9uczogSVJlcXVlc3RPcHRpb25zID0ge1xuICAgICAgICBwYXJhbXM6IHtcbiAgICAgICAgICBrZXk6IHJlc291cmNlTmFtZVxuICAgICAgICB9XG4gICAgICB9XG4gICAgICByZXR1cm4gYXdhaXQgcmVxdWVzdChyZXF1ZXN0VVJMLCByZXF1ZXN0T3B0aW9ucykudGhlbihhc3luYyByZXNwb25zZSA9PiB7XG4gICAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlc29sdmUocmVzcG9uc2UpXG4gICAgICB9KVxuICAgIH0pXG4gICAgLmNhdGNoKGFzeW5jIGVyciA9PiB7XG4gICAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZWplY3QoXG4gICAgICAgIG5ldyBFcnJvcignRmFpbGVkIHJlbW92aW5nIHVzZXIgcmVzb3VyY2U6JyArIGVyci5tZXNzYWdlKVxuICAgICAgKVxuICAgIH0pXG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVVc2VyUmVzb3VyY2UgKFxuICBvcHRpb25zOiBQYXJ0aWFsPFVzZXJTZXR0aW5nSW5mbz5cbik6IFByb21pc2U8e1xuICAgIHN1Y2Nlc3M6IGJvb2xlYW5cbiAgfT4ge1xuICByZXR1cm4gYXdhaXQgZ2V0VXNlclJlc291cmNlKClcbiAgICAudGhlbihhc3luYyAocmVzdWx0OiBVc2VyU2V0dGluZ0luZm8pID0+IHtcbiAgICAgIGNvbnN0IG5ld09wdGlvbnMgPSBJbW11dGFibGUocmVzdWx0ID8/IHt9KS5tZXJnZShvcHRpb25zLCB7IGRlZXA6IHRydWUgfSlcbiAgICAgIHJldHVybiBhd2FpdCBhZGRVc2VyUmVzb3VyY2Uoe1xuICAgICAgICB0ZXh0OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgLi4ubmV3T3B0aW9uc1xuICAgICAgICB9KVxuICAgICAgfSlcbiAgICB9KVxuICAgIC50aGVuKGFzeW5jIHJlc3BvbnNlID0+IHtcbiAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlc29sdmUocmVzcG9uc2UpXG4gICAgfSlcbiAgICAuY2F0Y2goYXN5bmMgZXJyID0+IHtcbiAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlamVjdChcbiAgICAgICAgbmV3IEVycm9yKCdGYWlsZWQgdXBkYXRpbmcgdXNlciByZXNvdXJjZTonICsgZXJyLm1lc3NhZ2UpXG4gICAgICApXG4gICAgfSlcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGluaXRVc2VyUmVzb3VyY2UgKCk6IFByb21pc2U8e1xuICBzdWNjZXNzOiBib29sZWFuXG59PiB7XG4gIGlmICghaW5pdFVzZXJSZXNvdXJjZVByb21pc2UpIHtcbiAgICBpbml0VXNlclJlc291cmNlUHJvbWlzZSA9IGdldFVzZXJSZXNvdXJjZXMoKVxuICAgICAgLnRoZW4oYXN5bmMgcmVzdWx0ID0+IHtcbiAgICAgICAgaWYgKHJlc3VsdC50b3RhbCA9PT0gMCkge1xuICAgICAgICAgIC8vIG5vbmUgb2YgdXNlciByZXNvdXJjZXMgaGFzIGJlZW4gYWRkZWQgZm9yIHRoZSB1c2VyXG4gICAgICAgICAgcmV0dXJuIGF3YWl0IGFkZFVzZXJSZXNvdXJjZSh7IHRleHQ6ICd7fScgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zdCB1c2VyU2V0dGluZ1Jlc291cmNlID0gcmVzdWx0LnVzZXJSZXNvdXJjZXNbMF0gLy8gb25seSBvbmUgcmVzb3VyY2UgaXMgYWxsb3dlZCBwZXIgYXBwIGlkIHBlciB1c2VyXG4gICAgICAgICAgY29uc3QgcmVzb3VyY2VOYW1lID0gZ2V0UmVzb3VyY2VOYW1lKClcbiAgICAgICAgICBpZiAodXNlclNldHRpbmdSZXNvdXJjZS5rZXkgPT09IHJlc291cmNlTmFtZSkge1xuICAgICAgICAgICAgLy8gdXNlciByZXNvdXJjZSBleGlzdHNcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlc29sdmUoeyBzdWNjZXNzOiB0cnVlIH0pXG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIHJlcGxhY2UgdGhlIG9sZCB1c2VyIHJlc291cmNlIGlmIG5lZWRlZFxuICAgICAgICAgICAgcmV0dXJuIGF3YWl0IGdldFVzZXJSZXNvdXJjZSh1c2VyU2V0dGluZ1Jlc291cmNlLmtleSlcbiAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lXG4gICAgICAgICAgICAgIC5jYXRjaChlcnIgPT4ge1xuICAgICAgICAgICAgICAgIC8vIHVzZXIgcmVzb3VyY2Ugbm90IGFjY2Vzc2libGUsIHBhc3MgZG93biBudWxsIHRvIHRyeSBhZGRpbmcgdXNlciByZXNvdXJjZSBhbnl3YXlcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbFxuICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAudGhlbihhc3luYyBvbGRPcHRpb25zID0+IHtcbiAgICAgICAgICAgICAgICAvLyB1c2UgXCJzaG93R3VpZGVzXCIgdG8gZGV0ZWN0IGlmIHRoZSB1c2VyIHJlc291cmNlIHdhcyBhZGRlZCBieSBFeHBlcmluY2UgQnVpbGRlciBhbmRcbiAgICAgICAgICAgICAgICAvLyBtaWdyYXRlIG92ZXIgdGhlIG9wdGlvbnNcbiAgICAgICAgICAgICAgICBpZiAoXG4gICAgICAgICAgICAgICAgICBvbGRPcHRpb25zICYmXG4gICAgICAgICAgICAgICAgICAob2xkT3B0aW9ucy5zaG93R3VpZGVzIHx8XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKG9sZE9wdGlvbnMpLmxlbmd0aCA9PT0gMClcbiAgICAgICAgICAgICAgICApIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBhd2FpdCByZW1vdmVVc2VyUmVzb3VyY2UodXNlclNldHRpbmdSZXNvdXJjZS5rZXkpLnRoZW4oXG4gICAgICAgICAgICAgICAgICAgIGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgYWRkVXNlclJlc291cmNlKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ub2xkT3B0aW9uc1xuICAgICAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIC8vIHRyeSBhZGRpbmcgdGhlIHVzZXIgcmVzb3VyY2UgYW55d2F5XG4gICAgICAgICAgICAgICAgICByZXR1cm4gYXdhaXQgYWRkVXNlclJlc291cmNlKHsgdGV4dDogJ3t9JyB9KVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSlcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0pXG4gICAgICAuY2F0Y2goYXN5bmMgZXJyID0+IHtcbiAgICAgICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVqZWN0KFxuICAgICAgICAgIG5ldyBFcnJvcignRmFpbGVkIGluaXRpYWxpemluZyB1c2VyIHJlc291cmNlOicgKyBlcnIubWVzc2FnZSlcbiAgICAgICAgKVxuICAgICAgfSlcbiAgfVxuICByZXR1cm4gaW5pdFVzZXJSZXNvdXJjZVByb21pc2Vcbn1cblxuZnVuY3Rpb24gZ2V0UmVzb3VyY2VOYW1lICgpOiBzdHJpbmcge1xuICBpZiAoIXVzZXJSZXNvdXJjZU5hbWUpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gU2Vzc2lvbk1hbmFnZXIuZ2V0SW5zdGFuY2UoKS5nZXRNYWluU2Vzc2lvbigpXG4gICAgdXNlclJlc291cmNlTmFtZSA9IGAke1VTRVJfU0VUVElOR19GSUxFX0tFWX0ke1xuICAgICAgc2Vzc2lvbj8uY2xpZW50SWQgPyBgXyR7c2Vzc2lvbi5jbGllbnRJZH1gIDogJydcbiAgICB9Lmpzb25gXG4gIH1cbiAgcmV0dXJuIHVzZXJSZXNvdXJjZU5hbWVcbn1cblxuY2xhc3MgVG9rZW5NYW5hZ2VyIHtcbiAgc3RhdGljIGluc3RhbmNlOiBUb2tlbk1hbmFnZXJcbiAgcHJpdmF0ZSByZWFkb25seSBzZXNzaW9uOiBVc2VyU2Vzc2lvblxuICBwcml2YXRlIGV4Y2hhbmdlZFRva2VuOiBzdHJpbmdcbiAgcHJpdmF0ZSBwb3J0YWxTZWxmUHJvbWlzZTogUHJvbWlzZTxhbnk+XG5cbiAgc3RhdGljIGdldEluc3RhbmNlICgpOiBUb2tlbk1hbmFnZXIge1xuICAgIGlmICghVG9rZW5NYW5hZ2VyLmluc3RhbmNlKSB7XG4gICAgICBUb2tlbk1hbmFnZXIuaW5zdGFuY2UgPSBuZXcgVG9rZW5NYW5hZ2VyKClcbiAgICB9XG4gICAgcmV0dXJuIFRva2VuTWFuYWdlci5pbnN0YW5jZVxuICB9XG5cbiAgY29uc3RydWN0b3IgKCkge1xuICAgIHRoaXMuc2Vzc2lvbiA9IFNlc3Npb25NYW5hZ2VyLmdldEluc3RhbmNlKCkuZ2V0TWFpblNlc3Npb24oKVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfc2hvdWxkRXhjaGFuZ2VUb2tlbiAoKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgaWYgKCF0aGlzLmV4Y2hhbmdlZFRva2VuIHx8IHRoaXMuc2Vzc2lvbi50b2tlbkV4cGlyZXMgPCBuZXcgRGF0ZSgpKSB7XG4gICAgICBpZiAoIXRoaXMucG9ydGFsU2VsZlByb21pc2UpIHtcbiAgICAgICAgY29uc3QgcG9ydGFsVXJsID0gZ2V0QXBwU3RvcmUoKS5nZXRTdGF0ZSgpLnBvcnRhbFVybFxuICAgICAgICB0aGlzLnBvcnRhbFNlbGZQcm9taXNlID0gcmVxdWVzdChcbiAgICAgICAgICBgJHtwb3J0YWxVcmx9L3NoYXJpbmcvcmVzdC9jb21tdW5pdHkvc2VsZj90b2tlbj0ke3RoaXMuc2Vzc2lvbi50b2tlbn1gXG4gICAgICAgIClcbiAgICAgICAgICAudGhlbihhc3luYyAoeyBhcHBJbmZvIH0pID0+IHtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlc29sdmUoYXBwSW5mbz8uYXBwSWQgIT09ICdleHBlcmllbmNlQnVpbGRlcicpXG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goYXN5bmMgZXJyID0+IHtcbiAgICAgICAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoZXJyLm1lc3NhZ2UpKVxuICAgICAgICAgIH0pXG4gICAgICB9XG4gICAgICByZXR1cm4gYXdhaXQgdGhpcy5wb3J0YWxTZWxmUHJvbWlzZVxuICAgIH1cbiAgICByZXR1cm4gYXdhaXQgUHJvbWlzZS5yZXNvbHZlKGZhbHNlKVxuICB9XG5cbiAgcHJpdmF0ZSBhc3luYyBfZXhjaGFuZ2VUb2tlbiAoKTogUHJvbWlzZTx7IHRva2VuOiBzdHJpbmcgfT4ge1xuICAgIGNvbnN0IHBvcnRhbFVybCA9IGdldEFwcFN0b3JlKCkuZ2V0U3RhdGUoKS5wb3J0YWxVcmxcbiAgICBjb25zdCByZXF1ZXN0VVJMID0gcG9ydGFsVXJsICsgJy9zaGFyaW5nL3Jlc3Qvb2F1dGgyL2V4Y2hhbmdlVG9rZW4nXG4gICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSB7XG4gICAgICBwYXJhbXM6IHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGNhbWVsY2FzZVxuICAgICAgICBjbGllbnRfaWQ6IHRoaXMuc2Vzc2lvbi5jbGllbnRJZCxcbiAgICAgICAgdG9rZW46IHRoaXMuc2Vzc2lvbi50b2tlblxuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYXdhaXQgcmVxdWVzdChyZXF1ZXN0VVJMLCByZXF1ZXN0T3B0aW9ucylcbiAgfVxuXG4gIGFzeW5jIGdldFRva2VuICgpOiBQcm9taXNlPHN0cmluZz4ge1xuICAgIGNvbnN0IHNob3VsZEV4Y2hhbmdlID0gYXdhaXQgdGhpcy5fc2hvdWxkRXhjaGFuZ2VUb2tlbigpXG4gICAgaWYgKHNob3VsZEV4Y2hhbmdlKSB7XG4gICAgICByZXR1cm4gYXdhaXQgdGhpcy5fZXhjaGFuZ2VUb2tlbigpXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZVxuICAgICAgICAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAnRmFpbGVkIGV4Y2hhbmdpbmcgdG9rZW4uIFVzaW5nIGRlZmF1bHQgdG9rZW4gZnJvbSB1c2VyIHNlc2lvbi4nXG4gICAgICAgICAgKVxuICAgICAgICAgIHJldHVybiB7IHRva2VuOiB0aGlzLnNlc3Npb24udG9rZW4gfVxuICAgICAgICB9KVxuICAgICAgICAudGhlbihhc3luYyByZXNwb25zZSA9PiB7XG4gICAgICAgICAgdGhpcy5leGNoYW5nZWRUb2tlbiA9IHJlc3BvbnNlPy50b2tlblxuICAgICAgICAgIHJldHVybiBhd2FpdCBQcm9taXNlLnJlc29sdmUodGhpcy5leGNoYW5nZWRUb2tlbilcbiAgICAgICAgfSlcbiAgICB9XG4gICAgcmV0dXJuIGF3YWl0IFByb21pc2UucmVzb2x2ZSh0aGlzLmV4Y2hhbmdlZFRva2VuID8/IHRoaXMuc2Vzc2lvbi50b2tlbilcbiAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQge1xuICBmcmFtZXdvcmtBY3Rpb25fVHJpZ2dlckxheWVyOiAnVHJpZ2dlciBkYXRhJyxcbiAgZnJhbWV3b3JrQWN0aW9uX1NldERhdGE6ICdTZWxlY3QgZGF0YScsXG4gIGZyYW1ld29ya0FjdGlvbl9BY3Rpb25MYXllcjogJ0FjdGlvbiBkYXRhJyxcbiAgZnJhbWV3b3JrQWN0aW9uX0NvbmRpdGlvbnM6ICdDb25kaXRpb25zJyxcbiAgZnJhbWV3b3JrQWN0aW9uX1JlbGF0ZU1lc3NhZ2U6ICdUcmlnZ2VyIC8gYWN0aW9uIGNvbm5lY3Rpb24nLFxuICBmcmFtZXdvcmtBY3Rpb25fVHJpZ2dlckxheWVyRmllbGQ6ICdTZWxlY3QgYSB0cmlnZ2VyIGZpZWxkJyxcbiAgZnJhbWV3b3JrQWN0aW9uX05vbmU6ICdub25lJyxcbiAgZnJhbWV3b3JrQWN0aW9uX0VxdWFsczogJ2VxdWFscycsXG4gIGZyYW1ld29ya0FjdGlvbl9BY3Rpb25MYXllckZpZWxkOiAnU2VsZWN0IGFuIGFjdGlvbiBmaWVsZCcsXG4gIGZyYW1ld29ya0FjdGlvbl9Nb3JlQ29uZGl0aW9uczogJ01vcmUgY29uZGl0aW9ucycsXG4gIGZyYW1ld29ya0FjdGlvbl9TZXRFeHByZXNzaW9uOiAnUGxlYXNlIHNldCB5b3VyIGV4cHJlc3Npb24gZmlyc3QuJyxcbiAgZnJhbWV3b3JrQWN0aW9uX0Nob29zZUxheWVyOiAnU2VsZWN0IGRhdGEnLFxuICBmcmFtZXdvcmtBY3Rpb25fQXV0b0JpbmQ6ICdBdXRvIGJvdW5kLicsXG4gIGZyYW1ld29ya0FjdGlvbl9Ob0xheWVyOiAnTm8gZGF0YS4nLFxuICBmcmFtZXdvcmtBY3Rpb25fUXVlcnlCeUV4dGVudDogJ1F1ZXJ5IGJ5IGN1cnJlbnQgZXh0ZW50JyxcblxuICAvLyBjb21tb24gdGVtcGxhdGUgc3RyaW5nc1xuICBkZWZhdWx0VGV4dFBsYWNlaG9sZGVyOiAnRG91YmxlIGNsaWNrIHRvIGVkaXQgdGV4dCcsXG4gIHRpdGxlUGxhY2Vob2xkZXI6ICdIZXJlIGlzIHRoZSB0aXRsZScsXG4gIHN1YlRpdGxlUGxhY2Vob2xkZXI6ICdIZXJlIGlzIHRoZSBzdWJ0aXRsZScsXG4gIHNob3J0VGl0bGVQbGFjZWhvbGRlcjogJ1RpdGxlJyxcbiAgc2hvcnRTdWJUaXRsZVBsYWNlaG9sZGVyOiAnU3VidGl0bGUnLFxuICBjb3B5cmlnaHRQbGFjZWhvbGRlcjogJ0NvcHlyaWdodCBpbmZvJyxcbiAgY2FyZFRpdGxlOiAnQ2FyZCB0aXRsZScsXG4gIGJvb2ttYXJrOiAnQm9va21hcmsnLFxuICBudW1iZXI6ICdOdW1iZXInLFxuICB0ZW1wbGF0ZVNlYXJjaFJlc3VsdDogJ1NlYXJjaCByZXN1bHQnLFxuICBsb2dvOiAnTG9nbycsXG4gIGFwcEl0ZW1Db3B5OiAnQ29weSdcbn1cbiIsIm1vZHVsZS5leHBvcnRzID0gX19XRUJQQUNLX0VYVEVSTkFMX01PRFVMRV9qaW11X2NvcmVfXzsiLCJtb2R1bGUuZXhwb3J0cyA9IF9fV0VCUEFDS19FWFRFUk5BTF9NT0RVTEVfamltdV9mb3JfYnVpbGRlcl90ZW1wbGF0ZXNfXzsiLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImV4cG9ydCAqIGZyb20gJy4vbGliL3NlcnZpY2UnXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=