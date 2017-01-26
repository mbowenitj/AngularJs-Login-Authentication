(function(window, angular, undefined) {'use strict';

var urlBase = "/api";
var authHeader = 'authorization';

/**
 * @ngdoc overview
 * @name lbServices
 * @module
 * @description
 *
 * The `lbServices` module provides services for interacting with
 * the models exposed by the LoopBack server via the REST API.
 *
 */
var module = angular.module("lbServices", ['ngResource']);

/**
 * @ngdoc object
 * @name lbServices.AccessToken
 * @header lbServices.AccessToken
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `AccessToken` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "AccessToken",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/AccessTokens/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.AccessToken#create
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/AccessTokens",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.AccessToken#createMany
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/AccessTokens",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.AccessToken#upsert
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/AccessTokens",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.AccessToken#exists
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` -
         */
        "exists": {
          url: urlBase + "/AccessTokens/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.AccessToken#findById
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/AccessTokens/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.AccessToken#find
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/AccessTokens",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.AccessToken#findOne
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/AccessTokens/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.AccessToken#updateAll
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/AccessTokens/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.AccessToken#deleteById
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/AccessTokens/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.AccessToken#count
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "count": {
          url: urlBase + "/AccessTokens/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.AccessToken#prototype$updateAttributes
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/AccessTokens/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.AccessToken#createChangeStream
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` -
         */
        "createChangeStream": {
          url: urlBase + "/AccessTokens/change-stream",
          method: "POST"
        },

        // INTERNAL. Use KBUser.accessTokens.findById() instead.
        "::findById::KBUser::accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/KBUsers/:id/accessTokens/:fk",
          method: "GET"
        },

        // INTERNAL. Use KBUser.accessTokens.destroyById() instead.
        "::destroyById::KBUser::accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/KBUsers/:id/accessTokens/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use KBUser.accessTokens.updateById() instead.
        "::updateById::KBUser::accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/KBUsers/:id/accessTokens/:fk",
          method: "PUT"
        },

        // INTERNAL. Use KBUser.accessTokens() instead.
        "::get::KBUser::accessTokens": {
          isArray: true,
          url: urlBase + "/KBUsers/:id/accessTokens",
          method: "GET"
        },

        // INTERNAL. Use KBUser.accessTokens.create() instead.
        "::create::KBUser::accessTokens": {
          url: urlBase + "/KBUsers/:id/accessTokens",
          method: "POST"
        },

        // INTERNAL. Use KBUser.accessTokens.createMany() instead.
        "::createMany::KBUser::accessTokens": {
          isArray: true,
          url: urlBase + "/KBUsers/:id/accessTokens",
          method: "POST"
        },

        // INTERNAL. Use KBUser.accessTokens.destroyAll() instead.
        "::delete::KBUser::accessTokens": {
          url: urlBase + "/KBUsers/:id/accessTokens",
          method: "DELETE"
        },

        // INTERNAL. Use KBUser.accessTokens.count() instead.
        "::count::KBUser::accessTokens": {
          url: urlBase + "/KBUsers/:id/accessTokens/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.AccessToken#updateOrCreate
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.AccessToken#update
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.AccessToken#destroyById
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.AccessToken#removeById
         * @methodOf lbServices.AccessToken
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.AccessToken#modelName
    * @propertyOf lbServices.AccessToken
    * @description
    * The name of the model represented by this $resource,
    * i.e. `AccessToken`.
    */
    R.modelName = "AccessToken";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Role
 * @header lbServices.Role
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Role` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Role",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Roles/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.Role#prototype$__findById__principals
         * @methodOf lbServices.Role
         *
         * @description
         *
         * Find a related item by id for principals.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for principals
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Role` object.)
         * </em>
         */
        "prototype$__findById__principals": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Roles/:id/principals/:fk",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Role#prototype$__destroyById__principals
         * @methodOf lbServices.Role
         *
         * @description
         *
         * Delete a related item by id for principals.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for principals
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__destroyById__principals": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Roles/:id/principals/:fk",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Role#prototype$__updateById__principals
         * @methodOf lbServices.Role
         *
         * @description
         *
         * Update a related item by id for principals.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for principals
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Role` object.)
         * </em>
         */
        "prototype$__updateById__principals": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Roles/:id/principals/:fk",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Role#prototype$__get__principals
         * @methodOf lbServices.Role
         *
         * @description
         *
         * Queries principals of Role.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Role` object.)
         * </em>
         */
        "prototype$__get__principals": {
          isArray: true,
          url: urlBase + "/Roles/:id/principals",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Role#prototype$__create__principals
         * @methodOf lbServices.Role
         *
         * @description
         *
         * Creates a new instance in principals of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Role` object.)
         * </em>
         */
        "prototype$__create__principals": {
          url: urlBase + "/Roles/:id/principals",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Role#prototype$__delete__principals
         * @methodOf lbServices.Role
         *
         * @description
         *
         * Deletes all principals of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "prototype$__delete__principals": {
          url: urlBase + "/Roles/:id/principals",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Role#prototype$__count__principals
         * @methodOf lbServices.Role
         *
         * @description
         *
         * Counts principals of Role.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "prototype$__count__principals": {
          url: urlBase + "/Roles/:id/principals/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Role#create
         * @methodOf lbServices.Role
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Role` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Roles",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Role#createMany
         * @methodOf lbServices.Role
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Role` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Roles",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Role#upsert
         * @methodOf lbServices.Role
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Role` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Roles",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Role#exists
         * @methodOf lbServices.Role
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` -
         */
        "exists": {
          url: urlBase + "/Roles/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Role#findById
         * @methodOf lbServices.Role
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Role` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Roles/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Role#find
         * @methodOf lbServices.Role
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Role` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Roles",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Role#findOne
         * @methodOf lbServices.Role
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Role` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Roles/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Role#updateAll
         * @methodOf lbServices.Role
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Roles/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Role#deleteById
         * @methodOf lbServices.Role
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Role` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Roles/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Role#count
         * @methodOf lbServices.Role
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "count": {
          url: urlBase + "/Roles/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Role#prototype$updateAttributes
         * @methodOf lbServices.Role
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Role` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Roles/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Role#createChangeStream
         * @methodOf lbServices.Role
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` -
         */
        "createChangeStream": {
          url: urlBase + "/Roles/change-stream",
          method: "POST"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Role#updateOrCreate
         * @methodOf lbServices.Role
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Role` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Role#update
         * @methodOf lbServices.Role
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Role#destroyById
         * @methodOf lbServices.Role
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Role` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Role#removeById
         * @methodOf lbServices.Role
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Role` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Role#modelName
    * @propertyOf lbServices.Role
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Role`.
    */
    R.modelName = "Role";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Ingredient
 * @header lbServices.Ingredient
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Ingredient` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Ingredient",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Ingredients/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Ingredient.ingredientCategory() instead.
        "prototype$__get__ingredientCategory": {
          url: urlBase + "/Ingredients/:id/ingredientCategory",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Ingredient#create
         * @methodOf lbServices.Ingredient
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ingredient` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Ingredients",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Ingredient#createMany
         * @methodOf lbServices.Ingredient
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ingredient` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Ingredients",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Ingredient#upsert
         * @methodOf lbServices.Ingredient
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ingredient` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Ingredients",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Ingredient#exists
         * @methodOf lbServices.Ingredient
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` -
         */
        "exists": {
          url: urlBase + "/Ingredients/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Ingredient#findById
         * @methodOf lbServices.Ingredient
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ingredient` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Ingredients/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Ingredient#find
         * @methodOf lbServices.Ingredient
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ingredient` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Ingredients",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Ingredient#findOne
         * @methodOf lbServices.Ingredient
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ingredient` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Ingredients/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Ingredient#updateAll
         * @methodOf lbServices.Ingredient
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Ingredients/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Ingredient#deleteById
         * @methodOf lbServices.Ingredient
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ingredient` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Ingredients/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Ingredient#count
         * @methodOf lbServices.Ingredient
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "count": {
          url: urlBase + "/Ingredients/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Ingredient#prototype$updateAttributes
         * @methodOf lbServices.Ingredient
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ingredient` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Ingredients/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Ingredient#createChangeStream
         * @methodOf lbServices.Ingredient
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` -
         */
        "createChangeStream": {
          url: urlBase + "/Ingredients/change-stream",
          method: "POST"
        },

        // INTERNAL. Use IngredientCategory.ingredients.findById() instead.
        "::findById::IngredientCategory::ingredients": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/IngredientCategories/:id/ingredients/:fk",
          method: "GET"
        },

        // INTERNAL. Use IngredientCategory.ingredients.destroyById() instead.
        "::destroyById::IngredientCategory::ingredients": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/IngredientCategories/:id/ingredients/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use IngredientCategory.ingredients.updateById() instead.
        "::updateById::IngredientCategory::ingredients": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/IngredientCategories/:id/ingredients/:fk",
          method: "PUT"
        },

        // INTERNAL. Use IngredientCategory.ingredients() instead.
        "::get::IngredientCategory::ingredients": {
          isArray: true,
          url: urlBase + "/IngredientCategories/:id/ingredients",
          method: "GET"
        },

        // INTERNAL. Use IngredientCategory.ingredients.create() instead.
        "::create::IngredientCategory::ingredients": {
          url: urlBase + "/IngredientCategories/:id/ingredients",
          method: "POST"
        },

        // INTERNAL. Use IngredientCategory.ingredients.createMany() instead.
        "::createMany::IngredientCategory::ingredients": {
          isArray: true,
          url: urlBase + "/IngredientCategories/:id/ingredients",
          method: "POST"
        },

        // INTERNAL. Use IngredientCategory.ingredients.destroyAll() instead.
        "::delete::IngredientCategory::ingredients": {
          url: urlBase + "/IngredientCategories/:id/ingredients",
          method: "DELETE"
        },

        // INTERNAL. Use IngredientCategory.ingredients.count() instead.
        "::count::IngredientCategory::ingredients": {
          url: urlBase + "/IngredientCategories/:id/ingredients/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Ingredient#updateOrCreate
         * @methodOf lbServices.Ingredient
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ingredient` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Ingredient#update
         * @methodOf lbServices.Ingredient
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Ingredient#destroyById
         * @methodOf lbServices.Ingredient
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ingredient` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Ingredient#removeById
         * @methodOf lbServices.Ingredient
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ingredient` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Ingredient#modelName
    * @propertyOf lbServices.Ingredient
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Ingredient`.
    */
    R.modelName = "Ingredient";


        /**
         * @ngdoc method
         * @name lbServices.Ingredient#ingredientCategory
         * @methodOf lbServices.Ingredient
         *
         * @description
         *
         * Fetches belongsTo relation ingredientCategory.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IngredientCategory` object.)
         * </em>
         */
        R.ingredientCategory = function() {
          var TargetResource = $injector.get("IngredientCategory");
          var action = TargetResource["::get::Ingredient::ingredientCategory"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.IngredientCategory
 * @header lbServices.IngredientCategory
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `IngredientCategory` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "IngredientCategory",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/IngredientCategories/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use IngredientCategory.ingredients.findById() instead.
        "prototype$__findById__ingredients": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/IngredientCategories/:id/ingredients/:fk",
          method: "GET"
        },

        // INTERNAL. Use IngredientCategory.ingredients.destroyById() instead.
        "prototype$__destroyById__ingredients": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/IngredientCategories/:id/ingredients/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use IngredientCategory.ingredients.updateById() instead.
        "prototype$__updateById__ingredients": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/IngredientCategories/:id/ingredients/:fk",
          method: "PUT"
        },

        // INTERNAL. Use IngredientCategory.recipe() instead.
        "prototype$__get__recipe": {
          url: urlBase + "/IngredientCategories/:id/recipe",
          method: "GET"
        },

        // INTERNAL. Use IngredientCategory.ingredients() instead.
        "prototype$__get__ingredients": {
          isArray: true,
          url: urlBase + "/IngredientCategories/:id/ingredients",
          method: "GET"
        },

        // INTERNAL. Use IngredientCategory.ingredients.create() instead.
        "prototype$__create__ingredients": {
          url: urlBase + "/IngredientCategories/:id/ingredients",
          method: "POST"
        },

        // INTERNAL. Use IngredientCategory.ingredients.destroyAll() instead.
        "prototype$__delete__ingredients": {
          url: urlBase + "/IngredientCategories/:id/ingredients",
          method: "DELETE"
        },

        // INTERNAL. Use IngredientCategory.ingredients.count() instead.
        "prototype$__count__ingredients": {
          url: urlBase + "/IngredientCategories/:id/ingredients/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.IngredientCategory#create
         * @methodOf lbServices.IngredientCategory
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IngredientCategory` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/IngredientCategories",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.IngredientCategory#createMany
         * @methodOf lbServices.IngredientCategory
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IngredientCategory` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/IngredientCategories",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.IngredientCategory#upsert
         * @methodOf lbServices.IngredientCategory
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IngredientCategory` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/IngredientCategories",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.IngredientCategory#exists
         * @methodOf lbServices.IngredientCategory
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` -
         */
        "exists": {
          url: urlBase + "/IngredientCategories/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.IngredientCategory#findById
         * @methodOf lbServices.IngredientCategory
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IngredientCategory` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/IngredientCategories/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.IngredientCategory#find
         * @methodOf lbServices.IngredientCategory
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IngredientCategory` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/IngredientCategories",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.IngredientCategory#findOne
         * @methodOf lbServices.IngredientCategory
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IngredientCategory` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/IngredientCategories/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.IngredientCategory#updateAll
         * @methodOf lbServices.IngredientCategory
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/IngredientCategories/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.IngredientCategory#deleteById
         * @methodOf lbServices.IngredientCategory
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IngredientCategory` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/IngredientCategories/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.IngredientCategory#count
         * @methodOf lbServices.IngredientCategory
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "count": {
          url: urlBase + "/IngredientCategories/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.IngredientCategory#prototype$updateAttributes
         * @methodOf lbServices.IngredientCategory
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IngredientCategory` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/IngredientCategories/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.IngredientCategory#createChangeStream
         * @methodOf lbServices.IngredientCategory
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` -
         */
        "createChangeStream": {
          url: urlBase + "/IngredientCategories/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Ingredient.ingredientCategory() instead.
        "::get::Ingredient::ingredientCategory": {
          url: urlBase + "/Ingredients/:id/ingredientCategory",
          method: "GET"
        },

        // INTERNAL. Use Recipe.ingredientCategories.findById() instead.
        "::findById::Recipe::ingredientCategories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/ingredientCategories/:fk",
          method: "GET"
        },

        // INTERNAL. Use Recipe.ingredientCategories.destroyById() instead.
        "::destroyById::Recipe::ingredientCategories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/ingredientCategories/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Recipe.ingredientCategories.updateById() instead.
        "::updateById::Recipe::ingredientCategories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/ingredientCategories/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Recipe.ingredientCategories() instead.
        "::get::Recipe::ingredientCategories": {
          isArray: true,
          url: urlBase + "/Recipes/:id/ingredientCategories",
          method: "GET"
        },

        // INTERNAL. Use Recipe.ingredientCategories.create() instead.
        "::create::Recipe::ingredientCategories": {
          url: urlBase + "/Recipes/:id/ingredientCategories",
          method: "POST"
        },

        // INTERNAL. Use Recipe.ingredientCategories.createMany() instead.
        "::createMany::Recipe::ingredientCategories": {
          isArray: true,
          url: urlBase + "/Recipes/:id/ingredientCategories",
          method: "POST"
        },

        // INTERNAL. Use Recipe.ingredientCategories.destroyAll() instead.
        "::delete::Recipe::ingredientCategories": {
          url: urlBase + "/Recipes/:id/ingredientCategories",
          method: "DELETE"
        },

        // INTERNAL. Use Recipe.ingredientCategories.count() instead.
        "::count::Recipe::ingredientCategories": {
          url: urlBase + "/Recipes/:id/ingredientCategories/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.IngredientCategory#updateOrCreate
         * @methodOf lbServices.IngredientCategory
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IngredientCategory` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.IngredientCategory#update
         * @methodOf lbServices.IngredientCategory
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.IngredientCategory#destroyById
         * @methodOf lbServices.IngredientCategory
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IngredientCategory` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.IngredientCategory#removeById
         * @methodOf lbServices.IngredientCategory
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IngredientCategory` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.IngredientCategory#modelName
    * @propertyOf lbServices.IngredientCategory
    * @description
    * The name of the model represented by this $resource,
    * i.e. `IngredientCategory`.
    */
    R.modelName = "IngredientCategory";

    /**
     * @ngdoc object
     * @name lbServices.IngredientCategory.ingredients
     * @header lbServices.IngredientCategory.ingredients
     * @object
     * @description
     *
     * The object `IngredientCategory.ingredients` groups methods
     * manipulating `Ingredient` instances related to `IngredientCategory`.
     *
     * Call {@link lbServices.IngredientCategory#ingredients IngredientCategory.ingredients()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.IngredientCategory#ingredients
         * @methodOf lbServices.IngredientCategory
         *
         * @description
         *
         * Queries ingredients of IngredientCategory.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ingredient` object.)
         * </em>
         */
        R.ingredients = function() {
          var TargetResource = $injector.get("Ingredient");
          var action = TargetResource["::get::IngredientCategory::ingredients"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.IngredientCategory.ingredients#count
         * @methodOf lbServices.IngredientCategory.ingredients
         *
         * @description
         *
         * Counts ingredients of IngredientCategory.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        R.ingredients.count = function() {
          var TargetResource = $injector.get("Ingredient");
          var action = TargetResource["::count::IngredientCategory::ingredients"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.IngredientCategory.ingredients#create
         * @methodOf lbServices.IngredientCategory.ingredients
         *
         * @description
         *
         * Creates a new instance in ingredients of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ingredient` object.)
         * </em>
         */
        R.ingredients.create = function() {
          var TargetResource = $injector.get("Ingredient");
          var action = TargetResource["::create::IngredientCategory::ingredients"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.IngredientCategory.ingredients#createMany
         * @methodOf lbServices.IngredientCategory.ingredients
         *
         * @description
         *
         * Creates a new instance in ingredients of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ingredient` object.)
         * </em>
         */
        R.ingredients.createMany = function() {
          var TargetResource = $injector.get("Ingredient");
          var action = TargetResource["::createMany::IngredientCategory::ingredients"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.IngredientCategory.ingredients#destroyAll
         * @methodOf lbServices.IngredientCategory.ingredients
         *
         * @description
         *
         * Deletes all ingredients of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.ingredients.destroyAll = function() {
          var TargetResource = $injector.get("Ingredient");
          var action = TargetResource["::delete::IngredientCategory::ingredients"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.IngredientCategory.ingredients#destroyById
         * @methodOf lbServices.IngredientCategory.ingredients
         *
         * @description
         *
         * Delete a related item by id for ingredients.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for ingredients
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.ingredients.destroyById = function() {
          var TargetResource = $injector.get("Ingredient");
          var action = TargetResource["::destroyById::IngredientCategory::ingredients"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.IngredientCategory.ingredients#findById
         * @methodOf lbServices.IngredientCategory.ingredients
         *
         * @description
         *
         * Find a related item by id for ingredients.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for ingredients
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ingredient` object.)
         * </em>
         */
        R.ingredients.findById = function() {
          var TargetResource = $injector.get("Ingredient");
          var action = TargetResource["::findById::IngredientCategory::ingredients"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.IngredientCategory.ingredients#updateById
         * @methodOf lbServices.IngredientCategory.ingredients
         *
         * @description
         *
         * Update a related item by id for ingredients.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for ingredients
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Ingredient` object.)
         * </em>
         */
        R.ingredients.updateById = function() {
          var TargetResource = $injector.get("Ingredient");
          var action = TargetResource["::updateById::IngredientCategory::ingredients"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.IngredientCategory#recipe
         * @methodOf lbServices.IngredientCategory
         *
         * @description
         *
         * Fetches belongsTo relation recipe.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        R.recipe = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::get::IngredientCategory::recipe"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Instruction
 * @header lbServices.Instruction
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Instruction` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Instruction",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Instructions/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Instruction.instructionCategory() instead.
        "prototype$__get__instructionCategory": {
          url: urlBase + "/Instructions/:id/instructionCategory",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Instruction#create
         * @methodOf lbServices.Instruction
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Instruction` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Instructions",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Instruction#createMany
         * @methodOf lbServices.Instruction
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Instruction` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Instructions",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Instruction#upsert
         * @methodOf lbServices.Instruction
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Instruction` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Instructions",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Instruction#exists
         * @methodOf lbServices.Instruction
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` -
         */
        "exists": {
          url: urlBase + "/Instructions/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Instruction#findById
         * @methodOf lbServices.Instruction
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Instruction` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Instructions/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Instruction#find
         * @methodOf lbServices.Instruction
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Instruction` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Instructions",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Instruction#findOne
         * @methodOf lbServices.Instruction
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Instruction` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Instructions/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Instruction#updateAll
         * @methodOf lbServices.Instruction
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Instructions/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Instruction#deleteById
         * @methodOf lbServices.Instruction
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Instruction` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Instructions/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Instruction#count
         * @methodOf lbServices.Instruction
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "count": {
          url: urlBase + "/Instructions/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Instruction#prototype$updateAttributes
         * @methodOf lbServices.Instruction
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Instruction` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Instructions/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Instruction#createChangeStream
         * @methodOf lbServices.Instruction
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` -
         */
        "createChangeStream": {
          url: urlBase + "/Instructions/change-stream",
          method: "POST"
        },

        // INTERNAL. Use InstructionCategory.instructions.findById() instead.
        "::findById::InstructionCategory::instructions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/InstructionCategories/:id/instructions/:fk",
          method: "GET"
        },

        // INTERNAL. Use InstructionCategory.instructions.destroyById() instead.
        "::destroyById::InstructionCategory::instructions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/InstructionCategories/:id/instructions/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use InstructionCategory.instructions.updateById() instead.
        "::updateById::InstructionCategory::instructions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/InstructionCategories/:id/instructions/:fk",
          method: "PUT"
        },

        // INTERNAL. Use InstructionCategory.instructions() instead.
        "::get::InstructionCategory::instructions": {
          isArray: true,
          url: urlBase + "/InstructionCategories/:id/instructions",
          method: "GET"
        },

        // INTERNAL. Use InstructionCategory.instructions.create() instead.
        "::create::InstructionCategory::instructions": {
          url: urlBase + "/InstructionCategories/:id/instructions",
          method: "POST"
        },

        // INTERNAL. Use InstructionCategory.instructions.createMany() instead.
        "::createMany::InstructionCategory::instructions": {
          isArray: true,
          url: urlBase + "/InstructionCategories/:id/instructions",
          method: "POST"
        },

        // INTERNAL. Use InstructionCategory.instructions.destroyAll() instead.
        "::delete::InstructionCategory::instructions": {
          url: urlBase + "/InstructionCategories/:id/instructions",
          method: "DELETE"
        },

        // INTERNAL. Use InstructionCategory.instructions.count() instead.
        "::count::InstructionCategory::instructions": {
          url: urlBase + "/InstructionCategories/:id/instructions/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Instruction#updateOrCreate
         * @methodOf lbServices.Instruction
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Instruction` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Instruction#update
         * @methodOf lbServices.Instruction
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Instruction#destroyById
         * @methodOf lbServices.Instruction
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Instruction` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Instruction#removeById
         * @methodOf lbServices.Instruction
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Instruction` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Instruction#modelName
    * @propertyOf lbServices.Instruction
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Instruction`.
    */
    R.modelName = "Instruction";


        /**
         * @ngdoc method
         * @name lbServices.Instruction#instructionCategory
         * @methodOf lbServices.Instruction
         *
         * @description
         *
         * Fetches belongsTo relation instructionCategory.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `InstructionCategory` object.)
         * </em>
         */
        R.instructionCategory = function() {
          var TargetResource = $injector.get("InstructionCategory");
          var action = TargetResource["::get::Instruction::instructionCategory"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.InstructionCategory
 * @header lbServices.InstructionCategory
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `InstructionCategory` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "InstructionCategory",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/InstructionCategories/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use InstructionCategory.instructions.findById() instead.
        "prototype$__findById__instructions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/InstructionCategories/:id/instructions/:fk",
          method: "GET"
        },

        // INTERNAL. Use InstructionCategory.instructions.destroyById() instead.
        "prototype$__destroyById__instructions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/InstructionCategories/:id/instructions/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use InstructionCategory.instructions.updateById() instead.
        "prototype$__updateById__instructions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/InstructionCategories/:id/instructions/:fk",
          method: "PUT"
        },

        // INTERNAL. Use InstructionCategory.recipe() instead.
        "prototype$__get__recipe": {
          url: urlBase + "/InstructionCategories/:id/recipe",
          method: "GET"
        },

        // INTERNAL. Use InstructionCategory.instructions() instead.
        "prototype$__get__instructions": {
          isArray: true,
          url: urlBase + "/InstructionCategories/:id/instructions",
          method: "GET"
        },

        // INTERNAL. Use InstructionCategory.instructions.create() instead.
        "prototype$__create__instructions": {
          url: urlBase + "/InstructionCategories/:id/instructions",
          method: "POST"
        },

        // INTERNAL. Use InstructionCategory.instructions.destroyAll() instead.
        "prototype$__delete__instructions": {
          url: urlBase + "/InstructionCategories/:id/instructions",
          method: "DELETE"
        },

        // INTERNAL. Use InstructionCategory.instructions.count() instead.
        "prototype$__count__instructions": {
          url: urlBase + "/InstructionCategories/:id/instructions/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.InstructionCategory#create
         * @methodOf lbServices.InstructionCategory
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `InstructionCategory` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/InstructionCategories",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.InstructionCategory#createMany
         * @methodOf lbServices.InstructionCategory
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `InstructionCategory` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/InstructionCategories",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.InstructionCategory#upsert
         * @methodOf lbServices.InstructionCategory
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `InstructionCategory` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/InstructionCategories",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.InstructionCategory#exists
         * @methodOf lbServices.InstructionCategory
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` -
         */
        "exists": {
          url: urlBase + "/InstructionCategories/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.InstructionCategory#findById
         * @methodOf lbServices.InstructionCategory
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `InstructionCategory` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/InstructionCategories/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.InstructionCategory#find
         * @methodOf lbServices.InstructionCategory
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `InstructionCategory` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/InstructionCategories",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.InstructionCategory#findOne
         * @methodOf lbServices.InstructionCategory
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `InstructionCategory` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/InstructionCategories/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.InstructionCategory#updateAll
         * @methodOf lbServices.InstructionCategory
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/InstructionCategories/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.InstructionCategory#deleteById
         * @methodOf lbServices.InstructionCategory
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `InstructionCategory` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/InstructionCategories/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.InstructionCategory#count
         * @methodOf lbServices.InstructionCategory
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "count": {
          url: urlBase + "/InstructionCategories/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.InstructionCategory#prototype$updateAttributes
         * @methodOf lbServices.InstructionCategory
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `InstructionCategory` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/InstructionCategories/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.InstructionCategory#createChangeStream
         * @methodOf lbServices.InstructionCategory
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` -
         */
        "createChangeStream": {
          url: urlBase + "/InstructionCategories/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Instruction.instructionCategory() instead.
        "::get::Instruction::instructionCategory": {
          url: urlBase + "/Instructions/:id/instructionCategory",
          method: "GET"
        },

        // INTERNAL. Use Recipe.instructionCategories.findById() instead.
        "::findById::Recipe::instructionCategories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/instructionCategories/:fk",
          method: "GET"
        },

        // INTERNAL. Use Recipe.instructionCategories.destroyById() instead.
        "::destroyById::Recipe::instructionCategories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/instructionCategories/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Recipe.instructionCategories.updateById() instead.
        "::updateById::Recipe::instructionCategories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/instructionCategories/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Recipe.instructionCategories() instead.
        "::get::Recipe::instructionCategories": {
          isArray: true,
          url: urlBase + "/Recipes/:id/instructionCategories",
          method: "GET"
        },

        // INTERNAL. Use Recipe.instructionCategories.create() instead.
        "::create::Recipe::instructionCategories": {
          url: urlBase + "/Recipes/:id/instructionCategories",
          method: "POST"
        },

        // INTERNAL. Use Recipe.instructionCategories.createMany() instead.
        "::createMany::Recipe::instructionCategories": {
          isArray: true,
          url: urlBase + "/Recipes/:id/instructionCategories",
          method: "POST"
        },

        // INTERNAL. Use Recipe.instructionCategories.destroyAll() instead.
        "::delete::Recipe::instructionCategories": {
          url: urlBase + "/Recipes/:id/instructionCategories",
          method: "DELETE"
        },

        // INTERNAL. Use Recipe.instructionCategories.count() instead.
        "::count::Recipe::instructionCategories": {
          url: urlBase + "/Recipes/:id/instructionCategories/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.InstructionCategory#updateOrCreate
         * @methodOf lbServices.InstructionCategory
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `InstructionCategory` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.InstructionCategory#update
         * @methodOf lbServices.InstructionCategory
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.InstructionCategory#destroyById
         * @methodOf lbServices.InstructionCategory
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `InstructionCategory` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.InstructionCategory#removeById
         * @methodOf lbServices.InstructionCategory
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `InstructionCategory` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.InstructionCategory#modelName
    * @propertyOf lbServices.InstructionCategory
    * @description
    * The name of the model represented by this $resource,
    * i.e. `InstructionCategory`.
    */
    R.modelName = "InstructionCategory";

    /**
     * @ngdoc object
     * @name lbServices.InstructionCategory.instructions
     * @header lbServices.InstructionCategory.instructions
     * @object
     * @description
     *
     * The object `InstructionCategory.instructions` groups methods
     * manipulating `Instruction` instances related to `InstructionCategory`.
     *
     * Call {@link lbServices.InstructionCategory#instructions InstructionCategory.instructions()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.InstructionCategory#instructions
         * @methodOf lbServices.InstructionCategory
         *
         * @description
         *
         * Queries instructions of InstructionCategory.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Instruction` object.)
         * </em>
         */
        R.instructions = function() {
          var TargetResource = $injector.get("Instruction");
          var action = TargetResource["::get::InstructionCategory::instructions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.InstructionCategory.instructions#count
         * @methodOf lbServices.InstructionCategory.instructions
         *
         * @description
         *
         * Counts instructions of InstructionCategory.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        R.instructions.count = function() {
          var TargetResource = $injector.get("Instruction");
          var action = TargetResource["::count::InstructionCategory::instructions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.InstructionCategory.instructions#create
         * @methodOf lbServices.InstructionCategory.instructions
         *
         * @description
         *
         * Creates a new instance in instructions of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Instruction` object.)
         * </em>
         */
        R.instructions.create = function() {
          var TargetResource = $injector.get("Instruction");
          var action = TargetResource["::create::InstructionCategory::instructions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.InstructionCategory.instructions#createMany
         * @methodOf lbServices.InstructionCategory.instructions
         *
         * @description
         *
         * Creates a new instance in instructions of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Instruction` object.)
         * </em>
         */
        R.instructions.createMany = function() {
          var TargetResource = $injector.get("Instruction");
          var action = TargetResource["::createMany::InstructionCategory::instructions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.InstructionCategory.instructions#destroyAll
         * @methodOf lbServices.InstructionCategory.instructions
         *
         * @description
         *
         * Deletes all instructions of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.instructions.destroyAll = function() {
          var TargetResource = $injector.get("Instruction");
          var action = TargetResource["::delete::InstructionCategory::instructions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.InstructionCategory.instructions#destroyById
         * @methodOf lbServices.InstructionCategory.instructions
         *
         * @description
         *
         * Delete a related item by id for instructions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for instructions
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.instructions.destroyById = function() {
          var TargetResource = $injector.get("Instruction");
          var action = TargetResource["::destroyById::InstructionCategory::instructions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.InstructionCategory.instructions#findById
         * @methodOf lbServices.InstructionCategory.instructions
         *
         * @description
         *
         * Find a related item by id for instructions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for instructions
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Instruction` object.)
         * </em>
         */
        R.instructions.findById = function() {
          var TargetResource = $injector.get("Instruction");
          var action = TargetResource["::findById::InstructionCategory::instructions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.InstructionCategory.instructions#updateById
         * @methodOf lbServices.InstructionCategory.instructions
         *
         * @description
         *
         * Update a related item by id for instructions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for instructions
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Instruction` object.)
         * </em>
         */
        R.instructions.updateById = function() {
          var TargetResource = $injector.get("Instruction");
          var action = TargetResource["::updateById::InstructionCategory::instructions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.InstructionCategory#recipe
         * @methodOf lbServices.InstructionCategory
         *
         * @description
         *
         * Fetches belongsTo relation recipe.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        R.recipe = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::get::InstructionCategory::recipe"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Recipe
 * @header lbServices.Recipe
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Recipe` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Recipe",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Recipes/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Recipe.ingredientCategories.findById() instead.
        "prototype$__findById__ingredientCategories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/ingredientCategories/:fk",
          method: "GET"
        },

        // INTERNAL. Use Recipe.ingredientCategories.destroyById() instead.
        "prototype$__destroyById__ingredientCategories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/ingredientCategories/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Recipe.ingredientCategories.updateById() instead.
        "prototype$__updateById__ingredientCategories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/ingredientCategories/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Recipe.instructionCategories.findById() instead.
        "prototype$__findById__instructionCategories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/instructionCategories/:fk",
          method: "GET"
        },

        // INTERNAL. Use Recipe.instructionCategories.destroyById() instead.
        "prototype$__destroyById__instructionCategories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/instructionCategories/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Recipe.instructionCategories.updateById() instead.
        "prototype$__updateById__instructionCategories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/instructionCategories/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Recipe.categories.findById() instead.
        "prototype$__findById__categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/categories/:fk",
          method: "GET"
        },

        // INTERNAL. Use Recipe.categories.destroyById() instead.
        "prototype$__destroyById__categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/categories/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Recipe.categories.updateById() instead.
        "prototype$__updateById__categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/categories/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Recipe.categories.link() instead.
        "prototype$__link__categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/categories/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Recipe.categories.unlink() instead.
        "prototype$__unlink__categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/categories/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Recipe.categories.exists() instead.
        "prototype$__exists__categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/categories/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Recipe.occasions.findById() instead.
        "prototype$__findById__occasions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/occasions/:fk",
          method: "GET"
        },

        // INTERNAL. Use Recipe.occasions.destroyById() instead.
        "prototype$__destroyById__occasions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/occasions/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Recipe.occasions.updateById() instead.
        "prototype$__updateById__occasions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/occasions/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Recipe.occasions.link() instead.
        "prototype$__link__occasions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/occasions/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Recipe.occasions.unlink() instead.
        "prototype$__unlink__occasions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/occasions/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Recipe.occasions.exists() instead.
        "prototype$__exists__occasions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/occasions/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Recipe.cuts.findById() instead.
        "prototype$__findById__cuts": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/cuts/:fk",
          method: "GET"
        },

        // INTERNAL. Use Recipe.cuts.destroyById() instead.
        "prototype$__destroyById__cuts": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/cuts/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Recipe.cuts.updateById() instead.
        "prototype$__updateById__cuts": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/cuts/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Recipe.cuts.link() instead.
        "prototype$__link__cuts": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/cuts/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Recipe.cuts.unlink() instead.
        "prototype$__unlink__cuts": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/cuts/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Recipe.cuts.exists() instead.
        "prototype$__exists__cuts": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/cuts/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Recipe.ratings.findById() instead.
        "prototype$__findById__ratings": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/ratings/:fk",
          method: "GET"
        },

        // INTERNAL. Use Recipe.ratings.destroyById() instead.
        "prototype$__destroyById__ratings": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/ratings/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Recipe.ratings.updateById() instead.
        "prototype$__updateById__ratings": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/ratings/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Recipe.favourites.findById() instead.
        "prototype$__findById__favourites": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/favourites/:fk",
          method: "GET"
        },

        // INTERNAL. Use Recipe.favourites.destroyById() instead.
        "prototype$__destroyById__favourites": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/favourites/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Recipe.favourites.updateById() instead.
        "prototype$__updateById__favourites": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/favourites/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Recipe.keywords.findById() instead.
        "prototype$__findById__keywords": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/keywords/:fk",
          method: "GET"
        },

        // INTERNAL. Use Recipe.keywords.destroyById() instead.
        "prototype$__destroyById__keywords": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/keywords/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Recipe.keywords.updateById() instead.
        "prototype$__updateById__keywords": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/keywords/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Recipe.keywords.link() instead.
        "prototype$__link__keywords": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/keywords/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Recipe.keywords.unlink() instead.
        "prototype$__unlink__keywords": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/keywords/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Recipe.keywords.exists() instead.
        "prototype$__exists__keywords": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/keywords/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Recipe.ingredientCategories() instead.
        "prototype$__get__ingredientCategories": {
          isArray: true,
          url: urlBase + "/Recipes/:id/ingredientCategories",
          method: "GET"
        },

        // INTERNAL. Use Recipe.ingredientCategories.create() instead.
        "prototype$__create__ingredientCategories": {
          url: urlBase + "/Recipes/:id/ingredientCategories",
          method: "POST"
        },

        // INTERNAL. Use Recipe.ingredientCategories.destroyAll() instead.
        "prototype$__delete__ingredientCategories": {
          url: urlBase + "/Recipes/:id/ingredientCategories",
          method: "DELETE"
        },

        // INTERNAL. Use Recipe.ingredientCategories.count() instead.
        "prototype$__count__ingredientCategories": {
          url: urlBase + "/Recipes/:id/ingredientCategories/count",
          method: "GET"
        },

        // INTERNAL. Use Recipe.instructionCategories() instead.
        "prototype$__get__instructionCategories": {
          isArray: true,
          url: urlBase + "/Recipes/:id/instructionCategories",
          method: "GET"
        },

        // INTERNAL. Use Recipe.instructionCategories.create() instead.
        "prototype$__create__instructionCategories": {
          url: urlBase + "/Recipes/:id/instructionCategories",
          method: "POST"
        },

        // INTERNAL. Use Recipe.instructionCategories.destroyAll() instead.
        "prototype$__delete__instructionCategories": {
          url: urlBase + "/Recipes/:id/instructionCategories",
          method: "DELETE"
        },

        // INTERNAL. Use Recipe.instructionCategories.count() instead.
        "prototype$__count__instructionCategories": {
          url: urlBase + "/Recipes/:id/instructionCategories/count",
          method: "GET"
        },

        // INTERNAL. Use Recipe.categories() instead.
        "prototype$__get__categories": {
          isArray: true,
          url: urlBase + "/Recipes/:id/categories",
          method: "GET"
        },

        // INTERNAL. Use Recipe.categories.create() instead.
        "prototype$__create__categories": {
          url: urlBase + "/Recipes/:id/categories",
          method: "POST"
        },

        // INTERNAL. Use Recipe.categories.destroyAll() instead.
        "prototype$__delete__categories": {
          url: urlBase + "/Recipes/:id/categories",
          method: "DELETE"
        },

        // INTERNAL. Use Recipe.categories.count() instead.
        "prototype$__count__categories": {
          url: urlBase + "/Recipes/:id/categories/count",
          method: "GET"
        },

        // INTERNAL. Use Recipe.occasions() instead.
        "prototype$__get__occasions": {
          isArray: true,
          url: urlBase + "/Recipes/:id/occasions",
          method: "GET"
        },

        // INTERNAL. Use Recipe.occasions.create() instead.
        "prototype$__create__occasions": {
          url: urlBase + "/Recipes/:id/occasions",
          method: "POST"
        },

        // INTERNAL. Use Recipe.occasions.destroyAll() instead.
        "prototype$__delete__occasions": {
          url: urlBase + "/Recipes/:id/occasions",
          method: "DELETE"
        },

        // INTERNAL. Use Recipe.occasions.count() instead.
        "prototype$__count__occasions": {
          url: urlBase + "/Recipes/:id/occasions/count",
          method: "GET"
        },

        // INTERNAL. Use Recipe.cuts() instead.
        "prototype$__get__cuts": {
          isArray: true,
          url: urlBase + "/Recipes/:id/cuts",
          method: "GET"
        },

        // INTERNAL. Use Recipe.cuts.create() instead.
        "prototype$__create__cuts": {
          url: urlBase + "/Recipes/:id/cuts",
          method: "POST"
        },

        // INTERNAL. Use Recipe.cuts.destroyAll() instead.
        "prototype$__delete__cuts": {
          url: urlBase + "/Recipes/:id/cuts",
          method: "DELETE"
        },

        // INTERNAL. Use Recipe.cuts.count() instead.
        "prototype$__count__cuts": {
          url: urlBase + "/Recipes/:id/cuts/count",
          method: "GET"
        },

        // INTERNAL. Use Recipe.ratings() instead.
        "prototype$__get__ratings": {
          isArray: true,
          url: urlBase + "/Recipes/:id/ratings",
          method: "GET"
        },

        // INTERNAL. Use Recipe.ratings.create() instead.
        "prototype$__create__ratings": {
          url: urlBase + "/Recipes/:id/ratings",
          method: "POST"
        },

        // INTERNAL. Use Recipe.ratings.destroyAll() instead.
        "prototype$__delete__ratings": {
          url: urlBase + "/Recipes/:id/ratings",
          method: "DELETE"
        },

        // INTERNAL. Use Recipe.ratings.count() instead.
        "prototype$__count__ratings": {
          url: urlBase + "/Recipes/:id/ratings/count",
          method: "GET"
        },

        // INTERNAL. Use Recipe.favourites() instead.
        "prototype$__get__favourites": {
          isArray: true,
          url: urlBase + "/Recipes/:id/favourites",
          method: "GET"
        },

        // INTERNAL. Use Recipe.favourites.create() instead.
        "prototype$__create__favourites": {
          url: urlBase + "/Recipes/:id/favourites",
          method: "POST"
        },

        // INTERNAL. Use Recipe.favourites.destroyAll() instead.
        "prototype$__delete__favourites": {
          url: urlBase + "/Recipes/:id/favourites",
          method: "DELETE"
        },

        // INTERNAL. Use Recipe.favourites.count() instead.
        "prototype$__count__favourites": {
          url: urlBase + "/Recipes/:id/favourites/count",
          method: "GET"
        },

        // INTERNAL. Use Recipe.keywords() instead.
        "prototype$__get__keywords": {
          isArray: true,
          url: urlBase + "/Recipes/:id/keywords",
          method: "GET"
        },

        // INTERNAL. Use Recipe.keywords.create() instead.
        "prototype$__create__keywords": {
          url: urlBase + "/Recipes/:id/keywords",
          method: "POST"
        },

        // INTERNAL. Use Recipe.keywords.destroyAll() instead.
        "prototype$__delete__keywords": {
          url: urlBase + "/Recipes/:id/keywords",
          method: "DELETE"
        },

        // INTERNAL. Use Recipe.keywords.count() instead.
        "prototype$__count__keywords": {
          url: urlBase + "/Recipes/:id/keywords/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Recipe#create
         * @methodOf lbServices.Recipe
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Recipes",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Recipe#createMany
         * @methodOf lbServices.Recipe
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Recipes",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Recipe#upsert
         * @methodOf lbServices.Recipe
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Recipes",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Recipe#exists
         * @methodOf lbServices.Recipe
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` -
         */
        "exists": {
          url: urlBase + "/Recipes/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Recipe#findById
         * @methodOf lbServices.Recipe
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Recipes/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Recipe#find
         * @methodOf lbServices.Recipe
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Recipes",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Recipe#findOne
         * @methodOf lbServices.Recipe
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Recipes/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Recipe#updateAll
         * @methodOf lbServices.Recipe
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Recipes/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Recipe#deleteById
         * @methodOf lbServices.Recipe
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Recipes/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Recipe#count
         * @methodOf lbServices.Recipe
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "count": {
          url: urlBase + "/Recipes/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Recipe#prototype$updateAttributes
         * @methodOf lbServices.Recipe
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Recipes/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Recipe#createChangeStream
         * @methodOf lbServices.Recipe
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` -
         */
        "createChangeStream": {
          url: urlBase + "/Recipes/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Recipe#createFromJSON
         * @methodOf lbServices.Recipe
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `recipe` – `{object=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "createFromJSON": {
          url: urlBase + "/Recipes/createFromJSON",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Recipe#deleteCompletely
         * @methodOf lbServices.Recipe
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `id` – `{string=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `status` – `{object=}` -
         */
        "deleteCompletely": {
          url: urlBase + "/Recipes/deleteCompletely",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Recipe#updateContainsAlcohol
         * @methodOf lbServices.Recipe
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `searchFor` – `{*=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `updateCount` – `{int=}` -
         */
        "updateContainsAlcohol": {
          url: urlBase + "/Recipes/updateContainsAlcohol",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Recipe#uploadImage
         * @methodOf lbServices.Recipe
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `req` – `{object=}` -
         *
         *  - `res` – `{object=}` -
         *
         *  - `id` – `{string=}` - id of Recipe
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        "uploadImage": {
          url: urlBase + "/Recipes/uploadImage",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Recipe#updateCategories
         * @methodOf lbServices.Recipe
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method does not accept any data. Supply an empty object.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `status` – `{object=}` -
         */
        "updateCategories": {
          url: urlBase + "/Recipes/updateCategories",
          method: "POST"
        },

        // INTERNAL. Use IngredientCategory.recipe() instead.
        "::get::IngredientCategory::recipe": {
          url: urlBase + "/IngredientCategories/:id/recipe",
          method: "GET"
        },

        // INTERNAL. Use InstructionCategory.recipe() instead.
        "::get::InstructionCategory::recipe": {
          url: urlBase + "/InstructionCategories/:id/recipe",
          method: "GET"
        },

        // INTERNAL. Use Category.recipes.findById() instead.
        "::findById::Category::recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Categories/:id/recipes/:fk",
          method: "GET"
        },

        // INTERNAL. Use Category.recipes.destroyById() instead.
        "::destroyById::Category::recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Categories/:id/recipes/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Category.recipes.updateById() instead.
        "::updateById::Category::recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Categories/:id/recipes/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Category.recipes.link() instead.
        "::link::Category::recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Categories/:id/recipes/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Category.recipes.unlink() instead.
        "::unlink::Category::recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Categories/:id/recipes/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Category.recipes.exists() instead.
        "::exists::Category::recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Categories/:id/recipes/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Category.recipes() instead.
        "::get::Category::recipes": {
          isArray: true,
          url: urlBase + "/Categories/:id/recipes",
          method: "GET"
        },

        // INTERNAL. Use Category.recipes.create() instead.
        "::create::Category::recipes": {
          url: urlBase + "/Categories/:id/recipes",
          method: "POST"
        },

        // INTERNAL. Use Category.recipes.createMany() instead.
        "::createMany::Category::recipes": {
          isArray: true,
          url: urlBase + "/Categories/:id/recipes",
          method: "POST"
        },

        // INTERNAL. Use Category.recipes.destroyAll() instead.
        "::delete::Category::recipes": {
          url: urlBase + "/Categories/:id/recipes",
          method: "DELETE"
        },

        // INTERNAL. Use Category.recipes.count() instead.
        "::count::Category::recipes": {
          url: urlBase + "/Categories/:id/recipes/count",
          method: "GET"
        },

        // INTERNAL. Use Occasion.recipes.findById() instead.
        "::findById::Occasion::recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Occasions/:id/recipes/:fk",
          method: "GET"
        },

        // INTERNAL. Use Occasion.recipes.destroyById() instead.
        "::destroyById::Occasion::recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Occasions/:id/recipes/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Occasion.recipes.updateById() instead.
        "::updateById::Occasion::recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Occasions/:id/recipes/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Occasion.recipes.link() instead.
        "::link::Occasion::recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Occasions/:id/recipes/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Occasion.recipes.unlink() instead.
        "::unlink::Occasion::recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Occasions/:id/recipes/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Occasion.recipes.exists() instead.
        "::exists::Occasion::recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Occasions/:id/recipes/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Occasion.recipes() instead.
        "::get::Occasion::recipes": {
          isArray: true,
          url: urlBase + "/Occasions/:id/recipes",
          method: "GET"
        },

        // INTERNAL. Use Occasion.recipes.create() instead.
        "::create::Occasion::recipes": {
          url: urlBase + "/Occasions/:id/recipes",
          method: "POST"
        },

        // INTERNAL. Use Occasion.recipes.createMany() instead.
        "::createMany::Occasion::recipes": {
          isArray: true,
          url: urlBase + "/Occasions/:id/recipes",
          method: "POST"
        },

        // INTERNAL. Use Occasion.recipes.destroyAll() instead.
        "::delete::Occasion::recipes": {
          url: urlBase + "/Occasions/:id/recipes",
          method: "DELETE"
        },

        // INTERNAL. Use Occasion.recipes.count() instead.
        "::count::Occasion::recipes": {
          url: urlBase + "/Occasions/:id/recipes/count",
          method: "GET"
        },

        // INTERNAL. Use Cut.recipes.findById() instead.
        "::findById::Cut::recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Cuts/:id/recipes/:fk",
          method: "GET"
        },

        // INTERNAL. Use Cut.recipes.destroyById() instead.
        "::destroyById::Cut::recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Cuts/:id/recipes/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Cut.recipes.updateById() instead.
        "::updateById::Cut::recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Cuts/:id/recipes/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Cut.recipes.link() instead.
        "::link::Cut::recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Cuts/:id/recipes/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Cut.recipes.unlink() instead.
        "::unlink::Cut::recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Cuts/:id/recipes/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Cut.recipes.exists() instead.
        "::exists::Cut::recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Cuts/:id/recipes/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Cut.recipes() instead.
        "::get::Cut::recipes": {
          isArray: true,
          url: urlBase + "/Cuts/:id/recipes",
          method: "GET"
        },

        // INTERNAL. Use Cut.recipes.create() instead.
        "::create::Cut::recipes": {
          url: urlBase + "/Cuts/:id/recipes",
          method: "POST"
        },

        // INTERNAL. Use Cut.recipes.createMany() instead.
        "::createMany::Cut::recipes": {
          isArray: true,
          url: urlBase + "/Cuts/:id/recipes",
          method: "POST"
        },

        // INTERNAL. Use Cut.recipes.destroyAll() instead.
        "::delete::Cut::recipes": {
          url: urlBase + "/Cuts/:id/recipes",
          method: "DELETE"
        },

        // INTERNAL. Use Cut.recipes.count() instead.
        "::count::Cut::recipes": {
          url: urlBase + "/Cuts/:id/recipes/count",
          method: "GET"
        },

        // INTERNAL. Use Rating.recipe() instead.
        "::get::Rating::recipe": {
          url: urlBase + "/Ratings/:id/recipe",
          method: "GET"
        },

        // INTERNAL. Use Favourite.recipe() instead.
        "::get::Favourite::recipe": {
          url: urlBase + "/Favourites/:id/recipe",
          method: "GET"
        },

        // INTERNAL. Use Keyword.recipes.findById() instead.
        "::findById::Keyword::recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Keywords/:id/recipes/:fk",
          method: "GET"
        },

        // INTERNAL. Use Keyword.recipes.destroyById() instead.
        "::destroyById::Keyword::recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Keywords/:id/recipes/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Keyword.recipes.updateById() instead.
        "::updateById::Keyword::recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Keywords/:id/recipes/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Keyword.recipes.link() instead.
        "::link::Keyword::recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Keywords/:id/recipes/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Keyword.recipes.unlink() instead.
        "::unlink::Keyword::recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Keywords/:id/recipes/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Keyword.recipes.exists() instead.
        "::exists::Keyword::recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Keywords/:id/recipes/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Keyword.recipes() instead.
        "::get::Keyword::recipes": {
          isArray: true,
          url: urlBase + "/Keywords/:id/recipes",
          method: "GET"
        },

        // INTERNAL. Use Keyword.recipes.create() instead.
        "::create::Keyword::recipes": {
          url: urlBase + "/Keywords/:id/recipes",
          method: "POST"
        },

        // INTERNAL. Use Keyword.recipes.createMany() instead.
        "::createMany::Keyword::recipes": {
          isArray: true,
          url: urlBase + "/Keywords/:id/recipes",
          method: "POST"
        },

        // INTERNAL. Use Keyword.recipes.destroyAll() instead.
        "::delete::Keyword::recipes": {
          url: urlBase + "/Keywords/:id/recipes",
          method: "DELETE"
        },

        // INTERNAL. Use Keyword.recipes.count() instead.
        "::count::Keyword::recipes": {
          url: urlBase + "/Keywords/:id/recipes/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Recipe#updateOrCreate
         * @methodOf lbServices.Recipe
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Recipe#update
         * @methodOf lbServices.Recipe
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Recipe#destroyById
         * @methodOf lbServices.Recipe
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Recipe#removeById
         * @methodOf lbServices.Recipe
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Recipe#modelName
    * @propertyOf lbServices.Recipe
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Recipe`.
    */
    R.modelName = "Recipe";

    /**
     * @ngdoc object
     * @name lbServices.Recipe.ingredientCategories
     * @header lbServices.Recipe.ingredientCategories
     * @object
     * @description
     *
     * The object `Recipe.ingredientCategories` groups methods
     * manipulating `IngredientCategory` instances related to `Recipe`.
     *
     * Call {@link lbServices.Recipe#ingredientCategories Recipe.ingredientCategories()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Recipe#ingredientCategories
         * @methodOf lbServices.Recipe
         *
         * @description
         *
         * Queries ingredientCategories of Recipe.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IngredientCategory` object.)
         * </em>
         */
        R.ingredientCategories = function() {
          var TargetResource = $injector.get("IngredientCategory");
          var action = TargetResource["::get::Recipe::ingredientCategories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.ingredientCategories#count
         * @methodOf lbServices.Recipe.ingredientCategories
         *
         * @description
         *
         * Counts ingredientCategories of Recipe.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        R.ingredientCategories.count = function() {
          var TargetResource = $injector.get("IngredientCategory");
          var action = TargetResource["::count::Recipe::ingredientCategories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.ingredientCategories#create
         * @methodOf lbServices.Recipe.ingredientCategories
         *
         * @description
         *
         * Creates a new instance in ingredientCategories of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IngredientCategory` object.)
         * </em>
         */
        R.ingredientCategories.create = function() {
          var TargetResource = $injector.get("IngredientCategory");
          var action = TargetResource["::create::Recipe::ingredientCategories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.ingredientCategories#createMany
         * @methodOf lbServices.Recipe.ingredientCategories
         *
         * @description
         *
         * Creates a new instance in ingredientCategories of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IngredientCategory` object.)
         * </em>
         */
        R.ingredientCategories.createMany = function() {
          var TargetResource = $injector.get("IngredientCategory");
          var action = TargetResource["::createMany::Recipe::ingredientCategories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.ingredientCategories#destroyAll
         * @methodOf lbServices.Recipe.ingredientCategories
         *
         * @description
         *
         * Deletes all ingredientCategories of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.ingredientCategories.destroyAll = function() {
          var TargetResource = $injector.get("IngredientCategory");
          var action = TargetResource["::delete::Recipe::ingredientCategories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.ingredientCategories#destroyById
         * @methodOf lbServices.Recipe.ingredientCategories
         *
         * @description
         *
         * Delete a related item by id for ingredientCategories.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for ingredientCategories
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.ingredientCategories.destroyById = function() {
          var TargetResource = $injector.get("IngredientCategory");
          var action = TargetResource["::destroyById::Recipe::ingredientCategories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.ingredientCategories#findById
         * @methodOf lbServices.Recipe.ingredientCategories
         *
         * @description
         *
         * Find a related item by id for ingredientCategories.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for ingredientCategories
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IngredientCategory` object.)
         * </em>
         */
        R.ingredientCategories.findById = function() {
          var TargetResource = $injector.get("IngredientCategory");
          var action = TargetResource["::findById::Recipe::ingredientCategories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.ingredientCategories#updateById
         * @methodOf lbServices.Recipe.ingredientCategories
         *
         * @description
         *
         * Update a related item by id for ingredientCategories.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for ingredientCategories
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `IngredientCategory` object.)
         * </em>
         */
        R.ingredientCategories.updateById = function() {
          var TargetResource = $injector.get("IngredientCategory");
          var action = TargetResource["::updateById::Recipe::ingredientCategories"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Recipe.instructionCategories
     * @header lbServices.Recipe.instructionCategories
     * @object
     * @description
     *
     * The object `Recipe.instructionCategories` groups methods
     * manipulating `InstructionCategory` instances related to `Recipe`.
     *
     * Call {@link lbServices.Recipe#instructionCategories Recipe.instructionCategories()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Recipe#instructionCategories
         * @methodOf lbServices.Recipe
         *
         * @description
         *
         * Queries instructionCategories of Recipe.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `InstructionCategory` object.)
         * </em>
         */
        R.instructionCategories = function() {
          var TargetResource = $injector.get("InstructionCategory");
          var action = TargetResource["::get::Recipe::instructionCategories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.instructionCategories#count
         * @methodOf lbServices.Recipe.instructionCategories
         *
         * @description
         *
         * Counts instructionCategories of Recipe.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        R.instructionCategories.count = function() {
          var TargetResource = $injector.get("InstructionCategory");
          var action = TargetResource["::count::Recipe::instructionCategories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.instructionCategories#create
         * @methodOf lbServices.Recipe.instructionCategories
         *
         * @description
         *
         * Creates a new instance in instructionCategories of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `InstructionCategory` object.)
         * </em>
         */
        R.instructionCategories.create = function() {
          var TargetResource = $injector.get("InstructionCategory");
          var action = TargetResource["::create::Recipe::instructionCategories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.instructionCategories#createMany
         * @methodOf lbServices.Recipe.instructionCategories
         *
         * @description
         *
         * Creates a new instance in instructionCategories of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `InstructionCategory` object.)
         * </em>
         */
        R.instructionCategories.createMany = function() {
          var TargetResource = $injector.get("InstructionCategory");
          var action = TargetResource["::createMany::Recipe::instructionCategories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.instructionCategories#destroyAll
         * @methodOf lbServices.Recipe.instructionCategories
         *
         * @description
         *
         * Deletes all instructionCategories of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.instructionCategories.destroyAll = function() {
          var TargetResource = $injector.get("InstructionCategory");
          var action = TargetResource["::delete::Recipe::instructionCategories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.instructionCategories#destroyById
         * @methodOf lbServices.Recipe.instructionCategories
         *
         * @description
         *
         * Delete a related item by id for instructionCategories.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for instructionCategories
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.instructionCategories.destroyById = function() {
          var TargetResource = $injector.get("InstructionCategory");
          var action = TargetResource["::destroyById::Recipe::instructionCategories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.instructionCategories#findById
         * @methodOf lbServices.Recipe.instructionCategories
         *
         * @description
         *
         * Find a related item by id for instructionCategories.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for instructionCategories
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `InstructionCategory` object.)
         * </em>
         */
        R.instructionCategories.findById = function() {
          var TargetResource = $injector.get("InstructionCategory");
          var action = TargetResource["::findById::Recipe::instructionCategories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.instructionCategories#updateById
         * @methodOf lbServices.Recipe.instructionCategories
         *
         * @description
         *
         * Update a related item by id for instructionCategories.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for instructionCategories
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `InstructionCategory` object.)
         * </em>
         */
        R.instructionCategories.updateById = function() {
          var TargetResource = $injector.get("InstructionCategory");
          var action = TargetResource["::updateById::Recipe::instructionCategories"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Recipe.categories
     * @header lbServices.Recipe.categories
     * @object
     * @description
     *
     * The object `Recipe.categories` groups methods
     * manipulating `Category` instances related to `Recipe`.
     *
     * Call {@link lbServices.Recipe#categories Recipe.categories()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Recipe#categories
         * @methodOf lbServices.Recipe
         *
         * @description
         *
         * Queries categories of Recipe.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R.categories = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::get::Recipe::categories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.categories#count
         * @methodOf lbServices.Recipe.categories
         *
         * @description
         *
         * Counts categories of Recipe.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        R.categories.count = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::count::Recipe::categories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.categories#create
         * @methodOf lbServices.Recipe.categories
         *
         * @description
         *
         * Creates a new instance in categories of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R.categories.create = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::create::Recipe::categories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.categories#createMany
         * @methodOf lbServices.Recipe.categories
         *
         * @description
         *
         * Creates a new instance in categories of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R.categories.createMany = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::createMany::Recipe::categories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.categories#destroyAll
         * @methodOf lbServices.Recipe.categories
         *
         * @description
         *
         * Deletes all categories of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.categories.destroyAll = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::delete::Recipe::categories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.categories#destroyById
         * @methodOf lbServices.Recipe.categories
         *
         * @description
         *
         * Delete a related item by id for categories.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for categories
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.categories.destroyById = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::destroyById::Recipe::categories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.categories#exists
         * @methodOf lbServices.Recipe.categories
         *
         * @description
         *
         * Check the existence of categories relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for categories
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R.categories.exists = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::exists::Recipe::categories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.categories#findById
         * @methodOf lbServices.Recipe.categories
         *
         * @description
         *
         * Find a related item by id for categories.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for categories
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R.categories.findById = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::findById::Recipe::categories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.categories#link
         * @methodOf lbServices.Recipe.categories
         *
         * @description
         *
         * Add a related item by id for categories.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for categories
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R.categories.link = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::link::Recipe::categories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.categories#unlink
         * @methodOf lbServices.Recipe.categories
         *
         * @description
         *
         * Remove the categories relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for categories
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.categories.unlink = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::unlink::Recipe::categories"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.categories#updateById
         * @methodOf lbServices.Recipe.categories
         *
         * @description
         *
         * Update a related item by id for categories.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for categories
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R.categories.updateById = function() {
          var TargetResource = $injector.get("Category");
          var action = TargetResource["::updateById::Recipe::categories"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Recipe.occasions
     * @header lbServices.Recipe.occasions
     * @object
     * @description
     *
     * The object `Recipe.occasions` groups methods
     * manipulating `Occasion` instances related to `Recipe`.
     *
     * Call {@link lbServices.Recipe#occasions Recipe.occasions()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Recipe#occasions
         * @methodOf lbServices.Recipe
         *
         * @description
         *
         * Queries occasions of Recipe.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Occasion` object.)
         * </em>
         */
        R.occasions = function() {
          var TargetResource = $injector.get("Occasion");
          var action = TargetResource["::get::Recipe::occasions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.occasions#count
         * @methodOf lbServices.Recipe.occasions
         *
         * @description
         *
         * Counts occasions of Recipe.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        R.occasions.count = function() {
          var TargetResource = $injector.get("Occasion");
          var action = TargetResource["::count::Recipe::occasions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.occasions#create
         * @methodOf lbServices.Recipe.occasions
         *
         * @description
         *
         * Creates a new instance in occasions of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Occasion` object.)
         * </em>
         */
        R.occasions.create = function() {
          var TargetResource = $injector.get("Occasion");
          var action = TargetResource["::create::Recipe::occasions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.occasions#createMany
         * @methodOf lbServices.Recipe.occasions
         *
         * @description
         *
         * Creates a new instance in occasions of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Occasion` object.)
         * </em>
         */
        R.occasions.createMany = function() {
          var TargetResource = $injector.get("Occasion");
          var action = TargetResource["::createMany::Recipe::occasions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.occasions#destroyAll
         * @methodOf lbServices.Recipe.occasions
         *
         * @description
         *
         * Deletes all occasions of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.occasions.destroyAll = function() {
          var TargetResource = $injector.get("Occasion");
          var action = TargetResource["::delete::Recipe::occasions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.occasions#destroyById
         * @methodOf lbServices.Recipe.occasions
         *
         * @description
         *
         * Delete a related item by id for occasions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for occasions
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.occasions.destroyById = function() {
          var TargetResource = $injector.get("Occasion");
          var action = TargetResource["::destroyById::Recipe::occasions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.occasions#exists
         * @methodOf lbServices.Recipe.occasions
         *
         * @description
         *
         * Check the existence of occasions relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for occasions
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Occasion` object.)
         * </em>
         */
        R.occasions.exists = function() {
          var TargetResource = $injector.get("Occasion");
          var action = TargetResource["::exists::Recipe::occasions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.occasions#findById
         * @methodOf lbServices.Recipe.occasions
         *
         * @description
         *
         * Find a related item by id for occasions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for occasions
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Occasion` object.)
         * </em>
         */
        R.occasions.findById = function() {
          var TargetResource = $injector.get("Occasion");
          var action = TargetResource["::findById::Recipe::occasions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.occasions#link
         * @methodOf lbServices.Recipe.occasions
         *
         * @description
         *
         * Add a related item by id for occasions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for occasions
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Occasion` object.)
         * </em>
         */
        R.occasions.link = function() {
          var TargetResource = $injector.get("Occasion");
          var action = TargetResource["::link::Recipe::occasions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.occasions#unlink
         * @methodOf lbServices.Recipe.occasions
         *
         * @description
         *
         * Remove the occasions relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for occasions
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.occasions.unlink = function() {
          var TargetResource = $injector.get("Occasion");
          var action = TargetResource["::unlink::Recipe::occasions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.occasions#updateById
         * @methodOf lbServices.Recipe.occasions
         *
         * @description
         *
         * Update a related item by id for occasions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for occasions
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Occasion` object.)
         * </em>
         */
        R.occasions.updateById = function() {
          var TargetResource = $injector.get("Occasion");
          var action = TargetResource["::updateById::Recipe::occasions"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Recipe.cuts
     * @header lbServices.Recipe.cuts
     * @object
     * @description
     *
     * The object `Recipe.cuts` groups methods
     * manipulating `Cut` instances related to `Recipe`.
     *
     * Call {@link lbServices.Recipe#cuts Recipe.cuts()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Recipe#cuts
         * @methodOf lbServices.Recipe
         *
         * @description
         *
         * Queries cuts of Recipe.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cut` object.)
         * </em>
         */
        R.cuts = function() {
          var TargetResource = $injector.get("Cut");
          var action = TargetResource["::get::Recipe::cuts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.cuts#count
         * @methodOf lbServices.Recipe.cuts
         *
         * @description
         *
         * Counts cuts of Recipe.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        R.cuts.count = function() {
          var TargetResource = $injector.get("Cut");
          var action = TargetResource["::count::Recipe::cuts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.cuts#create
         * @methodOf lbServices.Recipe.cuts
         *
         * @description
         *
         * Creates a new instance in cuts of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cut` object.)
         * </em>
         */
        R.cuts.create = function() {
          var TargetResource = $injector.get("Cut");
          var action = TargetResource["::create::Recipe::cuts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.cuts#createMany
         * @methodOf lbServices.Recipe.cuts
         *
         * @description
         *
         * Creates a new instance in cuts of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cut` object.)
         * </em>
         */
        R.cuts.createMany = function() {
          var TargetResource = $injector.get("Cut");
          var action = TargetResource["::createMany::Recipe::cuts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.cuts#destroyAll
         * @methodOf lbServices.Recipe.cuts
         *
         * @description
         *
         * Deletes all cuts of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.cuts.destroyAll = function() {
          var TargetResource = $injector.get("Cut");
          var action = TargetResource["::delete::Recipe::cuts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.cuts#destroyById
         * @methodOf lbServices.Recipe.cuts
         *
         * @description
         *
         * Delete a related item by id for cuts.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for cuts
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.cuts.destroyById = function() {
          var TargetResource = $injector.get("Cut");
          var action = TargetResource["::destroyById::Recipe::cuts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.cuts#exists
         * @methodOf lbServices.Recipe.cuts
         *
         * @description
         *
         * Check the existence of cuts relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for cuts
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cut` object.)
         * </em>
         */
        R.cuts.exists = function() {
          var TargetResource = $injector.get("Cut");
          var action = TargetResource["::exists::Recipe::cuts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.cuts#findById
         * @methodOf lbServices.Recipe.cuts
         *
         * @description
         *
         * Find a related item by id for cuts.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for cuts
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cut` object.)
         * </em>
         */
        R.cuts.findById = function() {
          var TargetResource = $injector.get("Cut");
          var action = TargetResource["::findById::Recipe::cuts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.cuts#link
         * @methodOf lbServices.Recipe.cuts
         *
         * @description
         *
         * Add a related item by id for cuts.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for cuts
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cut` object.)
         * </em>
         */
        R.cuts.link = function() {
          var TargetResource = $injector.get("Cut");
          var action = TargetResource["::link::Recipe::cuts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.cuts#unlink
         * @methodOf lbServices.Recipe.cuts
         *
         * @description
         *
         * Remove the cuts relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for cuts
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.cuts.unlink = function() {
          var TargetResource = $injector.get("Cut");
          var action = TargetResource["::unlink::Recipe::cuts"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.cuts#updateById
         * @methodOf lbServices.Recipe.cuts
         *
         * @description
         *
         * Update a related item by id for cuts.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for cuts
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cut` object.)
         * </em>
         */
        R.cuts.updateById = function() {
          var TargetResource = $injector.get("Cut");
          var action = TargetResource["::updateById::Recipe::cuts"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Recipe.ratings
     * @header lbServices.Recipe.ratings
     * @object
     * @description
     *
     * The object `Recipe.ratings` groups methods
     * manipulating `Rating` instances related to `Recipe`.
     *
     * Call {@link lbServices.Recipe#ratings Recipe.ratings()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Recipe#ratings
         * @methodOf lbServices.Recipe
         *
         * @description
         *
         * Queries ratings of Recipe.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Rating` object.)
         * </em>
         */
        R.ratings = function() {
          var TargetResource = $injector.get("Rating");
          var action = TargetResource["::get::Recipe::ratings"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.ratings#count
         * @methodOf lbServices.Recipe.ratings
         *
         * @description
         *
         * Counts ratings of Recipe.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        R.ratings.count = function() {
          var TargetResource = $injector.get("Rating");
          var action = TargetResource["::count::Recipe::ratings"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.ratings#create
         * @methodOf lbServices.Recipe.ratings
         *
         * @description
         *
         * Creates a new instance in ratings of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Rating` object.)
         * </em>
         */
        R.ratings.create = function() {
          var TargetResource = $injector.get("Rating");
          var action = TargetResource["::create::Recipe::ratings"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.ratings#createMany
         * @methodOf lbServices.Recipe.ratings
         *
         * @description
         *
         * Creates a new instance in ratings of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Rating` object.)
         * </em>
         */
        R.ratings.createMany = function() {
          var TargetResource = $injector.get("Rating");
          var action = TargetResource["::createMany::Recipe::ratings"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.ratings#destroyAll
         * @methodOf lbServices.Recipe.ratings
         *
         * @description
         *
         * Deletes all ratings of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.ratings.destroyAll = function() {
          var TargetResource = $injector.get("Rating");
          var action = TargetResource["::delete::Recipe::ratings"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.ratings#destroyById
         * @methodOf lbServices.Recipe.ratings
         *
         * @description
         *
         * Delete a related item by id for ratings.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for ratings
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.ratings.destroyById = function() {
          var TargetResource = $injector.get("Rating");
          var action = TargetResource["::destroyById::Recipe::ratings"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.ratings#findById
         * @methodOf lbServices.Recipe.ratings
         *
         * @description
         *
         * Find a related item by id for ratings.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for ratings
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Rating` object.)
         * </em>
         */
        R.ratings.findById = function() {
          var TargetResource = $injector.get("Rating");
          var action = TargetResource["::findById::Recipe::ratings"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.ratings#updateById
         * @methodOf lbServices.Recipe.ratings
         *
         * @description
         *
         * Update a related item by id for ratings.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for ratings
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Rating` object.)
         * </em>
         */
        R.ratings.updateById = function() {
          var TargetResource = $injector.get("Rating");
          var action = TargetResource["::updateById::Recipe::ratings"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Recipe.favourites
     * @header lbServices.Recipe.favourites
     * @object
     * @description
     *
     * The object `Recipe.favourites` groups methods
     * manipulating `Favourite` instances related to `Recipe`.
     *
     * Call {@link lbServices.Recipe#favourites Recipe.favourites()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Recipe#favourites
         * @methodOf lbServices.Recipe
         *
         * @description
         *
         * Queries favourites of Recipe.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Favourite` object.)
         * </em>
         */
        R.favourites = function() {
          var TargetResource = $injector.get("Favourite");
          var action = TargetResource["::get::Recipe::favourites"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.favourites#count
         * @methodOf lbServices.Recipe.favourites
         *
         * @description
         *
         * Counts favourites of Recipe.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        R.favourites.count = function() {
          var TargetResource = $injector.get("Favourite");
          var action = TargetResource["::count::Recipe::favourites"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.favourites#create
         * @methodOf lbServices.Recipe.favourites
         *
         * @description
         *
         * Creates a new instance in favourites of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Favourite` object.)
         * </em>
         */
        R.favourites.create = function() {
          var TargetResource = $injector.get("Favourite");
          var action = TargetResource["::create::Recipe::favourites"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.favourites#createMany
         * @methodOf lbServices.Recipe.favourites
         *
         * @description
         *
         * Creates a new instance in favourites of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Favourite` object.)
         * </em>
         */
        R.favourites.createMany = function() {
          var TargetResource = $injector.get("Favourite");
          var action = TargetResource["::createMany::Recipe::favourites"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.favourites#destroyAll
         * @methodOf lbServices.Recipe.favourites
         *
         * @description
         *
         * Deletes all favourites of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.favourites.destroyAll = function() {
          var TargetResource = $injector.get("Favourite");
          var action = TargetResource["::delete::Recipe::favourites"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.favourites#destroyById
         * @methodOf lbServices.Recipe.favourites
         *
         * @description
         *
         * Delete a related item by id for favourites.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for favourites
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.favourites.destroyById = function() {
          var TargetResource = $injector.get("Favourite");
          var action = TargetResource["::destroyById::Recipe::favourites"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.favourites#findById
         * @methodOf lbServices.Recipe.favourites
         *
         * @description
         *
         * Find a related item by id for favourites.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for favourites
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Favourite` object.)
         * </em>
         */
        R.favourites.findById = function() {
          var TargetResource = $injector.get("Favourite");
          var action = TargetResource["::findById::Recipe::favourites"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.favourites#updateById
         * @methodOf lbServices.Recipe.favourites
         *
         * @description
         *
         * Update a related item by id for favourites.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for favourites
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Favourite` object.)
         * </em>
         */
        R.favourites.updateById = function() {
          var TargetResource = $injector.get("Favourite");
          var action = TargetResource["::updateById::Recipe::favourites"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.Recipe.keywords
     * @header lbServices.Recipe.keywords
     * @object
     * @description
     *
     * The object `Recipe.keywords` groups methods
     * manipulating `Keyword` instances related to `Recipe`.
     *
     * Call {@link lbServices.Recipe#keywords Recipe.keywords()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Recipe#keywords
         * @methodOf lbServices.Recipe
         *
         * @description
         *
         * Queries keywords of Recipe.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Keyword` object.)
         * </em>
         */
        R.keywords = function() {
          var TargetResource = $injector.get("Keyword");
          var action = TargetResource["::get::Recipe::keywords"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.keywords#count
         * @methodOf lbServices.Recipe.keywords
         *
         * @description
         *
         * Counts keywords of Recipe.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        R.keywords.count = function() {
          var TargetResource = $injector.get("Keyword");
          var action = TargetResource["::count::Recipe::keywords"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.keywords#create
         * @methodOf lbServices.Recipe.keywords
         *
         * @description
         *
         * Creates a new instance in keywords of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Keyword` object.)
         * </em>
         */
        R.keywords.create = function() {
          var TargetResource = $injector.get("Keyword");
          var action = TargetResource["::create::Recipe::keywords"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.keywords#createMany
         * @methodOf lbServices.Recipe.keywords
         *
         * @description
         *
         * Creates a new instance in keywords of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Keyword` object.)
         * </em>
         */
        R.keywords.createMany = function() {
          var TargetResource = $injector.get("Keyword");
          var action = TargetResource["::createMany::Recipe::keywords"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.keywords#destroyAll
         * @methodOf lbServices.Recipe.keywords
         *
         * @description
         *
         * Deletes all keywords of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.keywords.destroyAll = function() {
          var TargetResource = $injector.get("Keyword");
          var action = TargetResource["::delete::Recipe::keywords"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.keywords#destroyById
         * @methodOf lbServices.Recipe.keywords
         *
         * @description
         *
         * Delete a related item by id for keywords.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for keywords
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.keywords.destroyById = function() {
          var TargetResource = $injector.get("Keyword");
          var action = TargetResource["::destroyById::Recipe::keywords"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.keywords#exists
         * @methodOf lbServices.Recipe.keywords
         *
         * @description
         *
         * Check the existence of keywords relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for keywords
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Keyword` object.)
         * </em>
         */
        R.keywords.exists = function() {
          var TargetResource = $injector.get("Keyword");
          var action = TargetResource["::exists::Recipe::keywords"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.keywords#findById
         * @methodOf lbServices.Recipe.keywords
         *
         * @description
         *
         * Find a related item by id for keywords.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for keywords
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Keyword` object.)
         * </em>
         */
        R.keywords.findById = function() {
          var TargetResource = $injector.get("Keyword");
          var action = TargetResource["::findById::Recipe::keywords"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.keywords#link
         * @methodOf lbServices.Recipe.keywords
         *
         * @description
         *
         * Add a related item by id for keywords.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for keywords
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Keyword` object.)
         * </em>
         */
        R.keywords.link = function() {
          var TargetResource = $injector.get("Keyword");
          var action = TargetResource["::link::Recipe::keywords"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.keywords#unlink
         * @methodOf lbServices.Recipe.keywords
         *
         * @description
         *
         * Remove the keywords relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for keywords
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.keywords.unlink = function() {
          var TargetResource = $injector.get("Keyword");
          var action = TargetResource["::unlink::Recipe::keywords"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Recipe.keywords#updateById
         * @methodOf lbServices.Recipe.keywords
         *
         * @description
         *
         * Update a related item by id for keywords.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for keywords
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Keyword` object.)
         * </em>
         */
        R.keywords.updateById = function() {
          var TargetResource = $injector.get("Keyword");
          var action = TargetResource["::updateById::Recipe::keywords"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Category
 * @header lbServices.Category
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Category` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Category",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Categories/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Category.recipes.findById() instead.
        "prototype$__findById__recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Categories/:id/recipes/:fk",
          method: "GET"
        },

        // INTERNAL. Use Category.recipes.destroyById() instead.
        "prototype$__destroyById__recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Categories/:id/recipes/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Category.recipes.updateById() instead.
        "prototype$__updateById__recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Categories/:id/recipes/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Category.recipes.link() instead.
        "prototype$__link__recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Categories/:id/recipes/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Category.recipes.unlink() instead.
        "prototype$__unlink__recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Categories/:id/recipes/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Category.recipes.exists() instead.
        "prototype$__exists__recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Categories/:id/recipes/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Category.recipes() instead.
        "prototype$__get__recipes": {
          isArray: true,
          url: urlBase + "/Categories/:id/recipes",
          method: "GET"
        },

        // INTERNAL. Use Category.recipes.create() instead.
        "prototype$__create__recipes": {
          url: urlBase + "/Categories/:id/recipes",
          method: "POST"
        },

        // INTERNAL. Use Category.recipes.destroyAll() instead.
        "prototype$__delete__recipes": {
          url: urlBase + "/Categories/:id/recipes",
          method: "DELETE"
        },

        // INTERNAL. Use Category.recipes.count() instead.
        "prototype$__count__recipes": {
          url: urlBase + "/Categories/:id/recipes/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#create
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Categories",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#createMany
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Categories",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#upsert
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Categories",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#exists
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` -
         */
        "exists": {
          url: urlBase + "/Categories/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#findById
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Categories/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#find
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Categories",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#findOne
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Categories/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#updateAll
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Categories/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#deleteById
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Categories/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#count
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "count": {
          url: urlBase + "/Categories/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#prototype$updateAttributes
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Categories/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Category#createChangeStream
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` -
         */
        "createChangeStream": {
          url: urlBase + "/Categories/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Recipe.categories.findById() instead.
        "::findById::Recipe::categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/categories/:fk",
          method: "GET"
        },

        // INTERNAL. Use Recipe.categories.destroyById() instead.
        "::destroyById::Recipe::categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/categories/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Recipe.categories.updateById() instead.
        "::updateById::Recipe::categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/categories/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Recipe.categories.link() instead.
        "::link::Recipe::categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/categories/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Recipe.categories.unlink() instead.
        "::unlink::Recipe::categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/categories/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Recipe.categories.exists() instead.
        "::exists::Recipe::categories": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/categories/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Recipe.categories() instead.
        "::get::Recipe::categories": {
          isArray: true,
          url: urlBase + "/Recipes/:id/categories",
          method: "GET"
        },

        // INTERNAL. Use Recipe.categories.create() instead.
        "::create::Recipe::categories": {
          url: urlBase + "/Recipes/:id/categories",
          method: "POST"
        },

        // INTERNAL. Use Recipe.categories.createMany() instead.
        "::createMany::Recipe::categories": {
          isArray: true,
          url: urlBase + "/Recipes/:id/categories",
          method: "POST"
        },

        // INTERNAL. Use Recipe.categories.destroyAll() instead.
        "::delete::Recipe::categories": {
          url: urlBase + "/Recipes/:id/categories",
          method: "DELETE"
        },

        // INTERNAL. Use Recipe.categories.count() instead.
        "::count::Recipe::categories": {
          url: urlBase + "/Recipes/:id/categories/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Category#updateOrCreate
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Category#update
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Category#destroyById
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Category#removeById
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Category` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Category#modelName
    * @propertyOf lbServices.Category
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Category`.
    */
    R.modelName = "Category";

    /**
     * @ngdoc object
     * @name lbServices.Category.recipes
     * @header lbServices.Category.recipes
     * @object
     * @description
     *
     * The object `Category.recipes` groups methods
     * manipulating `Recipe` instances related to `Category`.
     *
     * Call {@link lbServices.Category#recipes Category.recipes()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Category#recipes
         * @methodOf lbServices.Category
         *
         * @description
         *
         * Queries recipes of Category.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        R.recipes = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::get::Category::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.recipes#count
         * @methodOf lbServices.Category.recipes
         *
         * @description
         *
         * Counts recipes of Category.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        R.recipes.count = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::count::Category::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.recipes#create
         * @methodOf lbServices.Category.recipes
         *
         * @description
         *
         * Creates a new instance in recipes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        R.recipes.create = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::create::Category::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.recipes#createMany
         * @methodOf lbServices.Category.recipes
         *
         * @description
         *
         * Creates a new instance in recipes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        R.recipes.createMany = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::createMany::Category::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.recipes#destroyAll
         * @methodOf lbServices.Category.recipes
         *
         * @description
         *
         * Deletes all recipes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.recipes.destroyAll = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::delete::Category::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.recipes#destroyById
         * @methodOf lbServices.Category.recipes
         *
         * @description
         *
         * Delete a related item by id for recipes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for recipes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.recipes.destroyById = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::destroyById::Category::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.recipes#exists
         * @methodOf lbServices.Category.recipes
         *
         * @description
         *
         * Check the existence of recipes relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for recipes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        R.recipes.exists = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::exists::Category::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.recipes#findById
         * @methodOf lbServices.Category.recipes
         *
         * @description
         *
         * Find a related item by id for recipes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for recipes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        R.recipes.findById = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::findById::Category::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.recipes#link
         * @methodOf lbServices.Category.recipes
         *
         * @description
         *
         * Add a related item by id for recipes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for recipes
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        R.recipes.link = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::link::Category::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.recipes#unlink
         * @methodOf lbServices.Category.recipes
         *
         * @description
         *
         * Remove the recipes relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for recipes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.recipes.unlink = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::unlink::Category::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Category.recipes#updateById
         * @methodOf lbServices.Category.recipes
         *
         * @description
         *
         * Update a related item by id for recipes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for recipes
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        R.recipes.updateById = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::updateById::Category::recipes"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Occasion
 * @header lbServices.Occasion
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Occasion` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Occasion",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Occasions/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Occasion.recipes.findById() instead.
        "prototype$__findById__recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Occasions/:id/recipes/:fk",
          method: "GET"
        },

        // INTERNAL. Use Occasion.recipes.destroyById() instead.
        "prototype$__destroyById__recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Occasions/:id/recipes/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Occasion.recipes.updateById() instead.
        "prototype$__updateById__recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Occasions/:id/recipes/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Occasion.recipes.link() instead.
        "prototype$__link__recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Occasions/:id/recipes/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Occasion.recipes.unlink() instead.
        "prototype$__unlink__recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Occasions/:id/recipes/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Occasion.recipes.exists() instead.
        "prototype$__exists__recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Occasions/:id/recipes/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Occasion.recipes() instead.
        "prototype$__get__recipes": {
          isArray: true,
          url: urlBase + "/Occasions/:id/recipes",
          method: "GET"
        },

        // INTERNAL. Use Occasion.recipes.create() instead.
        "prototype$__create__recipes": {
          url: urlBase + "/Occasions/:id/recipes",
          method: "POST"
        },

        // INTERNAL. Use Occasion.recipes.destroyAll() instead.
        "prototype$__delete__recipes": {
          url: urlBase + "/Occasions/:id/recipes",
          method: "DELETE"
        },

        // INTERNAL. Use Occasion.recipes.count() instead.
        "prototype$__count__recipes": {
          url: urlBase + "/Occasions/:id/recipes/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Occasion#create
         * @methodOf lbServices.Occasion
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Occasion` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Occasions",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Occasion#createMany
         * @methodOf lbServices.Occasion
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Occasion` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Occasions",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Occasion#upsert
         * @methodOf lbServices.Occasion
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Occasion` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Occasions",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Occasion#exists
         * @methodOf lbServices.Occasion
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` -
         */
        "exists": {
          url: urlBase + "/Occasions/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Occasion#findById
         * @methodOf lbServices.Occasion
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Occasion` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Occasions/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Occasion#find
         * @methodOf lbServices.Occasion
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Occasion` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Occasions",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Occasion#findOne
         * @methodOf lbServices.Occasion
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Occasion` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Occasions/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Occasion#updateAll
         * @methodOf lbServices.Occasion
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Occasions/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Occasion#deleteById
         * @methodOf lbServices.Occasion
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Occasion` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Occasions/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Occasion#count
         * @methodOf lbServices.Occasion
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "count": {
          url: urlBase + "/Occasions/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Occasion#prototype$updateAttributes
         * @methodOf lbServices.Occasion
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Occasion` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Occasions/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Occasion#createChangeStream
         * @methodOf lbServices.Occasion
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` -
         */
        "createChangeStream": {
          url: urlBase + "/Occasions/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Recipe.occasions.findById() instead.
        "::findById::Recipe::occasions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/occasions/:fk",
          method: "GET"
        },

        // INTERNAL. Use Recipe.occasions.destroyById() instead.
        "::destroyById::Recipe::occasions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/occasions/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Recipe.occasions.updateById() instead.
        "::updateById::Recipe::occasions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/occasions/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Recipe.occasions.link() instead.
        "::link::Recipe::occasions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/occasions/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Recipe.occasions.unlink() instead.
        "::unlink::Recipe::occasions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/occasions/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Recipe.occasions.exists() instead.
        "::exists::Recipe::occasions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/occasions/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Recipe.occasions() instead.
        "::get::Recipe::occasions": {
          isArray: true,
          url: urlBase + "/Recipes/:id/occasions",
          method: "GET"
        },

        // INTERNAL. Use Recipe.occasions.create() instead.
        "::create::Recipe::occasions": {
          url: urlBase + "/Recipes/:id/occasions",
          method: "POST"
        },

        // INTERNAL. Use Recipe.occasions.createMany() instead.
        "::createMany::Recipe::occasions": {
          isArray: true,
          url: urlBase + "/Recipes/:id/occasions",
          method: "POST"
        },

        // INTERNAL. Use Recipe.occasions.destroyAll() instead.
        "::delete::Recipe::occasions": {
          url: urlBase + "/Recipes/:id/occasions",
          method: "DELETE"
        },

        // INTERNAL. Use Recipe.occasions.count() instead.
        "::count::Recipe::occasions": {
          url: urlBase + "/Recipes/:id/occasions/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Occasion#updateOrCreate
         * @methodOf lbServices.Occasion
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Occasion` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Occasion#update
         * @methodOf lbServices.Occasion
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Occasion#destroyById
         * @methodOf lbServices.Occasion
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Occasion` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Occasion#removeById
         * @methodOf lbServices.Occasion
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Occasion` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Occasion#modelName
    * @propertyOf lbServices.Occasion
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Occasion`.
    */
    R.modelName = "Occasion";

    /**
     * @ngdoc object
     * @name lbServices.Occasion.recipes
     * @header lbServices.Occasion.recipes
     * @object
     * @description
     *
     * The object `Occasion.recipes` groups methods
     * manipulating `Recipe` instances related to `Occasion`.
     *
     * Call {@link lbServices.Occasion#recipes Occasion.recipes()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Occasion#recipes
         * @methodOf lbServices.Occasion
         *
         * @description
         *
         * Queries recipes of Occasion.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        R.recipes = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::get::Occasion::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Occasion.recipes#count
         * @methodOf lbServices.Occasion.recipes
         *
         * @description
         *
         * Counts recipes of Occasion.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        R.recipes.count = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::count::Occasion::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Occasion.recipes#create
         * @methodOf lbServices.Occasion.recipes
         *
         * @description
         *
         * Creates a new instance in recipes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        R.recipes.create = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::create::Occasion::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Occasion.recipes#createMany
         * @methodOf lbServices.Occasion.recipes
         *
         * @description
         *
         * Creates a new instance in recipes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        R.recipes.createMany = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::createMany::Occasion::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Occasion.recipes#destroyAll
         * @methodOf lbServices.Occasion.recipes
         *
         * @description
         *
         * Deletes all recipes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.recipes.destroyAll = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::delete::Occasion::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Occasion.recipes#destroyById
         * @methodOf lbServices.Occasion.recipes
         *
         * @description
         *
         * Delete a related item by id for recipes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for recipes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.recipes.destroyById = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::destroyById::Occasion::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Occasion.recipes#exists
         * @methodOf lbServices.Occasion.recipes
         *
         * @description
         *
         * Check the existence of recipes relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for recipes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        R.recipes.exists = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::exists::Occasion::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Occasion.recipes#findById
         * @methodOf lbServices.Occasion.recipes
         *
         * @description
         *
         * Find a related item by id for recipes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for recipes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        R.recipes.findById = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::findById::Occasion::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Occasion.recipes#link
         * @methodOf lbServices.Occasion.recipes
         *
         * @description
         *
         * Add a related item by id for recipes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for recipes
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        R.recipes.link = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::link::Occasion::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Occasion.recipes#unlink
         * @methodOf lbServices.Occasion.recipes
         *
         * @description
         *
         * Remove the recipes relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for recipes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.recipes.unlink = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::unlink::Occasion::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Occasion.recipes#updateById
         * @methodOf lbServices.Occasion.recipes
         *
         * @description
         *
         * Update a related item by id for recipes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for recipes
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        R.recipes.updateById = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::updateById::Occasion::recipes"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Cut
 * @header lbServices.Cut
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Cut` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Cut",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Cuts/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Cut.recipes.findById() instead.
        "prototype$__findById__recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Cuts/:id/recipes/:fk",
          method: "GET"
        },

        // INTERNAL. Use Cut.recipes.destroyById() instead.
        "prototype$__destroyById__recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Cuts/:id/recipes/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Cut.recipes.updateById() instead.
        "prototype$__updateById__recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Cuts/:id/recipes/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Cut.recipes.link() instead.
        "prototype$__link__recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Cuts/:id/recipes/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Cut.recipes.unlink() instead.
        "prototype$__unlink__recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Cuts/:id/recipes/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Cut.recipes.exists() instead.
        "prototype$__exists__recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Cuts/:id/recipes/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Cut.recipes() instead.
        "prototype$__get__recipes": {
          isArray: true,
          url: urlBase + "/Cuts/:id/recipes",
          method: "GET"
        },

        // INTERNAL. Use Cut.recipes.create() instead.
        "prototype$__create__recipes": {
          url: urlBase + "/Cuts/:id/recipes",
          method: "POST"
        },

        // INTERNAL. Use Cut.recipes.destroyAll() instead.
        "prototype$__delete__recipes": {
          url: urlBase + "/Cuts/:id/recipes",
          method: "DELETE"
        },

        // INTERNAL. Use Cut.recipes.count() instead.
        "prototype$__count__recipes": {
          url: urlBase + "/Cuts/:id/recipes/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Cut#create
         * @methodOf lbServices.Cut
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cut` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Cuts",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Cut#createMany
         * @methodOf lbServices.Cut
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cut` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Cuts",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Cut#upsert
         * @methodOf lbServices.Cut
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cut` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Cuts",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Cut#exists
         * @methodOf lbServices.Cut
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` -
         */
        "exists": {
          url: urlBase + "/Cuts/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Cut#findById
         * @methodOf lbServices.Cut
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cut` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Cuts/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Cut#find
         * @methodOf lbServices.Cut
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cut` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Cuts",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Cut#findOne
         * @methodOf lbServices.Cut
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cut` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Cuts/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Cut#updateAll
         * @methodOf lbServices.Cut
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Cuts/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Cut#deleteById
         * @methodOf lbServices.Cut
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cut` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Cuts/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Cut#count
         * @methodOf lbServices.Cut
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "count": {
          url: urlBase + "/Cuts/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Cut#prototype$updateAttributes
         * @methodOf lbServices.Cut
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cut` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Cuts/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Cut#createChangeStream
         * @methodOf lbServices.Cut
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` -
         */
        "createChangeStream": {
          url: urlBase + "/Cuts/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Cut#updateHasImage
         * @methodOf lbServices.Cut
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `namesWithImages` – `{*=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `updateCount` – `{int=}` -
         */
        "updateHasImage": {
          url: urlBase + "/Cuts/updateHasImage",
          method: "POST"
        },

        // INTERNAL. Use Recipe.cuts.findById() instead.
        "::findById::Recipe::cuts": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/cuts/:fk",
          method: "GET"
        },

        // INTERNAL. Use Recipe.cuts.destroyById() instead.
        "::destroyById::Recipe::cuts": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/cuts/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Recipe.cuts.updateById() instead.
        "::updateById::Recipe::cuts": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/cuts/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Recipe.cuts.link() instead.
        "::link::Recipe::cuts": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/cuts/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Recipe.cuts.unlink() instead.
        "::unlink::Recipe::cuts": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/cuts/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Recipe.cuts.exists() instead.
        "::exists::Recipe::cuts": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/cuts/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Recipe.cuts() instead.
        "::get::Recipe::cuts": {
          isArray: true,
          url: urlBase + "/Recipes/:id/cuts",
          method: "GET"
        },

        // INTERNAL. Use Recipe.cuts.create() instead.
        "::create::Recipe::cuts": {
          url: urlBase + "/Recipes/:id/cuts",
          method: "POST"
        },

        // INTERNAL. Use Recipe.cuts.createMany() instead.
        "::createMany::Recipe::cuts": {
          isArray: true,
          url: urlBase + "/Recipes/:id/cuts",
          method: "POST"
        },

        // INTERNAL. Use Recipe.cuts.destroyAll() instead.
        "::delete::Recipe::cuts": {
          url: urlBase + "/Recipes/:id/cuts",
          method: "DELETE"
        },

        // INTERNAL. Use Recipe.cuts.count() instead.
        "::count::Recipe::cuts": {
          url: urlBase + "/Recipes/:id/cuts/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Cut#updateOrCreate
         * @methodOf lbServices.Cut
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cut` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Cut#update
         * @methodOf lbServices.Cut
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Cut#destroyById
         * @methodOf lbServices.Cut
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cut` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Cut#removeById
         * @methodOf lbServices.Cut
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Cut` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Cut#modelName
    * @propertyOf lbServices.Cut
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Cut`.
    */
    R.modelName = "Cut";

    /**
     * @ngdoc object
     * @name lbServices.Cut.recipes
     * @header lbServices.Cut.recipes
     * @object
     * @description
     *
     * The object `Cut.recipes` groups methods
     * manipulating `Recipe` instances related to `Cut`.
     *
     * Call {@link lbServices.Cut#recipes Cut.recipes()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Cut#recipes
         * @methodOf lbServices.Cut
         *
         * @description
         *
         * Queries recipes of Cut.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        R.recipes = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::get::Cut::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Cut.recipes#count
         * @methodOf lbServices.Cut.recipes
         *
         * @description
         *
         * Counts recipes of Cut.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        R.recipes.count = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::count::Cut::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Cut.recipes#create
         * @methodOf lbServices.Cut.recipes
         *
         * @description
         *
         * Creates a new instance in recipes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        R.recipes.create = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::create::Cut::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Cut.recipes#createMany
         * @methodOf lbServices.Cut.recipes
         *
         * @description
         *
         * Creates a new instance in recipes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        R.recipes.createMany = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::createMany::Cut::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Cut.recipes#destroyAll
         * @methodOf lbServices.Cut.recipes
         *
         * @description
         *
         * Deletes all recipes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.recipes.destroyAll = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::delete::Cut::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Cut.recipes#destroyById
         * @methodOf lbServices.Cut.recipes
         *
         * @description
         *
         * Delete a related item by id for recipes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for recipes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.recipes.destroyById = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::destroyById::Cut::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Cut.recipes#exists
         * @methodOf lbServices.Cut.recipes
         *
         * @description
         *
         * Check the existence of recipes relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for recipes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        R.recipes.exists = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::exists::Cut::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Cut.recipes#findById
         * @methodOf lbServices.Cut.recipes
         *
         * @description
         *
         * Find a related item by id for recipes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for recipes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        R.recipes.findById = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::findById::Cut::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Cut.recipes#link
         * @methodOf lbServices.Cut.recipes
         *
         * @description
         *
         * Add a related item by id for recipes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for recipes
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        R.recipes.link = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::link::Cut::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Cut.recipes#unlink
         * @methodOf lbServices.Cut.recipes
         *
         * @description
         *
         * Remove the recipes relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for recipes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.recipes.unlink = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::unlink::Cut::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Cut.recipes#updateById
         * @methodOf lbServices.Cut.recipes
         *
         * @description
         *
         * Update a related item by id for recipes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for recipes
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        R.recipes.updateById = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::updateById::Cut::recipes"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Store
 * @header lbServices.Store
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Store` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Store",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Stores/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Store.regions.findById() instead.
        "prototype$__findById__regions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Stores/:id/regions/:fk",
          method: "GET"
        },

        // INTERNAL. Use Store.regions.destroyById() instead.
        "prototype$__destroyById__regions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Stores/:id/regions/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Store.regions.updateById() instead.
        "prototype$__updateById__regions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Stores/:id/regions/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Store.regions.link() instead.
        "prototype$__link__regions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Stores/:id/regions/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Store.regions.unlink() instead.
        "prototype$__unlink__regions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Stores/:id/regions/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Store.regions.exists() instead.
        "prototype$__exists__regions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Stores/:id/regions/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Store.regions() instead.
        "prototype$__get__regions": {
          isArray: true,
          url: urlBase + "/Stores/:id/regions",
          method: "GET"
        },

        // INTERNAL. Use Store.regions.create() instead.
        "prototype$__create__regions": {
          url: urlBase + "/Stores/:id/regions",
          method: "POST"
        },

        // INTERNAL. Use Store.regions.destroyAll() instead.
        "prototype$__delete__regions": {
          url: urlBase + "/Stores/:id/regions",
          method: "DELETE"
        },

        // INTERNAL. Use Store.regions.count() instead.
        "prototype$__count__regions": {
          url: urlBase + "/Stores/:id/regions/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Store#create
         * @methodOf lbServices.Store
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Store` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Stores",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Store#createMany
         * @methodOf lbServices.Store
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Store` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Stores",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Store#upsert
         * @methodOf lbServices.Store
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Store` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Stores",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Store#exists
         * @methodOf lbServices.Store
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` -
         */
        "exists": {
          url: urlBase + "/Stores/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Store#findById
         * @methodOf lbServices.Store
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Store` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Stores/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Store#find
         * @methodOf lbServices.Store
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Store` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Stores",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Store#findOne
         * @methodOf lbServices.Store
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Store` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Stores/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Store#updateAll
         * @methodOf lbServices.Store
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Stores/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Store#deleteById
         * @methodOf lbServices.Store
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Store` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Stores/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Store#count
         * @methodOf lbServices.Store
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "count": {
          url: urlBase + "/Stores/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Store#prototype$updateAttributes
         * @methodOf lbServices.Store
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Store` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Stores/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Store#createChangeStream
         * @methodOf lbServices.Store
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` -
         */
        "createChangeStream": {
          url: urlBase + "/Stores/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Store#bulkSetRegion
         * @methodOf lbServices.Store
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `regionId` – `{string=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `updateCount` – `{int=}` -
         */
        "bulkSetRegion": {
          url: urlBase + "/Stores/bulkSetRegion",
          method: "POST"
        },

        // INTERNAL. Use Region.stores.findById() instead.
        "::findById::Region::stores": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Regions/:id/stores/:fk",
          method: "GET"
        },

        // INTERNAL. Use Region.stores.destroyById() instead.
        "::destroyById::Region::stores": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Regions/:id/stores/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Region.stores.updateById() instead.
        "::updateById::Region::stores": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Regions/:id/stores/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Region.stores.link() instead.
        "::link::Region::stores": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Regions/:id/stores/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Region.stores.unlink() instead.
        "::unlink::Region::stores": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Regions/:id/stores/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Region.stores.exists() instead.
        "::exists::Region::stores": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Regions/:id/stores/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Region.stores() instead.
        "::get::Region::stores": {
          isArray: true,
          url: urlBase + "/Regions/:id/stores",
          method: "GET"
        },

        // INTERNAL. Use Region.stores.create() instead.
        "::create::Region::stores": {
          url: urlBase + "/Regions/:id/stores",
          method: "POST"
        },

        // INTERNAL. Use Region.stores.createMany() instead.
        "::createMany::Region::stores": {
          isArray: true,
          url: urlBase + "/Regions/:id/stores",
          method: "POST"
        },

        // INTERNAL. Use Region.stores.destroyAll() instead.
        "::delete::Region::stores": {
          url: urlBase + "/Regions/:id/stores",
          method: "DELETE"
        },

        // INTERNAL. Use Region.stores.count() instead.
        "::count::Region::stores": {
          url: urlBase + "/Regions/:id/stores/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Store#updateOrCreate
         * @methodOf lbServices.Store
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Store` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Store#update
         * @methodOf lbServices.Store
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Store#destroyById
         * @methodOf lbServices.Store
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Store` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Store#removeById
         * @methodOf lbServices.Store
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Store` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Store#modelName
    * @propertyOf lbServices.Store
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Store`.
    */
    R.modelName = "Store";

    /**
     * @ngdoc object
     * @name lbServices.Store.regions
     * @header lbServices.Store.regions
     * @object
     * @description
     *
     * The object `Store.regions` groups methods
     * manipulating `Region` instances related to `Store`.
     *
     * Call {@link lbServices.Store#regions Store.regions()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Store#regions
         * @methodOf lbServices.Store
         *
         * @description
         *
         * Queries regions of Store.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Region` object.)
         * </em>
         */
        R.regions = function() {
          var TargetResource = $injector.get("Region");
          var action = TargetResource["::get::Store::regions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Store.regions#count
         * @methodOf lbServices.Store.regions
         *
         * @description
         *
         * Counts regions of Store.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        R.regions.count = function() {
          var TargetResource = $injector.get("Region");
          var action = TargetResource["::count::Store::regions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Store.regions#create
         * @methodOf lbServices.Store.regions
         *
         * @description
         *
         * Creates a new instance in regions of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Region` object.)
         * </em>
         */
        R.regions.create = function() {
          var TargetResource = $injector.get("Region");
          var action = TargetResource["::create::Store::regions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Store.regions#createMany
         * @methodOf lbServices.Store.regions
         *
         * @description
         *
         * Creates a new instance in regions of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Region` object.)
         * </em>
         */
        R.regions.createMany = function() {
          var TargetResource = $injector.get("Region");
          var action = TargetResource["::createMany::Store::regions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Store.regions#destroyAll
         * @methodOf lbServices.Store.regions
         *
         * @description
         *
         * Deletes all regions of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.regions.destroyAll = function() {
          var TargetResource = $injector.get("Region");
          var action = TargetResource["::delete::Store::regions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Store.regions#destroyById
         * @methodOf lbServices.Store.regions
         *
         * @description
         *
         * Delete a related item by id for regions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for regions
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.regions.destroyById = function() {
          var TargetResource = $injector.get("Region");
          var action = TargetResource["::destroyById::Store::regions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Store.regions#exists
         * @methodOf lbServices.Store.regions
         *
         * @description
         *
         * Check the existence of regions relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for regions
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Region` object.)
         * </em>
         */
        R.regions.exists = function() {
          var TargetResource = $injector.get("Region");
          var action = TargetResource["::exists::Store::regions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Store.regions#findById
         * @methodOf lbServices.Store.regions
         *
         * @description
         *
         * Find a related item by id for regions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for regions
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Region` object.)
         * </em>
         */
        R.regions.findById = function() {
          var TargetResource = $injector.get("Region");
          var action = TargetResource["::findById::Store::regions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Store.regions#link
         * @methodOf lbServices.Store.regions
         *
         * @description
         *
         * Add a related item by id for regions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for regions
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Region` object.)
         * </em>
         */
        R.regions.link = function() {
          var TargetResource = $injector.get("Region");
          var action = TargetResource["::link::Store::regions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Store.regions#unlink
         * @methodOf lbServices.Store.regions
         *
         * @description
         *
         * Remove the regions relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for regions
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.regions.unlink = function() {
          var TargetResource = $injector.get("Region");
          var action = TargetResource["::unlink::Store::regions"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Store.regions#updateById
         * @methodOf lbServices.Store.regions
         *
         * @description
         *
         * Update a related item by id for regions.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for regions
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Region` object.)
         * </em>
         */
        R.regions.updateById = function() {
          var TargetResource = $injector.get("Region");
          var action = TargetResource["::updateById::Store::regions"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Rating
 * @header lbServices.Rating
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Rating` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Rating",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Ratings/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Rating.recipe() instead.
        "prototype$__get__recipe": {
          url: urlBase + "/Ratings/:id/recipe",
          method: "GET"
        },

        // INTERNAL. Use Rating.kBUsers() instead.
        "prototype$__get__kBUsers": {
          url: urlBase + "/Ratings/:id/kBUsers",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Rating#create
         * @methodOf lbServices.Rating
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Rating` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Ratings",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Rating#createMany
         * @methodOf lbServices.Rating
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Rating` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Ratings",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Rating#upsert
         * @methodOf lbServices.Rating
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Rating` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Ratings",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Rating#exists
         * @methodOf lbServices.Rating
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` -
         */
        "exists": {
          url: urlBase + "/Ratings/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Rating#findById
         * @methodOf lbServices.Rating
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Rating` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Ratings/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Rating#find
         * @methodOf lbServices.Rating
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Rating` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Ratings",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Rating#findOne
         * @methodOf lbServices.Rating
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Rating` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Ratings/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Rating#updateAll
         * @methodOf lbServices.Rating
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Ratings/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Rating#deleteById
         * @methodOf lbServices.Rating
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Rating` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Ratings/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Rating#count
         * @methodOf lbServices.Rating
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "count": {
          url: urlBase + "/Ratings/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Rating#prototype$updateAttributes
         * @methodOf lbServices.Rating
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Rating` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Ratings/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Rating#createChangeStream
         * @methodOf lbServices.Rating
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` -
         */
        "createChangeStream": {
          url: urlBase + "/Ratings/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Rating#customUpsert
         * @methodOf lbServices.Rating
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `rating` – `{object}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `rating` – `{object=}` -
         */
        "customUpsert": {
          url: urlBase + "/Ratings/customUpsert",
          method: "PUT"
        },

        // INTERNAL. Use Recipe.ratings.findById() instead.
        "::findById::Recipe::ratings": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/ratings/:fk",
          method: "GET"
        },

        // INTERNAL. Use Recipe.ratings.destroyById() instead.
        "::destroyById::Recipe::ratings": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/ratings/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Recipe.ratings.updateById() instead.
        "::updateById::Recipe::ratings": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/ratings/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Recipe.ratings() instead.
        "::get::Recipe::ratings": {
          isArray: true,
          url: urlBase + "/Recipes/:id/ratings",
          method: "GET"
        },

        // INTERNAL. Use Recipe.ratings.create() instead.
        "::create::Recipe::ratings": {
          url: urlBase + "/Recipes/:id/ratings",
          method: "POST"
        },

        // INTERNAL. Use Recipe.ratings.createMany() instead.
        "::createMany::Recipe::ratings": {
          isArray: true,
          url: urlBase + "/Recipes/:id/ratings",
          method: "POST"
        },

        // INTERNAL. Use Recipe.ratings.destroyAll() instead.
        "::delete::Recipe::ratings": {
          url: urlBase + "/Recipes/:id/ratings",
          method: "DELETE"
        },

        // INTERNAL. Use Recipe.ratings.count() instead.
        "::count::Recipe::ratings": {
          url: urlBase + "/Recipes/:id/ratings/count",
          method: "GET"
        },

        // INTERNAL. Use KBUser.ratings.findById() instead.
        "::findById::KBUser::ratings": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/KBUsers/:id/ratings/:fk",
          method: "GET"
        },

        // INTERNAL. Use KBUser.ratings.destroyById() instead.
        "::destroyById::KBUser::ratings": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/KBUsers/:id/ratings/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use KBUser.ratings.updateById() instead.
        "::updateById::KBUser::ratings": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/KBUsers/:id/ratings/:fk",
          method: "PUT"
        },

        // INTERNAL. Use KBUser.ratings() instead.
        "::get::KBUser::ratings": {
          isArray: true,
          url: urlBase + "/KBUsers/:id/ratings",
          method: "GET"
        },

        // INTERNAL. Use KBUser.ratings.create() instead.
        "::create::KBUser::ratings": {
          url: urlBase + "/KBUsers/:id/ratings",
          method: "POST"
        },

        // INTERNAL. Use KBUser.ratings.createMany() instead.
        "::createMany::KBUser::ratings": {
          isArray: true,
          url: urlBase + "/KBUsers/:id/ratings",
          method: "POST"
        },

        // INTERNAL. Use KBUser.ratings.destroyAll() instead.
        "::delete::KBUser::ratings": {
          url: urlBase + "/KBUsers/:id/ratings",
          method: "DELETE"
        },

        // INTERNAL. Use KBUser.ratings.count() instead.
        "::count::KBUser::ratings": {
          url: urlBase + "/KBUsers/:id/ratings/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Rating#updateOrCreate
         * @methodOf lbServices.Rating
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Rating` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Rating#update
         * @methodOf lbServices.Rating
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Rating#destroyById
         * @methodOf lbServices.Rating
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Rating` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Rating#removeById
         * @methodOf lbServices.Rating
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Rating` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Rating#modelName
    * @propertyOf lbServices.Rating
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Rating`.
    */
    R.modelName = "Rating";


        /**
         * @ngdoc method
         * @name lbServices.Rating#recipe
         * @methodOf lbServices.Rating
         *
         * @description
         *
         * Fetches belongsTo relation recipe.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        R.recipe = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::get::Rating::recipe"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Rating#kBUsers
         * @methodOf lbServices.Rating
         *
         * @description
         *
         * Fetches belongsTo relation kBUsers.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `KBUser` object.)
         * </em>
         */
        R.kBUsers = function() {
          var TargetResource = $injector.get("KBUser");
          var action = TargetResource["::get::Rating::kBUsers"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Favourite
 * @header lbServices.Favourite
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Favourite` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Favourite",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Favourites/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Favourite.recipe() instead.
        "prototype$__get__recipe": {
          url: urlBase + "/Favourites/:id/recipe",
          method: "GET"
        },

        // INTERNAL. Use Favourite.kBUser() instead.
        "prototype$__get__kBUser": {
          url: urlBase + "/Favourites/:id/kBUser",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Favourite#create
         * @methodOf lbServices.Favourite
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Favourite` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Favourites",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Favourite#createMany
         * @methodOf lbServices.Favourite
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Favourite` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Favourites",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Favourite#upsert
         * @methodOf lbServices.Favourite
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Favourite` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Favourites",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Favourite#exists
         * @methodOf lbServices.Favourite
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` -
         */
        "exists": {
          url: urlBase + "/Favourites/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Favourite#findById
         * @methodOf lbServices.Favourite
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Favourite` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Favourites/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Favourite#find
         * @methodOf lbServices.Favourite
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Favourite` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Favourites",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Favourite#findOne
         * @methodOf lbServices.Favourite
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Favourite` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Favourites/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Favourite#updateAll
         * @methodOf lbServices.Favourite
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Favourites/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Favourite#deleteById
         * @methodOf lbServices.Favourite
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Favourite` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Favourites/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Favourite#count
         * @methodOf lbServices.Favourite
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "count": {
          url: urlBase + "/Favourites/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Favourite#prototype$updateAttributes
         * @methodOf lbServices.Favourite
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Favourite` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Favourites/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Favourite#createChangeStream
         * @methodOf lbServices.Favourite
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` -
         */
        "createChangeStream": {
          url: urlBase + "/Favourites/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Favourite#toggle
         * @methodOf lbServices.Favourite
         *
         * @description
         *
         * <em>
         * (The remote method definition does not provide any description.)
         * </em>
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `kBUserId` – `{string}` -
         *
         *  - `recipeId` – `{string}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `favourite` – `{object=}` -
         */
        "toggle": {
          url: urlBase + "/Favourites/toggle",
          method: "PUT"
        },

        // INTERNAL. Use Recipe.favourites.findById() instead.
        "::findById::Recipe::favourites": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/favourites/:fk",
          method: "GET"
        },

        // INTERNAL. Use Recipe.favourites.destroyById() instead.
        "::destroyById::Recipe::favourites": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/favourites/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Recipe.favourites.updateById() instead.
        "::updateById::Recipe::favourites": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/favourites/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Recipe.favourites() instead.
        "::get::Recipe::favourites": {
          isArray: true,
          url: urlBase + "/Recipes/:id/favourites",
          method: "GET"
        },

        // INTERNAL. Use Recipe.favourites.create() instead.
        "::create::Recipe::favourites": {
          url: urlBase + "/Recipes/:id/favourites",
          method: "POST"
        },

        // INTERNAL. Use Recipe.favourites.createMany() instead.
        "::createMany::Recipe::favourites": {
          isArray: true,
          url: urlBase + "/Recipes/:id/favourites",
          method: "POST"
        },

        // INTERNAL. Use Recipe.favourites.destroyAll() instead.
        "::delete::Recipe::favourites": {
          url: urlBase + "/Recipes/:id/favourites",
          method: "DELETE"
        },

        // INTERNAL. Use Recipe.favourites.count() instead.
        "::count::Recipe::favourites": {
          url: urlBase + "/Recipes/:id/favourites/count",
          method: "GET"
        },

        // INTERNAL. Use KBUser.favourites.findById() instead.
        "::findById::KBUser::favourites": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/KBUsers/:id/favourites/:fk",
          method: "GET"
        },

        // INTERNAL. Use KBUser.favourites.destroyById() instead.
        "::destroyById::KBUser::favourites": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/KBUsers/:id/favourites/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use KBUser.favourites.updateById() instead.
        "::updateById::KBUser::favourites": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/KBUsers/:id/favourites/:fk",
          method: "PUT"
        },

        // INTERNAL. Use KBUser.favourites() instead.
        "::get::KBUser::favourites": {
          isArray: true,
          url: urlBase + "/KBUsers/:id/favourites",
          method: "GET"
        },

        // INTERNAL. Use KBUser.favourites.create() instead.
        "::create::KBUser::favourites": {
          url: urlBase + "/KBUsers/:id/favourites",
          method: "POST"
        },

        // INTERNAL. Use KBUser.favourites.createMany() instead.
        "::createMany::KBUser::favourites": {
          isArray: true,
          url: urlBase + "/KBUsers/:id/favourites",
          method: "POST"
        },

        // INTERNAL. Use KBUser.favourites.destroyAll() instead.
        "::delete::KBUser::favourites": {
          url: urlBase + "/KBUsers/:id/favourites",
          method: "DELETE"
        },

        // INTERNAL. Use KBUser.favourites.count() instead.
        "::count::KBUser::favourites": {
          url: urlBase + "/KBUsers/:id/favourites/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Favourite#updateOrCreate
         * @methodOf lbServices.Favourite
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Favourite` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Favourite#update
         * @methodOf lbServices.Favourite
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Favourite#destroyById
         * @methodOf lbServices.Favourite
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Favourite` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Favourite#removeById
         * @methodOf lbServices.Favourite
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Favourite` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Favourite#modelName
    * @propertyOf lbServices.Favourite
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Favourite`.
    */
    R.modelName = "Favourite";


        /**
         * @ngdoc method
         * @name lbServices.Favourite#recipe
         * @methodOf lbServices.Favourite
         *
         * @description
         *
         * Fetches belongsTo relation recipe.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        R.recipe = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::get::Favourite::recipe"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Favourite#kBUser
         * @methodOf lbServices.Favourite
         *
         * @description
         *
         * Fetches belongsTo relation kBUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `KBUser` object.)
         * </em>
         */
        R.kBUser = function() {
          var TargetResource = $injector.get("KBUser");
          var action = TargetResource["::get::Favourite::kBUser"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Email
 * @header lbServices.Email
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Email` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Email",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Emails/:id",
      { 'id': '@id' },
      {
      }
    );




    /**
    * @ngdoc property
    * @name lbServices.Email#modelName
    * @propertyOf lbServices.Email
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Email`.
    */
    R.modelName = "Email";


    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.KBUser
 * @header lbServices.KBUser
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `KBUser` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "KBUser",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/KBUsers/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use KBUser.accessTokens.findById() instead.
        "prototype$__findById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/KBUsers/:id/accessTokens/:fk",
          method: "GET"
        },

        // INTERNAL. Use KBUser.accessTokens.destroyById() instead.
        "prototype$__destroyById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/KBUsers/:id/accessTokens/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use KBUser.accessTokens.updateById() instead.
        "prototype$__updateById__accessTokens": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/KBUsers/:id/accessTokens/:fk",
          method: "PUT"
        },

        // INTERNAL. Use KBUser.favourites.findById() instead.
        "prototype$__findById__favourites": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/KBUsers/:id/favourites/:fk",
          method: "GET"
        },

        // INTERNAL. Use KBUser.favourites.destroyById() instead.
        "prototype$__destroyById__favourites": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/KBUsers/:id/favourites/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use KBUser.favourites.updateById() instead.
        "prototype$__updateById__favourites": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/KBUsers/:id/favourites/:fk",
          method: "PUT"
        },

        // INTERNAL. Use KBUser.ratings.findById() instead.
        "prototype$__findById__ratings": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/KBUsers/:id/ratings/:fk",
          method: "GET"
        },

        // INTERNAL. Use KBUser.ratings.destroyById() instead.
        "prototype$__destroyById__ratings": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/KBUsers/:id/ratings/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use KBUser.ratings.updateById() instead.
        "prototype$__updateById__ratings": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/KBUsers/:id/ratings/:fk",
          method: "PUT"
        },

        // INTERNAL. Use KBUser.identities.findById() instead.
        "prototype$__findById__identities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/KBUsers/:id/identities/:fk",
          method: "GET"
        },

        // INTERNAL. Use KBUser.identities.destroyById() instead.
        "prototype$__destroyById__identities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/KBUsers/:id/identities/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use KBUser.identities.updateById() instead.
        "prototype$__updateById__identities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/KBUsers/:id/identities/:fk",
          method: "PUT"
        },

        // INTERNAL. Use KBUser.credentials.findById() instead.
        "prototype$__findById__credentials": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/KBUsers/:id/credentials/:fk",
          method: "GET"
        },

        // INTERNAL. Use KBUser.credentials.destroyById() instead.
        "prototype$__destroyById__credentials": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/KBUsers/:id/credentials/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use KBUser.credentials.updateById() instead.
        "prototype$__updateById__credentials": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/KBUsers/:id/credentials/:fk",
          method: "PUT"
        },

        // INTERNAL. Use KBUser.accessTokens() instead.
        "prototype$__get__accessTokens": {
          isArray: true,
          url: urlBase + "/KBUsers/:id/accessTokens",
          method: "GET"
        },

        // INTERNAL. Use KBUser.accessTokens.create() instead.
        "prototype$__create__accessTokens": {
          url: urlBase + "/KBUsers/:id/accessTokens",
          method: "POST"
        },

        // INTERNAL. Use KBUser.accessTokens.destroyAll() instead.
        "prototype$__delete__accessTokens": {
          url: urlBase + "/KBUsers/:id/accessTokens",
          method: "DELETE"
        },

        // INTERNAL. Use KBUser.accessTokens.count() instead.
        "prototype$__count__accessTokens": {
          url: urlBase + "/KBUsers/:id/accessTokens/count",
          method: "GET"
        },

        // INTERNAL. Use KBUser.favourites() instead.
        "prototype$__get__favourites": {
          isArray: true,
          url: urlBase + "/KBUsers/:id/favourites",
          method: "GET"
        },

        // INTERNAL. Use KBUser.favourites.create() instead.
        "prototype$__create__favourites": {
          url: urlBase + "/KBUsers/:id/favourites",
          method: "POST"
        },

        // INTERNAL. Use KBUser.favourites.destroyAll() instead.
        "prototype$__delete__favourites": {
          url: urlBase + "/KBUsers/:id/favourites",
          method: "DELETE"
        },

        // INTERNAL. Use KBUser.favourites.count() instead.
        "prototype$__count__favourites": {
          url: urlBase + "/KBUsers/:id/favourites/count",
          method: "GET"
        },

        // INTERNAL. Use KBUser.ratings() instead.
        "prototype$__get__ratings": {
          isArray: true,
          url: urlBase + "/KBUsers/:id/ratings",
          method: "GET"
        },

        // INTERNAL. Use KBUser.ratings.create() instead.
        "prototype$__create__ratings": {
          url: urlBase + "/KBUsers/:id/ratings",
          method: "POST"
        },

        // INTERNAL. Use KBUser.ratings.destroyAll() instead.
        "prototype$__delete__ratings": {
          url: urlBase + "/KBUsers/:id/ratings",
          method: "DELETE"
        },

        // INTERNAL. Use KBUser.ratings.count() instead.
        "prototype$__count__ratings": {
          url: urlBase + "/KBUsers/:id/ratings/count",
          method: "GET"
        },

        // INTERNAL. Use KBUser.identities() instead.
        "prototype$__get__identities": {
          isArray: true,
          url: urlBase + "/KBUsers/:id/identities",
          method: "GET"
        },

        // INTERNAL. Use KBUser.identities.create() instead.
        "prototype$__create__identities": {
          url: urlBase + "/KBUsers/:id/identities",
          method: "POST"
        },

        // INTERNAL. Use KBUser.identities.destroyAll() instead.
        "prototype$__delete__identities": {
          url: urlBase + "/KBUsers/:id/identities",
          method: "DELETE"
        },

        // INTERNAL. Use KBUser.identities.count() instead.
        "prototype$__count__identities": {
          url: urlBase + "/KBUsers/:id/identities/count",
          method: "GET"
        },

        // INTERNAL. Use KBUser.credentials() instead.
        "prototype$__get__credentials": {
          isArray: true,
          url: urlBase + "/KBUsers/:id/credentials",
          method: "GET"
        },

        // INTERNAL. Use KBUser.credentials.create() instead.
        "prototype$__create__credentials": {
          url: urlBase + "/KBUsers/:id/credentials",
          method: "POST"
        },

        // INTERNAL. Use KBUser.credentials.destroyAll() instead.
        "prototype$__delete__credentials": {
          url: urlBase + "/KBUsers/:id/credentials",
          method: "DELETE"
        },

        // INTERNAL. Use KBUser.credentials.count() instead.
        "prototype$__count__credentials": {
          url: urlBase + "/KBUsers/:id/credentials/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.KBUser#create
         * @methodOf lbServices.KBUser
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `KBUser` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/KBUsers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.KBUser#createMany
         * @methodOf lbServices.KBUser
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `KBUser` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/KBUsers",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.KBUser#upsert
         * @methodOf lbServices.KBUser
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `KBUser` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/KBUsers",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.KBUser#exists
         * @methodOf lbServices.KBUser
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` -
         */
        "exists": {
          url: urlBase + "/KBUsers/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.KBUser#findById
         * @methodOf lbServices.KBUser
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `KBUser` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/KBUsers/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.KBUser#find
         * @methodOf lbServices.KBUser
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `KBUser` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/KBUsers",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.KBUser#findOne
         * @methodOf lbServices.KBUser
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `KBUser` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/KBUsers/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.KBUser#updateAll
         * @methodOf lbServices.KBUser
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/KBUsers/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.KBUser#deleteById
         * @methodOf lbServices.KBUser
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `KBUser` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/KBUsers/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.KBUser#count
         * @methodOf lbServices.KBUser
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "count": {
          url: urlBase + "/KBUsers/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.KBUser#prototype$updateAttributes
         * @methodOf lbServices.KBUser
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `KBUser` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/KBUsers/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.KBUser#createChangeStream
         * @methodOf lbServices.KBUser
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` -
         */
        "createChangeStream": {
          url: urlBase + "/KBUsers/change-stream",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.KBUser#login
         * @methodOf lbServices.KBUser
         *
         * @description
         *
         * Login a user with username/email and password.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `include` – `{string=}` - Related objects to include in the response. See the description of return value for more details.
         *   Default value: `user`.
         *
         *  - `rememberMe` - `boolean` - Whether the authentication credentials
         *     should be remembered in localStorage across app/browser restarts.
         *     Default: `true`.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The response body contains properties of the AccessToken created on login.
         * Depending on the value of `include` parameter, the body may contain additional properties:
         *
         *   - `user` - `{User}` - Data of the currently logged in user. (`include=user`)
         *
         *
         */
        "login": {
          params: {
            include: "user"
          },
          interceptor: {
            response: function(response) {
              var accessToken = response.data;
              LoopBackAuth.setUser(accessToken.id, accessToken.userId, accessToken.user);
              LoopBackAuth.rememberMe = response.config.params.rememberMe !== false;
              LoopBackAuth.save();
              return response.resource;
            }
          },
          url: urlBase + "/KBUsers/login",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.KBUser#logout
         * @methodOf lbServices.KBUser
         *
         * @description
         *
         * Logout a user with access token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `access_token` – `{string}` - Do not supply this argument, it is automatically extracted from request headers.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "logout": {
          interceptor: {
            response: function(response) {
              LoopBackAuth.clearUser();
              LoopBackAuth.clearStorage();
              return response.resource;
            }
          },
          url: urlBase + "/KBUsers/logout",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.KBUser#confirm
         * @methodOf lbServices.KBUser
         *
         * @description
         *
         * Confirm a user registration with email verification token.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `uid` – `{string}` -
         *
         *  - `token` – `{string}` -
         *
         *  - `redirect` – `{string=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "confirm": {
          url: urlBase + "/KBUsers/confirm",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.KBUser#resetPassword
         * @methodOf lbServices.KBUser
         *
         * @description
         *
         * Reset password for a user with email.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        "resetPassword": {
          url: urlBase + "/KBUsers/reset",
          method: "POST"
        },

        // INTERNAL. Use Rating.kBUsers() instead.
        "::get::Rating::kBUsers": {
          url: urlBase + "/Ratings/:id/kBUsers",
          method: "GET"
        },

        // INTERNAL. Use Favourite.kBUser() instead.
        "::get::Favourite::kBUser": {
          url: urlBase + "/Favourites/:id/kBUser",
          method: "GET"
        },

        // INTERNAL. Use UserCredential.user() instead.
        "::get::UserCredential::user": {
          url: urlBase + "/UserCredentials/:id/user",
          method: "GET"
        },

        // INTERNAL. Use UserIdentity.user() instead.
        "::get::UserIdentity::user": {
          url: urlBase + "/UserIdentities/:id/user",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.KBUser#getCurrent
         * @methodOf lbServices.KBUser
         *
         * @description
         *
         * Get data of the currently logged user. Fail with HTTP result 401
         * when there is no user logged in.
         *
         * @param {function(Object,Object)=} successCb
         *    Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *    `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         */
        "getCurrent": {
           url: urlBase + "/KBUsers" + "/:id",
           method: "GET",
           params: {
             id: function() {
              var id = LoopBackAuth.currentUserId;
              if (id == null) id = '__anonymous__';
              return id;
            },
          },
          interceptor: {
            response: function(response) {
              LoopBackAuth.currentUserData = response.data;
              return response.resource;
            }
          },
          __isGetCurrentUser__ : true
        }
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.KBUser#updateOrCreate
         * @methodOf lbServices.KBUser
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `KBUser` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.KBUser#update
         * @methodOf lbServices.KBUser
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.KBUser#destroyById
         * @methodOf lbServices.KBUser
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `KBUser` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.KBUser#removeById
         * @methodOf lbServices.KBUser
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `KBUser` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.KBUser#getCachedCurrent
         * @methodOf lbServices.KBUser
         *
         * @description
         *
         * Get data of the currently logged user that was returned by the last
         * call to {@link lbServices.KBUser#login} or
         * {@link lbServices.KBUser#getCurrent}. Return null when there
         * is no user logged in or the data of the current user were not fetched
         * yet.
         *
         * @returns {Object} A KBUser instance.
         */
        R.getCachedCurrent = function() {
          var data = LoopBackAuth.currentUserData;
          return data ? new R(data) : null;
        };

        /**
         * @ngdoc method
         * @name lbServices.KBUser#isAuthenticated
         * @methodOf lbServices.KBUser
         *
         * @returns {boolean} True if the current user is authenticated (logged in).
         */
        R.isAuthenticated = function() {
          return this.getCurrentId() != null;
        };

        /**
         * @ngdoc method
         * @name lbServices.KBUser#getCurrentId
         * @methodOf lbServices.KBUser
         *
         * @returns {Object} Id of the currently logged-in user or null.
         */
        R.getCurrentId = function() {
          return LoopBackAuth.currentUserId;
        };

    /**
    * @ngdoc property
    * @name lbServices.KBUser#modelName
    * @propertyOf lbServices.KBUser
    * @description
    * The name of the model represented by this $resource,
    * i.e. `KBUser`.
    */
    R.modelName = "KBUser";

    /**
     * @ngdoc object
     * @name lbServices.KBUser.accessTokens
     * @header lbServices.KBUser.accessTokens
     * @object
     * @description
     *
     * The object `KBUser.accessTokens` groups methods
     * manipulating `AccessToken` instances related to `KBUser`.
     *
     * Call {@link lbServices.KBUser#accessTokens KBUser.accessTokens()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.KBUser#accessTokens
         * @methodOf lbServices.KBUser
         *
         * @description
         *
         * Queries accessTokens of KBUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        R.accessTokens = function() {
          var TargetResource = $injector.get("AccessToken");
          var action = TargetResource["::get::KBUser::accessTokens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.KBUser.accessTokens#count
         * @methodOf lbServices.KBUser.accessTokens
         *
         * @description
         *
         * Counts accessTokens of KBUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        R.accessTokens.count = function() {
          var TargetResource = $injector.get("AccessToken");
          var action = TargetResource["::count::KBUser::accessTokens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.KBUser.accessTokens#create
         * @methodOf lbServices.KBUser.accessTokens
         *
         * @description
         *
         * Creates a new instance in accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        R.accessTokens.create = function() {
          var TargetResource = $injector.get("AccessToken");
          var action = TargetResource["::create::KBUser::accessTokens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.KBUser.accessTokens#createMany
         * @methodOf lbServices.KBUser.accessTokens
         *
         * @description
         *
         * Creates a new instance in accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        R.accessTokens.createMany = function() {
          var TargetResource = $injector.get("AccessToken");
          var action = TargetResource["::createMany::KBUser::accessTokens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.KBUser.accessTokens#destroyAll
         * @methodOf lbServices.KBUser.accessTokens
         *
         * @description
         *
         * Deletes all accessTokens of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.accessTokens.destroyAll = function() {
          var TargetResource = $injector.get("AccessToken");
          var action = TargetResource["::delete::KBUser::accessTokens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.KBUser.accessTokens#destroyById
         * @methodOf lbServices.KBUser.accessTokens
         *
         * @description
         *
         * Delete a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.accessTokens.destroyById = function() {
          var TargetResource = $injector.get("AccessToken");
          var action = TargetResource["::destroyById::KBUser::accessTokens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.KBUser.accessTokens#findById
         * @methodOf lbServices.KBUser.accessTokens
         *
         * @description
         *
         * Find a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        R.accessTokens.findById = function() {
          var TargetResource = $injector.get("AccessToken");
          var action = TargetResource["::findById::KBUser::accessTokens"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.KBUser.accessTokens#updateById
         * @methodOf lbServices.KBUser.accessTokens
         *
         * @description
         *
         * Update a related item by id for accessTokens.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for accessTokens
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `AccessToken` object.)
         * </em>
         */
        R.accessTokens.updateById = function() {
          var TargetResource = $injector.get("AccessToken");
          var action = TargetResource["::updateById::KBUser::accessTokens"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.KBUser.favourites
     * @header lbServices.KBUser.favourites
     * @object
     * @description
     *
     * The object `KBUser.favourites` groups methods
     * manipulating `Favourite` instances related to `KBUser`.
     *
     * Call {@link lbServices.KBUser#favourites KBUser.favourites()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.KBUser#favourites
         * @methodOf lbServices.KBUser
         *
         * @description
         *
         * Queries favourites of KBUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Favourite` object.)
         * </em>
         */
        R.favourites = function() {
          var TargetResource = $injector.get("Favourite");
          var action = TargetResource["::get::KBUser::favourites"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.KBUser.favourites#count
         * @methodOf lbServices.KBUser.favourites
         *
         * @description
         *
         * Counts favourites of KBUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        R.favourites.count = function() {
          var TargetResource = $injector.get("Favourite");
          var action = TargetResource["::count::KBUser::favourites"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.KBUser.favourites#create
         * @methodOf lbServices.KBUser.favourites
         *
         * @description
         *
         * Creates a new instance in favourites of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Favourite` object.)
         * </em>
         */
        R.favourites.create = function() {
          var TargetResource = $injector.get("Favourite");
          var action = TargetResource["::create::KBUser::favourites"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.KBUser.favourites#createMany
         * @methodOf lbServices.KBUser.favourites
         *
         * @description
         *
         * Creates a new instance in favourites of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Favourite` object.)
         * </em>
         */
        R.favourites.createMany = function() {
          var TargetResource = $injector.get("Favourite");
          var action = TargetResource["::createMany::KBUser::favourites"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.KBUser.favourites#destroyAll
         * @methodOf lbServices.KBUser.favourites
         *
         * @description
         *
         * Deletes all favourites of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.favourites.destroyAll = function() {
          var TargetResource = $injector.get("Favourite");
          var action = TargetResource["::delete::KBUser::favourites"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.KBUser.favourites#destroyById
         * @methodOf lbServices.KBUser.favourites
         *
         * @description
         *
         * Delete a related item by id for favourites.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for favourites
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.favourites.destroyById = function() {
          var TargetResource = $injector.get("Favourite");
          var action = TargetResource["::destroyById::KBUser::favourites"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.KBUser.favourites#findById
         * @methodOf lbServices.KBUser.favourites
         *
         * @description
         *
         * Find a related item by id for favourites.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for favourites
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Favourite` object.)
         * </em>
         */
        R.favourites.findById = function() {
          var TargetResource = $injector.get("Favourite");
          var action = TargetResource["::findById::KBUser::favourites"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.KBUser.favourites#updateById
         * @methodOf lbServices.KBUser.favourites
         *
         * @description
         *
         * Update a related item by id for favourites.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for favourites
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Favourite` object.)
         * </em>
         */
        R.favourites.updateById = function() {
          var TargetResource = $injector.get("Favourite");
          var action = TargetResource["::updateById::KBUser::favourites"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.KBUser.ratings
     * @header lbServices.KBUser.ratings
     * @object
     * @description
     *
     * The object `KBUser.ratings` groups methods
     * manipulating `Rating` instances related to `KBUser`.
     *
     * Call {@link lbServices.KBUser#ratings KBUser.ratings()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.KBUser#ratings
         * @methodOf lbServices.KBUser
         *
         * @description
         *
         * Queries ratings of KBUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Rating` object.)
         * </em>
         */
        R.ratings = function() {
          var TargetResource = $injector.get("Rating");
          var action = TargetResource["::get::KBUser::ratings"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.KBUser.ratings#count
         * @methodOf lbServices.KBUser.ratings
         *
         * @description
         *
         * Counts ratings of KBUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        R.ratings.count = function() {
          var TargetResource = $injector.get("Rating");
          var action = TargetResource["::count::KBUser::ratings"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.KBUser.ratings#create
         * @methodOf lbServices.KBUser.ratings
         *
         * @description
         *
         * Creates a new instance in ratings of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Rating` object.)
         * </em>
         */
        R.ratings.create = function() {
          var TargetResource = $injector.get("Rating");
          var action = TargetResource["::create::KBUser::ratings"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.KBUser.ratings#createMany
         * @methodOf lbServices.KBUser.ratings
         *
         * @description
         *
         * Creates a new instance in ratings of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Rating` object.)
         * </em>
         */
        R.ratings.createMany = function() {
          var TargetResource = $injector.get("Rating");
          var action = TargetResource["::createMany::KBUser::ratings"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.KBUser.ratings#destroyAll
         * @methodOf lbServices.KBUser.ratings
         *
         * @description
         *
         * Deletes all ratings of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.ratings.destroyAll = function() {
          var TargetResource = $injector.get("Rating");
          var action = TargetResource["::delete::KBUser::ratings"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.KBUser.ratings#destroyById
         * @methodOf lbServices.KBUser.ratings
         *
         * @description
         *
         * Delete a related item by id for ratings.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for ratings
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.ratings.destroyById = function() {
          var TargetResource = $injector.get("Rating");
          var action = TargetResource["::destroyById::KBUser::ratings"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.KBUser.ratings#findById
         * @methodOf lbServices.KBUser.ratings
         *
         * @description
         *
         * Find a related item by id for ratings.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for ratings
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Rating` object.)
         * </em>
         */
        R.ratings.findById = function() {
          var TargetResource = $injector.get("Rating");
          var action = TargetResource["::findById::KBUser::ratings"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.KBUser.ratings#updateById
         * @methodOf lbServices.KBUser.ratings
         *
         * @description
         *
         * Update a related item by id for ratings.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for ratings
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Rating` object.)
         * </em>
         */
        R.ratings.updateById = function() {
          var TargetResource = $injector.get("Rating");
          var action = TargetResource["::updateById::KBUser::ratings"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.KBUser.identities
     * @header lbServices.KBUser.identities
     * @object
     * @description
     *
     * The object `KBUser.identities` groups methods
     * manipulating `UserIdentity` instances related to `KBUser`.
     *
     * Call {@link lbServices.KBUser#identities KBUser.identities()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.KBUser#identities
         * @methodOf lbServices.KBUser
         *
         * @description
         *
         * Queries identities of KBUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserIdentity` object.)
         * </em>
         */
        R.identities = function() {
          var TargetResource = $injector.get("UserIdentity");
          var action = TargetResource["::get::KBUser::identities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.KBUser.identities#count
         * @methodOf lbServices.KBUser.identities
         *
         * @description
         *
         * Counts identities of KBUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        R.identities.count = function() {
          var TargetResource = $injector.get("UserIdentity");
          var action = TargetResource["::count::KBUser::identities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.KBUser.identities#create
         * @methodOf lbServices.KBUser.identities
         *
         * @description
         *
         * Creates a new instance in identities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserIdentity` object.)
         * </em>
         */
        R.identities.create = function() {
          var TargetResource = $injector.get("UserIdentity");
          var action = TargetResource["::create::KBUser::identities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.KBUser.identities#createMany
         * @methodOf lbServices.KBUser.identities
         *
         * @description
         *
         * Creates a new instance in identities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserIdentity` object.)
         * </em>
         */
        R.identities.createMany = function() {
          var TargetResource = $injector.get("UserIdentity");
          var action = TargetResource["::createMany::KBUser::identities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.KBUser.identities#destroyAll
         * @methodOf lbServices.KBUser.identities
         *
         * @description
         *
         * Deletes all identities of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.identities.destroyAll = function() {
          var TargetResource = $injector.get("UserIdentity");
          var action = TargetResource["::delete::KBUser::identities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.KBUser.identities#destroyById
         * @methodOf lbServices.KBUser.identities
         *
         * @description
         *
         * Delete a related item by id for identities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for identities
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.identities.destroyById = function() {
          var TargetResource = $injector.get("UserIdentity");
          var action = TargetResource["::destroyById::KBUser::identities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.KBUser.identities#findById
         * @methodOf lbServices.KBUser.identities
         *
         * @description
         *
         * Find a related item by id for identities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for identities
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserIdentity` object.)
         * </em>
         */
        R.identities.findById = function() {
          var TargetResource = $injector.get("UserIdentity");
          var action = TargetResource["::findById::KBUser::identities"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.KBUser.identities#updateById
         * @methodOf lbServices.KBUser.identities
         *
         * @description
         *
         * Update a related item by id for identities.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for identities
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserIdentity` object.)
         * </em>
         */
        R.identities.updateById = function() {
          var TargetResource = $injector.get("UserIdentity");
          var action = TargetResource["::updateById::KBUser::identities"];
          return action.apply(R, arguments);
        };
    /**
     * @ngdoc object
     * @name lbServices.KBUser.credentials
     * @header lbServices.KBUser.credentials
     * @object
     * @description
     *
     * The object `KBUser.credentials` groups methods
     * manipulating `UserCredential` instances related to `KBUser`.
     *
     * Call {@link lbServices.KBUser#credentials KBUser.credentials()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.KBUser#credentials
         * @methodOf lbServices.KBUser
         *
         * @description
         *
         * Queries credentials of KBUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserCredential` object.)
         * </em>
         */
        R.credentials = function() {
          var TargetResource = $injector.get("UserCredential");
          var action = TargetResource["::get::KBUser::credentials"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.KBUser.credentials#count
         * @methodOf lbServices.KBUser.credentials
         *
         * @description
         *
         * Counts credentials of KBUser.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        R.credentials.count = function() {
          var TargetResource = $injector.get("UserCredential");
          var action = TargetResource["::count::KBUser::credentials"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.KBUser.credentials#create
         * @methodOf lbServices.KBUser.credentials
         *
         * @description
         *
         * Creates a new instance in credentials of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserCredential` object.)
         * </em>
         */
        R.credentials.create = function() {
          var TargetResource = $injector.get("UserCredential");
          var action = TargetResource["::create::KBUser::credentials"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.KBUser.credentials#createMany
         * @methodOf lbServices.KBUser.credentials
         *
         * @description
         *
         * Creates a new instance in credentials of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserCredential` object.)
         * </em>
         */
        R.credentials.createMany = function() {
          var TargetResource = $injector.get("UserCredential");
          var action = TargetResource["::createMany::KBUser::credentials"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.KBUser.credentials#destroyAll
         * @methodOf lbServices.KBUser.credentials
         *
         * @description
         *
         * Deletes all credentials of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.credentials.destroyAll = function() {
          var TargetResource = $injector.get("UserCredential");
          var action = TargetResource["::delete::KBUser::credentials"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.KBUser.credentials#destroyById
         * @methodOf lbServices.KBUser.credentials
         *
         * @description
         *
         * Delete a related item by id for credentials.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for credentials
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.credentials.destroyById = function() {
          var TargetResource = $injector.get("UserCredential");
          var action = TargetResource["::destroyById::KBUser::credentials"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.KBUser.credentials#findById
         * @methodOf lbServices.KBUser.credentials
         *
         * @description
         *
         * Find a related item by id for credentials.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for credentials
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserCredential` object.)
         * </em>
         */
        R.credentials.findById = function() {
          var TargetResource = $injector.get("UserCredential");
          var action = TargetResource["::findById::KBUser::credentials"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.KBUser.credentials#updateById
         * @methodOf lbServices.KBUser.credentials
         *
         * @description
         *
         * Update a related item by id for credentials.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - User id
         *
         *  - `fk` – `{*}` - Foreign key for credentials
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserCredential` object.)
         * </em>
         */
        R.credentials.updateById = function() {
          var TargetResource = $injector.get("UserCredential");
          var action = TargetResource["::updateById::KBUser::credentials"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Keyword
 * @header lbServices.Keyword
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Keyword` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Keyword",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Keywords/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Keyword.recipes.findById() instead.
        "prototype$__findById__recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Keywords/:id/recipes/:fk",
          method: "GET"
        },

        // INTERNAL. Use Keyword.recipes.destroyById() instead.
        "prototype$__destroyById__recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Keywords/:id/recipes/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Keyword.recipes.updateById() instead.
        "prototype$__updateById__recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Keywords/:id/recipes/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Keyword.recipes.link() instead.
        "prototype$__link__recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Keywords/:id/recipes/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Keyword.recipes.unlink() instead.
        "prototype$__unlink__recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Keywords/:id/recipes/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Keyword.recipes.exists() instead.
        "prototype$__exists__recipes": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Keywords/:id/recipes/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Keyword.recipes() instead.
        "prototype$__get__recipes": {
          isArray: true,
          url: urlBase + "/Keywords/:id/recipes",
          method: "GET"
        },

        // INTERNAL. Use Keyword.recipes.create() instead.
        "prototype$__create__recipes": {
          url: urlBase + "/Keywords/:id/recipes",
          method: "POST"
        },

        // INTERNAL. Use Keyword.recipes.destroyAll() instead.
        "prototype$__delete__recipes": {
          url: urlBase + "/Keywords/:id/recipes",
          method: "DELETE"
        },

        // INTERNAL. Use Keyword.recipes.count() instead.
        "prototype$__count__recipes": {
          url: urlBase + "/Keywords/:id/recipes/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Keyword#create
         * @methodOf lbServices.Keyword
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Keyword` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Keywords",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Keyword#createMany
         * @methodOf lbServices.Keyword
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Keyword` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Keywords",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Keyword#upsert
         * @methodOf lbServices.Keyword
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Keyword` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Keywords",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Keyword#exists
         * @methodOf lbServices.Keyword
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` -
         */
        "exists": {
          url: urlBase + "/Keywords/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Keyword#findById
         * @methodOf lbServices.Keyword
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Keyword` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Keywords/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Keyword#find
         * @methodOf lbServices.Keyword
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Keyword` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Keywords",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Keyword#findOne
         * @methodOf lbServices.Keyword
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Keyword` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Keywords/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Keyword#updateAll
         * @methodOf lbServices.Keyword
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Keywords/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Keyword#deleteById
         * @methodOf lbServices.Keyword
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Keyword` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Keywords/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Keyword#count
         * @methodOf lbServices.Keyword
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "count": {
          url: urlBase + "/Keywords/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Keyword#prototype$updateAttributes
         * @methodOf lbServices.Keyword
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Keyword` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Keywords/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Keyword#createChangeStream
         * @methodOf lbServices.Keyword
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` -
         */
        "createChangeStream": {
          url: urlBase + "/Keywords/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Recipe.keywords.findById() instead.
        "::findById::Recipe::keywords": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/keywords/:fk",
          method: "GET"
        },

        // INTERNAL. Use Recipe.keywords.destroyById() instead.
        "::destroyById::Recipe::keywords": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/keywords/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Recipe.keywords.updateById() instead.
        "::updateById::Recipe::keywords": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/keywords/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Recipe.keywords.link() instead.
        "::link::Recipe::keywords": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/keywords/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Recipe.keywords.unlink() instead.
        "::unlink::Recipe::keywords": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/keywords/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Recipe.keywords.exists() instead.
        "::exists::Recipe::keywords": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Recipes/:id/keywords/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Recipe.keywords() instead.
        "::get::Recipe::keywords": {
          isArray: true,
          url: urlBase + "/Recipes/:id/keywords",
          method: "GET"
        },

        // INTERNAL. Use Recipe.keywords.create() instead.
        "::create::Recipe::keywords": {
          url: urlBase + "/Recipes/:id/keywords",
          method: "POST"
        },

        // INTERNAL. Use Recipe.keywords.createMany() instead.
        "::createMany::Recipe::keywords": {
          isArray: true,
          url: urlBase + "/Recipes/:id/keywords",
          method: "POST"
        },

        // INTERNAL. Use Recipe.keywords.destroyAll() instead.
        "::delete::Recipe::keywords": {
          url: urlBase + "/Recipes/:id/keywords",
          method: "DELETE"
        },

        // INTERNAL. Use Recipe.keywords.count() instead.
        "::count::Recipe::keywords": {
          url: urlBase + "/Recipes/:id/keywords/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Keyword#updateOrCreate
         * @methodOf lbServices.Keyword
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Keyword` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Keyword#update
         * @methodOf lbServices.Keyword
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Keyword#destroyById
         * @methodOf lbServices.Keyword
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Keyword` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Keyword#removeById
         * @methodOf lbServices.Keyword
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Keyword` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Keyword#modelName
    * @propertyOf lbServices.Keyword
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Keyword`.
    */
    R.modelName = "Keyword";

    /**
     * @ngdoc object
     * @name lbServices.Keyword.recipes
     * @header lbServices.Keyword.recipes
     * @object
     * @description
     *
     * The object `Keyword.recipes` groups methods
     * manipulating `Recipe` instances related to `Keyword`.
     *
     * Call {@link lbServices.Keyword#recipes Keyword.recipes()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Keyword#recipes
         * @methodOf lbServices.Keyword
         *
         * @description
         *
         * Queries recipes of Keyword.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        R.recipes = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::get::Keyword::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Keyword.recipes#count
         * @methodOf lbServices.Keyword.recipes
         *
         * @description
         *
         * Counts recipes of Keyword.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        R.recipes.count = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::count::Keyword::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Keyword.recipes#create
         * @methodOf lbServices.Keyword.recipes
         *
         * @description
         *
         * Creates a new instance in recipes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        R.recipes.create = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::create::Keyword::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Keyword.recipes#createMany
         * @methodOf lbServices.Keyword.recipes
         *
         * @description
         *
         * Creates a new instance in recipes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        R.recipes.createMany = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::createMany::Keyword::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Keyword.recipes#destroyAll
         * @methodOf lbServices.Keyword.recipes
         *
         * @description
         *
         * Deletes all recipes of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.recipes.destroyAll = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::delete::Keyword::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Keyword.recipes#destroyById
         * @methodOf lbServices.Keyword.recipes
         *
         * @description
         *
         * Delete a related item by id for recipes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for recipes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.recipes.destroyById = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::destroyById::Keyword::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Keyword.recipes#exists
         * @methodOf lbServices.Keyword.recipes
         *
         * @description
         *
         * Check the existence of recipes relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for recipes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        R.recipes.exists = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::exists::Keyword::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Keyword.recipes#findById
         * @methodOf lbServices.Keyword.recipes
         *
         * @description
         *
         * Find a related item by id for recipes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for recipes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        R.recipes.findById = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::findById::Keyword::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Keyword.recipes#link
         * @methodOf lbServices.Keyword.recipes
         *
         * @description
         *
         * Add a related item by id for recipes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for recipes
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        R.recipes.link = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::link::Keyword::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Keyword.recipes#unlink
         * @methodOf lbServices.Keyword.recipes
         *
         * @description
         *
         * Remove the recipes relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for recipes
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.recipes.unlink = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::unlink::Keyword::recipes"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Keyword.recipes#updateById
         * @methodOf lbServices.Keyword.recipes
         *
         * @description
         *
         * Update a related item by id for recipes.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for recipes
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Recipe` object.)
         * </em>
         */
        R.recipes.updateById = function() {
          var TargetResource = $injector.get("Recipe");
          var action = TargetResource["::updateById::Keyword::recipes"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.UserCredential
 * @header lbServices.UserCredential
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `UserCredential` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "UserCredential",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/UserCredentials/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use UserCredential.user() instead.
        "prototype$__get__user": {
          url: urlBase + "/UserCredentials/:id/user",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserCredential#create
         * @methodOf lbServices.UserCredential
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserCredential` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/UserCredentials",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserCredential#createMany
         * @methodOf lbServices.UserCredential
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserCredential` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/UserCredentials",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserCredential#upsert
         * @methodOf lbServices.UserCredential
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserCredential` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/UserCredentials",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserCredential#exists
         * @methodOf lbServices.UserCredential
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` -
         */
        "exists": {
          url: urlBase + "/UserCredentials/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserCredential#findById
         * @methodOf lbServices.UserCredential
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserCredential` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/UserCredentials/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserCredential#find
         * @methodOf lbServices.UserCredential
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserCredential` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/UserCredentials",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserCredential#findOne
         * @methodOf lbServices.UserCredential
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserCredential` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/UserCredentials/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserCredential#updateAll
         * @methodOf lbServices.UserCredential
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/UserCredentials/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserCredential#deleteById
         * @methodOf lbServices.UserCredential
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserCredential` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/UserCredentials/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserCredential#count
         * @methodOf lbServices.UserCredential
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "count": {
          url: urlBase + "/UserCredentials/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserCredential#prototype$updateAttributes
         * @methodOf lbServices.UserCredential
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserCredential` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/UserCredentials/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserCredential#createChangeStream
         * @methodOf lbServices.UserCredential
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` -
         */
        "createChangeStream": {
          url: urlBase + "/UserCredentials/change-stream",
          method: "POST"
        },

        // INTERNAL. Use KBUser.credentials.findById() instead.
        "::findById::KBUser::credentials": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/KBUsers/:id/credentials/:fk",
          method: "GET"
        },

        // INTERNAL. Use KBUser.credentials.destroyById() instead.
        "::destroyById::KBUser::credentials": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/KBUsers/:id/credentials/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use KBUser.credentials.updateById() instead.
        "::updateById::KBUser::credentials": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/KBUsers/:id/credentials/:fk",
          method: "PUT"
        },

        // INTERNAL. Use KBUser.credentials() instead.
        "::get::KBUser::credentials": {
          isArray: true,
          url: urlBase + "/KBUsers/:id/credentials",
          method: "GET"
        },

        // INTERNAL. Use KBUser.credentials.create() instead.
        "::create::KBUser::credentials": {
          url: urlBase + "/KBUsers/:id/credentials",
          method: "POST"
        },

        // INTERNAL. Use KBUser.credentials.createMany() instead.
        "::createMany::KBUser::credentials": {
          isArray: true,
          url: urlBase + "/KBUsers/:id/credentials",
          method: "POST"
        },

        // INTERNAL. Use KBUser.credentials.destroyAll() instead.
        "::delete::KBUser::credentials": {
          url: urlBase + "/KBUsers/:id/credentials",
          method: "DELETE"
        },

        // INTERNAL. Use KBUser.credentials.count() instead.
        "::count::KBUser::credentials": {
          url: urlBase + "/KBUsers/:id/credentials/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.UserCredential#updateOrCreate
         * @methodOf lbServices.UserCredential
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserCredential` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.UserCredential#update
         * @methodOf lbServices.UserCredential
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.UserCredential#destroyById
         * @methodOf lbServices.UserCredential
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserCredential` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.UserCredential#removeById
         * @methodOf lbServices.UserCredential
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserCredential` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.UserCredential#modelName
    * @propertyOf lbServices.UserCredential
    * @description
    * The name of the model represented by this $resource,
    * i.e. `UserCredential`.
    */
    R.modelName = "UserCredential";


        /**
         * @ngdoc method
         * @name lbServices.UserCredential#user
         * @methodOf lbServices.UserCredential
         *
         * @description
         *
         * Fetches belongsTo relation user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `KBUser` object.)
         * </em>
         */
        R.user = function() {
          var TargetResource = $injector.get("KBUser");
          var action = TargetResource["::get::UserCredential::user"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.UserIdentity
 * @header lbServices.UserIdentity
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `UserIdentity` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "UserIdentity",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/UserIdentities/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use UserIdentity.user() instead.
        "prototype$__get__user": {
          url: urlBase + "/UserIdentities/:id/user",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserIdentity#create
         * @methodOf lbServices.UserIdentity
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserIdentity` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/UserIdentities",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserIdentity#createMany
         * @methodOf lbServices.UserIdentity
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserIdentity` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/UserIdentities",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserIdentity#upsert
         * @methodOf lbServices.UserIdentity
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserIdentity` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/UserIdentities",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserIdentity#exists
         * @methodOf lbServices.UserIdentity
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` -
         */
        "exists": {
          url: urlBase + "/UserIdentities/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserIdentity#findById
         * @methodOf lbServices.UserIdentity
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserIdentity` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/UserIdentities/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserIdentity#find
         * @methodOf lbServices.UserIdentity
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserIdentity` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/UserIdentities",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserIdentity#findOne
         * @methodOf lbServices.UserIdentity
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserIdentity` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/UserIdentities/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserIdentity#updateAll
         * @methodOf lbServices.UserIdentity
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/UserIdentities/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserIdentity#deleteById
         * @methodOf lbServices.UserIdentity
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserIdentity` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/UserIdentities/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserIdentity#count
         * @methodOf lbServices.UserIdentity
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "count": {
          url: urlBase + "/UserIdentities/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserIdentity#prototype$updateAttributes
         * @methodOf lbServices.UserIdentity
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserIdentity` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/UserIdentities/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.UserIdentity#createChangeStream
         * @methodOf lbServices.UserIdentity
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` -
         */
        "createChangeStream": {
          url: urlBase + "/UserIdentities/change-stream",
          method: "POST"
        },

        // INTERNAL. Use KBUser.identities.findById() instead.
        "::findById::KBUser::identities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/KBUsers/:id/identities/:fk",
          method: "GET"
        },

        // INTERNAL. Use KBUser.identities.destroyById() instead.
        "::destroyById::KBUser::identities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/KBUsers/:id/identities/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use KBUser.identities.updateById() instead.
        "::updateById::KBUser::identities": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/KBUsers/:id/identities/:fk",
          method: "PUT"
        },

        // INTERNAL. Use KBUser.identities() instead.
        "::get::KBUser::identities": {
          isArray: true,
          url: urlBase + "/KBUsers/:id/identities",
          method: "GET"
        },

        // INTERNAL. Use KBUser.identities.create() instead.
        "::create::KBUser::identities": {
          url: urlBase + "/KBUsers/:id/identities",
          method: "POST"
        },

        // INTERNAL. Use KBUser.identities.createMany() instead.
        "::createMany::KBUser::identities": {
          isArray: true,
          url: urlBase + "/KBUsers/:id/identities",
          method: "POST"
        },

        // INTERNAL. Use KBUser.identities.destroyAll() instead.
        "::delete::KBUser::identities": {
          url: urlBase + "/KBUsers/:id/identities",
          method: "DELETE"
        },

        // INTERNAL. Use KBUser.identities.count() instead.
        "::count::KBUser::identities": {
          url: urlBase + "/KBUsers/:id/identities/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.UserIdentity#updateOrCreate
         * @methodOf lbServices.UserIdentity
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserIdentity` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.UserIdentity#update
         * @methodOf lbServices.UserIdentity
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.UserIdentity#destroyById
         * @methodOf lbServices.UserIdentity
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserIdentity` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.UserIdentity#removeById
         * @methodOf lbServices.UserIdentity
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `UserIdentity` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.UserIdentity#modelName
    * @propertyOf lbServices.UserIdentity
    * @description
    * The name of the model represented by this $resource,
    * i.e. `UserIdentity`.
    */
    R.modelName = "UserIdentity";


        /**
         * @ngdoc method
         * @name lbServices.UserIdentity#user
         * @methodOf lbServices.UserIdentity
         *
         * @description
         *
         * Fetches belongsTo relation user.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `refresh` – `{boolean=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `KBUser` object.)
         * </em>
         */
        R.user = function() {
          var TargetResource = $injector.get("KBUser");
          var action = TargetResource["::get::UserIdentity::user"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.Region
 * @header lbServices.Region
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `Region` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "Region",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/Regions/:id",
      { 'id': '@id' },
      {

        // INTERNAL. Use Region.stores.findById() instead.
        "prototype$__findById__stores": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Regions/:id/stores/:fk",
          method: "GET"
        },

        // INTERNAL. Use Region.stores.destroyById() instead.
        "prototype$__destroyById__stores": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Regions/:id/stores/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Region.stores.updateById() instead.
        "prototype$__updateById__stores": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Regions/:id/stores/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Region.stores.link() instead.
        "prototype$__link__stores": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Regions/:id/stores/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Region.stores.unlink() instead.
        "prototype$__unlink__stores": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Regions/:id/stores/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Region.stores.exists() instead.
        "prototype$__exists__stores": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Regions/:id/stores/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Region.stores() instead.
        "prototype$__get__stores": {
          isArray: true,
          url: urlBase + "/Regions/:id/stores",
          method: "GET"
        },

        // INTERNAL. Use Region.stores.create() instead.
        "prototype$__create__stores": {
          url: urlBase + "/Regions/:id/stores",
          method: "POST"
        },

        // INTERNAL. Use Region.stores.destroyAll() instead.
        "prototype$__delete__stores": {
          url: urlBase + "/Regions/:id/stores",
          method: "DELETE"
        },

        // INTERNAL. Use Region.stores.count() instead.
        "prototype$__count__stores": {
          url: urlBase + "/Regions/:id/stores/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Region#create
         * @methodOf lbServices.Region
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Region` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/Regions",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Region#createMany
         * @methodOf lbServices.Region
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Region` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/Regions",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Region#upsert
         * @methodOf lbServices.Region
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Region` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/Regions",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Region#exists
         * @methodOf lbServices.Region
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` -
         */
        "exists": {
          url: urlBase + "/Regions/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Region#findById
         * @methodOf lbServices.Region
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Region` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/Regions/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Region#find
         * @methodOf lbServices.Region
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Region` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/Regions",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Region#findOne
         * @methodOf lbServices.Region
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Region` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/Regions/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Region#updateAll
         * @methodOf lbServices.Region
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/Regions/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.Region#deleteById
         * @methodOf lbServices.Region
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Region` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/Regions/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.Region#count
         * @methodOf lbServices.Region
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "count": {
          url: urlBase + "/Regions/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.Region#prototype$updateAttributes
         * @methodOf lbServices.Region
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Region` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/Regions/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.Region#createChangeStream
         * @methodOf lbServices.Region
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` -
         */
        "createChangeStream": {
          url: urlBase + "/Regions/change-stream",
          method: "POST"
        },

        // INTERNAL. Use Store.regions.findById() instead.
        "::findById::Store::regions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Stores/:id/regions/:fk",
          method: "GET"
        },

        // INTERNAL. Use Store.regions.destroyById() instead.
        "::destroyById::Store::regions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Stores/:id/regions/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Store.regions.updateById() instead.
        "::updateById::Store::regions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Stores/:id/regions/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Store.regions.link() instead.
        "::link::Store::regions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Stores/:id/regions/rel/:fk",
          method: "PUT"
        },

        // INTERNAL. Use Store.regions.unlink() instead.
        "::unlink::Store::regions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Stores/:id/regions/rel/:fk",
          method: "DELETE"
        },

        // INTERNAL. Use Store.regions.exists() instead.
        "::exists::Store::regions": {
          params: {
          'fk': '@fk'
          },
          url: urlBase + "/Stores/:id/regions/rel/:fk",
          method: "HEAD"
        },

        // INTERNAL. Use Store.regions() instead.
        "::get::Store::regions": {
          isArray: true,
          url: urlBase + "/Stores/:id/regions",
          method: "GET"
        },

        // INTERNAL. Use Store.regions.create() instead.
        "::create::Store::regions": {
          url: urlBase + "/Stores/:id/regions",
          method: "POST"
        },

        // INTERNAL. Use Store.regions.createMany() instead.
        "::createMany::Store::regions": {
          isArray: true,
          url: urlBase + "/Stores/:id/regions",
          method: "POST"
        },

        // INTERNAL. Use Store.regions.destroyAll() instead.
        "::delete::Store::regions": {
          url: urlBase + "/Stores/:id/regions",
          method: "DELETE"
        },

        // INTERNAL. Use Store.regions.count() instead.
        "::count::Store::regions": {
          url: urlBase + "/Stores/:id/regions/count",
          method: "GET"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.Region#updateOrCreate
         * @methodOf lbServices.Region
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Region` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.Region#update
         * @methodOf lbServices.Region
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.Region#destroyById
         * @methodOf lbServices.Region
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Region` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.Region#removeById
         * @methodOf lbServices.Region
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Region` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.Region#modelName
    * @propertyOf lbServices.Region
    * @description
    * The name of the model represented by this $resource,
    * i.e. `Region`.
    */
    R.modelName = "Region";

    /**
     * @ngdoc object
     * @name lbServices.Region.stores
     * @header lbServices.Region.stores
     * @object
     * @description
     *
     * The object `Region.stores` groups methods
     * manipulating `Store` instances related to `Region`.
     *
     * Call {@link lbServices.Region#stores Region.stores()}
     * to query all related instances.
     */


        /**
         * @ngdoc method
         * @name lbServices.Region#stores
         * @methodOf lbServices.Region
         *
         * @description
         *
         * Queries stores of Region.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `filter` – `{object=}` -
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Store` object.)
         * </em>
         */
        R.stores = function() {
          var TargetResource = $injector.get("Store");
          var action = TargetResource["::get::Region::stores"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Region.stores#count
         * @methodOf lbServices.Region.stores
         *
         * @description
         *
         * Counts stores of Region.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        R.stores.count = function() {
          var TargetResource = $injector.get("Store");
          var action = TargetResource["::count::Region::stores"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Region.stores#create
         * @methodOf lbServices.Region.stores
         *
         * @description
         *
         * Creates a new instance in stores of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Store` object.)
         * </em>
         */
        R.stores.create = function() {
          var TargetResource = $injector.get("Store");
          var action = TargetResource["::create::Region::stores"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Region.stores#createMany
         * @methodOf lbServices.Region.stores
         *
         * @description
         *
         * Creates a new instance in stores of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Store` object.)
         * </em>
         */
        R.stores.createMany = function() {
          var TargetResource = $injector.get("Store");
          var action = TargetResource["::createMany::Region::stores"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Region.stores#destroyAll
         * @methodOf lbServices.Region.stores
         *
         * @description
         *
         * Deletes all stores of this model.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.stores.destroyAll = function() {
          var TargetResource = $injector.get("Store");
          var action = TargetResource["::delete::Region::stores"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Region.stores#destroyById
         * @methodOf lbServices.Region.stores
         *
         * @description
         *
         * Delete a related item by id for stores.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for stores
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.stores.destroyById = function() {
          var TargetResource = $injector.get("Store");
          var action = TargetResource["::destroyById::Region::stores"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Region.stores#exists
         * @methodOf lbServices.Region.stores
         *
         * @description
         *
         * Check the existence of stores relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for stores
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Store` object.)
         * </em>
         */
        R.stores.exists = function() {
          var TargetResource = $injector.get("Store");
          var action = TargetResource["::exists::Region::stores"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Region.stores#findById
         * @methodOf lbServices.Region.stores
         *
         * @description
         *
         * Find a related item by id for stores.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for stores
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Store` object.)
         * </em>
         */
        R.stores.findById = function() {
          var TargetResource = $injector.get("Store");
          var action = TargetResource["::findById::Region::stores"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Region.stores#link
         * @methodOf lbServices.Region.stores
         *
         * @description
         *
         * Add a related item by id for stores.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for stores
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Store` object.)
         * </em>
         */
        R.stores.link = function() {
          var TargetResource = $injector.get("Store");
          var action = TargetResource["::link::Region::stores"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Region.stores#unlink
         * @methodOf lbServices.Region.stores
         *
         * @description
         *
         * Remove the stores relation to an item by id.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for stores
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * This method returns no data.
         */
        R.stores.unlink = function() {
          var TargetResource = $injector.get("Store");
          var action = TargetResource["::unlink::Region::stores"];
          return action.apply(R, arguments);
        };

        /**
         * @ngdoc method
         * @name lbServices.Region.stores#updateById
         * @methodOf lbServices.Region.stores
         *
         * @description
         *
         * Update a related item by id for stores.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         *  - `fk` – `{*}` - Foreign key for stores
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `Store` object.)
         * </em>
         */
        R.stores.updateById = function() {
          var TargetResource = $injector.get("Store");
          var action = TargetResource["::updateById::Region::stores"];
          return action.apply(R, arguments);
        };

    return R;
  }]);

/**
 * @ngdoc object
 * @name lbServices.BraaiTip
 * @header lbServices.BraaiTip
 * @object
 *
 * @description
 *
 * A $resource object for interacting with the `BraaiTip` model.
 *
 * ## Example
 *
 * See
 * {@link http://docs.angularjs.org/api/ngResource.$resource#example $resource}
 * for an example of using this object.
 *
 */
module.factory(
  "BraaiTip",
  ['LoopBackResource', 'LoopBackAuth', '$injector', function(Resource, LoopBackAuth, $injector) {
    var R = Resource(
      urlBase + "/BraaiTips/:id",
      { 'id': '@id' },
      {

        /**
         * @ngdoc method
         * @name lbServices.BraaiTip#create
         * @methodOf lbServices.BraaiTip
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BraaiTip` object.)
         * </em>
         */
        "create": {
          url: urlBase + "/BraaiTips",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.BraaiTip#createMany
         * @methodOf lbServices.BraaiTip
         *
         * @description
         *
         * Create a new instance of the model and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BraaiTip` object.)
         * </em>
         */
        "createMany": {
          isArray: true,
          url: urlBase + "/BraaiTips",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.BraaiTip#upsert
         * @methodOf lbServices.BraaiTip
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BraaiTip` object.)
         * </em>
         */
        "upsert": {
          url: urlBase + "/BraaiTips",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.BraaiTip#exists
         * @methodOf lbServices.BraaiTip
         *
         * @description
         *
         * Check whether a model instance exists in the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `exists` – `{boolean=}` -
         */
        "exists": {
          url: urlBase + "/BraaiTips/:id/exists",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.BraaiTip#findById
         * @methodOf lbServices.BraaiTip
         *
         * @description
         *
         * Find a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         *  - `filter` – `{object=}` - Filter defining fields and include
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BraaiTip` object.)
         * </em>
         */
        "findById": {
          url: urlBase + "/BraaiTips/:id",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.BraaiTip#find
         * @methodOf lbServices.BraaiTip
         *
         * @description
         *
         * Find all instances of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Array.<Object>,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Array.<Object>} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BraaiTip` object.)
         * </em>
         */
        "find": {
          isArray: true,
          url: urlBase + "/BraaiTips",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.BraaiTip#findOne
         * @methodOf lbServices.BraaiTip
         *
         * @description
         *
         * Find first instance of the model matched by filter from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `filter` – `{object=}` - Filter defining fields, where, include, order, offset, and limit
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BraaiTip` object.)
         * </em>
         */
        "findOne": {
          url: urlBase + "/BraaiTips/findOne",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.BraaiTip#updateAll
         * @methodOf lbServices.BraaiTip
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        "updateAll": {
          url: urlBase + "/BraaiTips/update",
          method: "POST"
        },

        /**
         * @ngdoc method
         * @name lbServices.BraaiTip#deleteById
         * @methodOf lbServices.BraaiTip
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BraaiTip` object.)
         * </em>
         */
        "deleteById": {
          url: urlBase + "/BraaiTips/:id",
          method: "DELETE"
        },

        /**
         * @ngdoc method
         * @name lbServices.BraaiTip#count
         * @methodOf lbServices.BraaiTip
         *
         * @description
         *
         * Count instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `count` – `{number=}` -
         */
        "count": {
          url: urlBase + "/BraaiTips/count",
          method: "GET"
        },

        /**
         * @ngdoc method
         * @name lbServices.BraaiTip#prototype$updateAttributes
         * @methodOf lbServices.BraaiTip
         *
         * @description
         *
         * Update attributes for a model instance and persist it into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - PersistedModel id
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BraaiTip` object.)
         * </em>
         */
        "prototype$updateAttributes": {
          url: urlBase + "/BraaiTips/:id",
          method: "PUT"
        },

        /**
         * @ngdoc method
         * @name lbServices.BraaiTip#createChangeStream
         * @methodOf lbServices.BraaiTip
         *
         * @description
         *
         * Create a change stream.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         *  - `options` – `{object=}` -
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * Data properties:
         *
         *  - `changes` – `{ReadableStream=}` -
         */
        "createChangeStream": {
          url: urlBase + "/BraaiTips/change-stream",
          method: "POST"
        },
      }
    );



        /**
         * @ngdoc method
         * @name lbServices.BraaiTip#updateOrCreate
         * @methodOf lbServices.BraaiTip
         *
         * @description
         *
         * Update an existing model instance or insert a new one into the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *   This method does not accept any parameters.
         *   Supply an empty object or omit this argument altogether.
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BraaiTip` object.)
         * </em>
         */
        R["updateOrCreate"] = R["upsert"];

        /**
         * @ngdoc method
         * @name lbServices.BraaiTip#update
         * @methodOf lbServices.BraaiTip
         *
         * @description
         *
         * Update instances of the model matched by where from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `where` – `{object=}` - Criteria to match model instances
         *
         * @param {Object} postData Request data.
         *
         * This method expects a subset of model properties as request parameters.
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * The number of instances updated
         */
        R["update"] = R["updateAll"];

        /**
         * @ngdoc method
         * @name lbServices.BraaiTip#destroyById
         * @methodOf lbServices.BraaiTip
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BraaiTip` object.)
         * </em>
         */
        R["destroyById"] = R["deleteById"];

        /**
         * @ngdoc method
         * @name lbServices.BraaiTip#removeById
         * @methodOf lbServices.BraaiTip
         *
         * @description
         *
         * Delete a model instance by id from the data source.
         *
         * @param {Object=} parameters Request parameters.
         *
         *  - `id` – `{*}` - Model id
         *
         * @param {function(Object,Object)=} successCb
         *   Success callback with two arguments: `value`, `responseHeaders`.
         *
         * @param {function(Object)=} errorCb Error callback with one argument:
         *   `httpResponse`.
         *
         * @returns {Object} An empty reference that will be
         *   populated with the actual data once the response is returned
         *   from the server.
         *
         * <em>
         * (The remote method definition does not provide any description.
         * This usually means the response is a `BraaiTip` object.)
         * </em>
         */
        R["removeById"] = R["deleteById"];


    /**
    * @ngdoc property
    * @name lbServices.BraaiTip#modelName
    * @propertyOf lbServices.BraaiTip
    * @description
    * The name of the model represented by this $resource,
    * i.e. `BraaiTip`.
    */
    R.modelName = "BraaiTip";


    return R;
  }]);


module
  .factory('LoopBackAuth', function() {
    var props = ['accessTokenId', 'currentUserId'];
    var propsPrefix = '$LoopBack$';

    function LoopBackAuth() {
      var self = this;
      props.forEach(function(name) {
        self[name] = load(name);
      });
      this.rememberMe = undefined;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.save = function() {
      var self = this;
      var storage = this.rememberMe ? localStorage : sessionStorage;
      props.forEach(function(name) {
        save(storage, name, self[name]);
      });
    };

    LoopBackAuth.prototype.setUser = function(accessTokenId, userId, userData) {
      this.accessTokenId = accessTokenId;
      this.currentUserId = userId;
      this.currentUserData = userData;
    }

    LoopBackAuth.prototype.clearUser = function() {
      this.accessTokenId = null;
      this.currentUserId = null;
      this.currentUserData = null;
    }

    LoopBackAuth.prototype.clearStorage = function() {
      props.forEach(function(name) {
        save(sessionStorage, name, null);
        save(localStorage, name, null);
      });
    };

    return new LoopBackAuth();

    // Note: LocalStorage converts the value to string
    // We are using empty string as a marker for null/undefined values.
    function save(storage, name, value) {
      var key = propsPrefix + name;
      if (value == null) value = '';
      storage[key] = value;
    }

    function load(name) {
      var key = propsPrefix + name;
      return localStorage[key] || sessionStorage[key] || null;
    }
  })
  .config(['$httpProvider', function($httpProvider) {
    $httpProvider.interceptors.push('LoopBackAuthRequestInterceptor');
  }])
  .factory('LoopBackAuthRequestInterceptor', [ '$q', 'LoopBackAuth',
    function($q, LoopBackAuth) {
      return {
        'request': function(config) {

          // filter out non urlBase requests
          if (config.url.substr(0, urlBase.length) !== urlBase) {
            return config;
          }

          if (LoopBackAuth.accessTokenId) {
            config.headers[authHeader] = LoopBackAuth.accessTokenId;
          } else if (config.__isGetCurrentUser__) {
            // Return a stub 401 error for User.getCurrent() when
            // there is no user logged in
            var res = {
              body: { error: { status: 401 } },
              status: 401,
              config: config,
              headers: function() { return undefined; }
            };
            return $q.reject(res);
          }
          return config || $q.when(config);
        }
      }
    }])

  /**
   * @ngdoc object
   * @name lbServices.LoopBackResourceProvider
   * @header lbServices.LoopBackResourceProvider
   * @description
   * Use `LoopBackResourceProvider` to change the global configuration
   * settings used by all models. Note that the provider is available
   * to Configuration Blocks only, see
   * {@link https://docs.angularjs.org/guide/module#module-loading-dependencies Module Loading & Dependencies}
   * for more details.
   *
   * ## Example
   *
   * ```js
   * angular.module('app')
   *  .config(function(LoopBackResourceProvider) {
   *     LoopBackResourceProvider.setAuthHeader('X-Access-Token');
   *  });
   * ```
   */
  .provider('LoopBackResource', function LoopBackResourceProvider() {
    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setAuthHeader
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} header The header name to use, e.g. `X-Access-Token`
     * @description
     * Configure the REST transport to use a different header for sending
     * the authentication token. It is sent in the `Authorization` header
     * by default.
     */
    this.setAuthHeader = function(header) {
      authHeader = header;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#setUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @param {string} url The URL to use, e.g. `/api` or `//example.com/api`.
     * @description
     * Change the URL of the REST API server. By default, the URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.setUrlBase = function(url) {
      urlBase = url;
    };

    /**
     * @ngdoc method
     * @name lbServices.LoopBackResourceProvider#getUrlBase
     * @methodOf lbServices.LoopBackResourceProvider
     * @description
     * Get the URL of the REST API server. The URL provided
     * to the code generator (`lb-ng` or `grunt-loopback-sdk-angular`) is used.
     */
    this.getUrlBase = function() {
      return urlBase;
    };

    this.$get = ['$resource', function($resource) {
      return function(url, params, actions) {
        var resource = $resource(url, params, actions);

        // Angular always calls POST on $save()
        // This hack is based on
        // http://kirkbushell.me/angular-js-using-ng-resource-in-a-more-restful-manner/
        resource.prototype.$save = function(success, error) {
          // Fortunately, LoopBack provides a convenient `upsert` method
          // that exactly fits our needs.
          var result = resource.upsert.call(this, {}, this, success, error);
          return result.$promise || result;
        };
        return resource;
      };
    }];
  });

})(window, window.angular);
