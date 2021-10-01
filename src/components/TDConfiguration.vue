<template>
  <el-form ref="form" :model="form" label-width="160px">
    <span>Edit Things</span>

    <el-form-item label="Thing name">
      <el-select
        style="width: 100%;"
        v-model="selEditValue"
        placeholder="select thing"
      >
        <el-option
          v-for="sec in listEditableThings"
          :key="sec.value"
          :label="sec.label"
          :value="sec.value"
        ></el-option>
      </el-select>
      
      <el-button style="margin-top: 2px;" @click="selectEDit()">Edit</el-button>
      <el-button type="danger" @click="selectDef()">Cancel</el-button>
    </el-form-item>

    <span>Thing Core</span>
    <el-divider></el-divider>
    <!-- @name -->
    <el-tooltip
      :open-delay="1000"
      class="item"
      effect="dark"
      content="ex. Apple Watch, Air Quiality etc.. (don't use spaces in name field)"
      placement="top-start"
    >
      <el-form-item label="Unique URL name">
        <el-input v-model="form.thingName" placeholder="thingName"></el-input>
      </el-form-item>
    </el-tooltip>

    <!-- @name -->
    <el-tooltip
      :open-delay="1000"
      class="item"
      effect="dark"
      content="ex. Apple Watch, Air Quiality etc.."
      placement="top-start"
    >
      <el-form-item label="name">
        <el-input v-model="form.name" placeholder="name"></el-input>
      </el-form-item>
    </el-tooltip>

    <!-- @context -->
    <el-tooltip
      :open-delay="1000"
      class="item"
      effect="dark"
      content="JSON-LD keyword to define short-hand names called terms that are used throughout a TD document | anyURI or Array"
      placement="top-start"
    >
      <el-form-item required label="JSON-LD keyword">
        <el-input v-model="form['@context']" placeholder="@context"></el-input>
      </el-form-item>
    </el-tooltip>

    <!-- @type -->
    <el-tooltip
      :open-delay="1000"
      class="item"
      effect="dark"
      content="JSON-LD keyword to label the object with semantic tags (or types) | string or Array of string"
      placement="top-start"
    >
      <el-form-item required label="Type">
        <el-input v-model="form['@type']" placeholder="@type"></el-input>
      </el-form-item>
    </el-tooltip>

    <!-- @title -->
    <el-tooltip
      :open-delay="1000"
      :hide-after="10000"
      class="item"
      effect="dark"
      content="Provides a human-readable title (e.g., display a text for UI representation) based on a default language | string"
      placement="top-start"
    >
      <el-form-item required label="Title">
        <el-input v-model="form.title" placeholder="title"></el-input>
      </el-form-item>
    </el-tooltip>

    <!-- @titles -->
    <el-tooltip
      :open-delay="1000"
      :hide-after="10000"
      class="item"
      effect="dark"
      content="	Provides multi-language human-readable titles (e.g., display a text for UI representation in different languages) | MultiLanguage"
      placement="top-start"
    >
      <el-form-item label="Titles">
        <div v-for="(title, index) in form.titles" :key="index">
          <el-input
            placeholder="Please input"
            v-model="title.desciption"
            class="input-with-select"
            style="padding-bottom: 2px;"
          >
            <el-select
              v-model="title.language"
              slot="prepend"
              placeholder="Select"
              style="width: 260px;"
            >
              <el-option
                v-for="l in lng"
                :key="l.language"
                :label="l.label"
                :value="l.value"
              ></el-option>
            </el-select>

            <el-button
              v-if="index == 0"
              @click="addTitles(index)"
              slot="append"
              icon="el-icon-circle-plus-outline"
            ></el-button>
            <el-button
              v-else
              @click="removeTitles(title)"
              slot="append"
              icon="el-icon-remove-outline"
            ></el-button>
          </el-input>
        </div>
      </el-form-item>
    </el-tooltip>

    <!-- @description -->
    <el-tooltip
      :open-delay="1000"
      :hide-after="10000"
      class="item"
      effect="dark"
      content="Provides additional (human-readable) information based on a default language | string"
      placement="top-start"
    >
      <el-form-item label="Description">
        <el-input
          v-model="form.description"
          placeholder="desciption"
        ></el-input>
      </el-form-item>
    </el-tooltip>

    <!-- @descriptions -->
    <el-tooltip
      :open-delay="1000"
      :hide-after="10000"
      class="item"
      effect="dark"
      content="Can be used to support (human-readable) information in different languages | MultiLanguage"
      placement="top-start"
    >
      <el-form-item label="Descriptions">
        <div v-for="(desc, index) in form.descriptions" :key="index">
          <el-input
            placeholder="Please input"
            v-model="desc.desciption"
            class="input-with-select"
            style="padding-bottom: 2px;"
          >
            <el-select
              v-model="desc.language"
              slot="prepend"
              placeholder="Select"
              style="width: 260px;"
            >
              <el-option
                v-for="l in lng"
                :key="l.language"
                :label="l.label"
                :value="l.value"
              ></el-option>
            </el-select>

            <el-button
              v-if="index == 0"
              @click="addDescriptions(index)"
              slot="append"
              icon="el-icon-circle-plus-outline"
            ></el-button>
            <el-button
              v-else
              @click="removeDescriptions(desc)"
              slot="append"
              icon="el-icon-remove-outline"
            ></el-button>
          </el-input>
        </div>
      </el-form-item>
    </el-tooltip>

    <!-- @version -->
    <el-tooltip
      :open-delay="1000"
      :hide-after="10000"
      class="item"
      effect="dark"
      content="Provides version information | VersionInfo"
      placement="top-start"
    >
      <el-form-item label="Version">
        <el-input v-model="form.version" placeholder="version"></el-input>
      </el-form-item>
    </el-tooltip>

    <!-- @base -->
    <el-tooltip
      :open-delay="1000"
      :hide-after="10000"
      class="item"
      effect="dark"
      content="Define the base URI that is used for all relative URI references throughout a TD document. In TD instances, all relative URIs are resolved relative to the base URI using the algorithm | anyURI"
      placement="top-start"
    >
      <el-form-item label="Base">
        <el-input v-model="form.base" placeholder="base"></el-input>
      </el-form-item>
    </el-tooltip>

    <!-- @links -->
    <el-tooltip
      :open-delay="1000"
      :hide-after="10000"
      class="item"
      effect="dark"
      content="Provides Web links to arbitrary resources that relate to the specified Thing Description | Array of Link"
      placement="top-start"
    >
      <el-form-item label="Links">
        <el-input v-model="form.links" placeholder="links"></el-input>
      </el-form-item>
    </el-tooltip>

    <span>Thing Properties</span>
    <el-divider></el-divider>

    <el-form
      v-for="(property, index) in form.properties"
      :key="property.key"
      :prop="'properties.' + index + '.value'"
      ref="form"
      :model="form"
      label-width="160px"
    >
      <br /><span>property {{ index + 1 }} </span>
      <el-button
        type="danger"
        style="padding-left: 10px;"
        size="mini"
        @click.prevent="removeProperty(property)"
        >delete</el-button
      >
      <br />
      <el-form-item label="Property name">
        <el-input v-model="property.name" placeholder="name"></el-input>
      </el-form-item>

      <el-form-item label="Property title">
        <el-input v-model="property.title" placeholder="title"></el-input>
      </el-form-item>

      <el-form-item label="Property description">
        <el-input
          v-model="property.description"
          placeholder="description"
        ></el-input>
      </el-form-item>

      <el-form
        v-for="(form, ind) in property.forms"
        :key="'forms.' + ind + '.value'"
        :prop="'forms.' + ind + '.value'"
        ref="form"
        :model="form"
        label-width="160px"
      >
        <br /><span>property {{index + 1}} form {{ ind + 1 }} </span>
        <el-button
          type="danger"
          style="padding-left: 10px;"
          size="small"
          @click.prevent="removeForm(index, form)"
          >delete</el-button
        >
        <br />
        <br />

        <el-form-item label="Link">
          <el-input v-model="form.href" placeholder="href"></el-input>
        </el-form-item>

        <el-form-item label="Operation">
          <el-select
            v-model="form.op"
            multiple
            placeholder="op"
            class="op-select"
          >
            <el-option label="readproperty" value="readproperty"></el-option>
            <el-option label="writeproperty" value="writeproperty"></el-option>
            <el-option
              label="observeproperty"
              value="observeproperty"
            ></el-option>
            <el-option
              label="unobserveproperty"
              value="unobserveproperty"
            ></el-option>
            <el-option label="invokeaction" value="invokeaction"></el-option>
            <el-option
              label="subscribeevent"
              value="subscribeevent"
            ></el-option>
            <el-option
              label="unsubscribeevent"
              value="unsubscribeevent"
            ></el-option>
            <el-option
              label="readallproperties"
              value="readallproperties"
            ></el-option>
            <el-option
              label="writeallproperties"
              value="writeallproperties"
            ></el-option>
            <el-option
              label="readmultipleproperties"
              value="readmultipleproperties"
            ></el-option>
            <el-option
              label="writemultipleproperties"
              value="writemultipleproperties"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="contentType">
          <el-input
            v-model="form.contentType"
            placeholder="contentType"
          ></el-input>
        </el-form-item>

        <el-form-item label="Secure">
          <el-select v-model="form.secure" placeholder="Secure">
            <el-option
              v-for="sec in security"
              :key="sec.value"
              :label="sec.label"
              :value="sec.value"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>

      <el-button size="mini" @click="addPropertyForm(index)"
        >Add form to property</el-button
      >

      <br />
    </el-form>

    <br />

    <el-button style="" @click="addProperty">Add property</el-button>
    <br /><br /><br />
    <span>Thing Actions</span>
    <el-divider></el-divider>
    <el-form
      v-for="(action, index) in form.actions"
      :key="'action' + index + '.value'"
      :prop="'properties.' + index + '.value'"
      ref="form"
      :model="form"
      label-width="160px"
    >
      <br /><span>action {{ index + 1 }} </span>
      <el-button type="danger" size="mini" @click.prevent="removeAction(action)"
        >delete</el-button
      >
      <br />

      <el-form-item label="Action name">
        <el-input v-model="action.name" placeholder="name"></el-input>
      </el-form-item>
      <el-form-item label="Action title">
        <el-input v-model="action.title" placeholder="title"></el-input>
      </el-form-item>
      <el-form-item label="Action description">
        <el-input v-model="action.desc" placeholder="description"></el-input>
      </el-form-item>

      <el-form
        v-for="(form, ind) in action.forms"
        :key="'properties.' + ind + '.value'"
        :prop="'properties.' + ind + '.value'"
        ref="form"
        :model="form"
        label-width="160px"
      >
        <br /><span>action {{ index + 1 }} form {{ ind + 1 }} </span>
        <el-button
          type="danger"
          style="padding-left: 10px;"
          size="small"
          @click.prevent="removeActionForm(index, form)"
          >delete</el-button
        >
        <br />
        <br />

        <el-form-item label="Link">
          <el-input v-model="form.href" placeholder="href"></el-input>
        </el-form-item>

        <el-form-item label="Operation">
          <el-select
            v-model="form.op"
            multiple=""
            placeholder="op"
            class="op-select"
          >
            <el-option label="readproperty" value="readproperty"></el-option>
            <el-option label="writeproperty" value="writeproperty"></el-option>
            <el-option
              label="observeproperty"
              value="observeproperty"
            ></el-option>
            <el-option
              label="unobserveproperty"
              value="unobserveproperty"
            ></el-option>
            <el-option label="invokeaction" value="invokeaction"></el-option>
            <el-option
              label="subscribeevent"
              value="subscribeevent"
            ></el-option>
            <el-option
              label="unsubscribeevent"
              value="unsubscribeevent"
            ></el-option>
            <el-option
              label="readallproperties"
              value="readallproperties"
            ></el-option>
            <el-option
              label="writeallproperties"
              value="writeallproperties"
            ></el-option>
            <el-option
              label="readmultipleproperties"
              value="readmultipleproperties"
            ></el-option>
            <el-option
              label="writemultipleproperties"
              value="writemultipleproperties"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="contentType">
          <el-input
            v-model="form.contentType"
            placeholder="contentType"
          ></el-input>
        </el-form-item>

        <el-form-item label="Secure">
          <el-select v-model="form.secure" placeholder="Secure">
            <el-option
              v-for="sec in form.security"
              :key="sec.value"
              :label="sec.label"
              :value="sec.value"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>

      <el-button size="mini" @click="addActionForm(index)"
        >Add form to action</el-button
      >

      <br />
    </el-form>
    <el-button @click="addActions">Add action</el-button>
    <br /><br /><br />

    <span>Thing Events</span>
    <el-divider></el-divider>
    <el-form
      v-for="(event, index) in form.events"
      :key="'event.' + index + '.value'"
      :prop="'event.' + index + '.value'"
      ref="form"
      :model="form"
      label-width="160px"
    >
      <br /><span>event {{ index + 1 }} </span>
      <el-button type="danger" size="mini" @click.prevent="removeEvent(event)"
        >delete</el-button
      >
      <br />
      <br />
      <el-form-item label="Event name">
        <el-input v-model="event.name" placeholder="name"></el-input>
      </el-form-item>
      <el-form-item label="Event title">
        <el-input v-model="event.title" placeholder="title"></el-input>
      </el-form-item>
      <el-form-item label="Event description">
        <el-input v-model="event.desc" placeholder="description"></el-input>
      </el-form-item>
      <el-form
        v-for="(form, ind) in event.forms"
        :key="'events.' + ind + '.value'"
        :prop="'events.' + ind + '.value'"
        ref="form"
        :model="form"
        label-width="160px"
      >
        <br /><span>event {{ index + 1 }} form {{ ind + 1 }} </span>
        <el-button
          type="danger"
          style="padding-left: 10px;"
          size="small"
          @click.prevent="removeEventForm(index, form)"
          >delete</el-button
        >
        <br />
        <br />

        <el-form-item label="Link">
          <el-input v-model="form.href" placeholder="href"></el-input>
        </el-form-item>

        <el-form-item label="Operation">
          <el-select
            v-model="form.op"
            multiple
            placeholder="op"
            class="op-select"
          >
            <el-option label="readproperty" value="readproperty"></el-option>
            <el-option label="writeproperty" value="writeproperty"></el-option>
            <el-option
              label="observeproperty"
              value="observeproperty"
            ></el-option>
            <el-option
              label="unobserveproperty"
              value="unobserveproperty"
            ></el-option>
            <el-option label="invokeaction" value="invokeaction"></el-option>
            <el-option
              label="subscribeevent"
              value="subscribeevent"
            ></el-option>
            <el-option
              label="unsubscribeevent"
              value="unsubscribeevent"
            ></el-option>
            <el-option
              label="readallproperties"
              value="readallproperties"
            ></el-option>
            <el-option
              label="writeallproperties"
              value="writeallproperties"
            ></el-option>
            <el-option
              label="readmultipleproperties"
              value="readmultipleproperties"
            ></el-option>
            <el-option
              label="writemultipleproperties"
              value="writemultipleproperties"
            ></el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="contentType">
          <el-input
            v-model="form.contentType"
            placeholder="contentType"
          ></el-input>
        </el-form-item>

        <el-form-item label="Secure">
          <el-select v-model="form.secure" placeholder="Secure">
            <el-option
              v-for="sec in security"
              :key="sec.value"
              :label="sec.label"
              :value="sec.value"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>

      <el-button size="mini" @click="addEventForm(index)"
        >Add form to event</el-button
      >
      <br />
      <br />
    </el-form>

    <el-button @click="addEvents">Add event</el-button>
    <br /><br /><br />

    <span>Forms</span>
    <el-divider></el-divider>

    <el-form
      v-for="(form, ind) in form.forms"
      :key="'properties.' + ind + '.value'"
      :prop="'properties.' + ind + '.value'"
      ref="form"
      :model="form"
      label-width="160px"
    >
      <br /><span>thing form {{ ind + 1 }} </span>
      <el-button
        type="danger"
        style="padding-left: 10px;"
        size="small"
        @click.prevent="removeForm(ind, form)"
        >delete</el-button
      >
      <br />
      <br />

      <el-form-item label="Link">
        <el-input v-model="form.href" placeholder="href"></el-input>
      </el-form-item>

      <el-form-item label="Operation">
        <el-select
          v-model="form.op"
          multiple
          placeholder="op"
          class="op-select"
        >
          <el-option label="readproperty" value="readproperty"></el-option>
          <el-option label="writeproperty" value="writeproperty"></el-option>
          <el-option
            label="observeproperty"
            value="observeproperty"
          ></el-option>
          <el-option
            label="unobserveproperty"
            value="unobserveproperty"
          ></el-option>
          <el-option label="invokeaction" value="invokeaction"></el-option>
          <el-option label="subscribeevent" value="subscribeevent"></el-option>
          <el-option
            label="unsubscribeevent"
            value="unsubscribeevent"
          ></el-option>
          <el-option
            label="readallproperties"
            value="readallproperties"
          ></el-option>
          <el-option
            label="writeallproperties"
            value="writeallproperties"
          ></el-option>
          <el-option
            label="readmultipleproperties"
            value="readmultipleproperties"
          ></el-option>
          <el-option
            label="writemultipleproperties"
            value="writemultipleproperties"
          ></el-option>
        </el-select>
      </el-form-item>

      <el-form-item label="contentType">
        <el-input
          v-model="form.contentType"
          placeholder="contentType"
        ></el-input>
      </el-form-item>

      <el-form-item label="Secure">
        <el-select v-model="form.secure" placeholder="Secure">
          <el-option
            v-for="sec in security"
            :key="sec.value"
            :label="sec.label"
            :value="sec.value"
          ></el-option>
        </el-select>
      </el-form-item>
    </el-form>

    <el-button @click="addForm">Add form to thing</el-button>
    <br /><br /><br />
    <span>Security</span>
    <el-divider></el-divider>

    <el-form-item label="Security">
      <el-select
        style="width: 100%;"
        v-model="form.security"
        multiple
        placeholder="security"
      >
        <el-option
          v-for="sec in security"
          :key="sec.value"
          :label="sec.label"
          :value="sec.value"
        ></el-option>
      </el-select>
    </el-form-item>

    <el-button @click="addSecurityDefinitions"
      >Add Security Definitions</el-button
    >
    <br /><br />

    <el-form
      v-for="(secDef, index) in form.securityDefinitions"
      :key="index"
      label-width="160px"
    >
      <br />
      <span>Security Definitions {{ secDef.scheme }}</span
      ><br /><br />

      <el-form-item label="Security Definitions">
        <el-select
          style="width: 100%;"
          v-model="secDef.scheme"
          placeholder="security"
        >
          <el-option
            v-for="sec in security"
            :key="sec.value"
            :label="sec.label"
            :value="sec.value"
          ></el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="Description">
        <el-input
          v-model="secDef.description"
          placeholder="description"
        ></el-input>
      </el-form-item>
      <div v-if="secDef.scheme == 'basic_sc'">
        <!-- in -->
        <el-tooltip
          :open-delay="1000"
          :hide-after="10000"
          class="item"
          effect="dark"
          content="Specifies the location of security authentication information | string"
          placement="top-start"
        >
          <el-form-item label="in">
            <el-select
              style="width: 100%;"
              v-model="secDef.securityDefinitions"
              placeholder="location"
            >
              <el-option
                v-for="lc in locsec"
                :key="lc.value"
                :label="lc.label"
                :value="lc.value"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-tooltip>

        <el-tooltip
          :open-delay="1000"
          :hide-after="10000"
          class="item"
          effect="dark"
          content="Name for query, header, or cookie parameters | string"
          placement="top-start"
        >
          <el-form-item label="name">
            <el-input v-model="secDef.name" placeholder="name"></el-input>
          </el-form-item>
        </el-tooltip>
      </div>

      <div v-if="secDef.scheme == 'apikey_sc'">
        <!-- in -->
        <el-tooltip
          :open-delay="1000"
          :hide-after="10000"
          class="item"
          effect="dark"
          content="Specifies the location of security authentication information | string"
          placement="top-start"
        >
          <el-form-item label="in">
            <el-select
              style="width: 100%;"
              v-model="secDef.securityDefinitions"
              placeholder="location"
            >
              <el-option
                v-for="lc in locsec"
                :key="lc.value"
                :label="lc.label"
                :value="lc.value"
              ></el-option>
            </el-select>
          </el-form-item>
        </el-tooltip>

        <el-tooltip
          :open-delay="1000"
          :hide-after="10000"
          class="item"
          effect="dark"
          content="Name for query, header, or cookie parameters | string"
          placement="top-start"
        >
          <el-form-item label="name">
            <el-input v-model="secDef.name" placeholder="name"></el-input>
          </el-form-item>
        </el-tooltip>
      </div>

      <div v-if="secDef.scheme == 'oauth2_sc'">
        <el-tooltip
          :open-delay="1000"
          :hide-after="10000"
          class="item"
          effect="dark"
          content="URI of the authorization server | anyURI"
          placement="top-start"
        >
          <el-form-item label="authorization">
            <el-input
              v-model="secDef.authorization"
              placeholder="authorization"
            ></el-input>
          </el-form-item>
        </el-tooltip>

        <el-tooltip
          :open-delay="1000"
          :hide-after="10000"
          class="item"
          effect="dark"
          content="token | anyURI"
          placement="top-start"
        >
          <el-form-item label="token">
            <el-input v-model="secDef.token" placeholder="token"></el-input>
          </el-form-item>
        </el-tooltip>

        <el-tooltip
          :open-delay="1000"
          :hide-after="10000"
          class="item"
          effect="dark"
          content="URI of the refresh server | anyURI"
          placement="top-start"
        >
          <el-form-item label="refresh">
            <el-input v-model="secDef.refresh" placeholder="refresh"></el-input>
          </el-form-item>
        </el-tooltip>

        <el-tooltip
          :open-delay="1000"
          :hide-after="10000"
          class="item"
          effect="dark"
          content="Set of authorization scope identifiers provided as an array | string or Array of string"
          placement="top-start"
        >
          <el-form-item label="scopes">
            <el-input v-model="secDef.scopes" placeholder="scopes"></el-input>
          </el-form-item>
        </el-tooltip>

        <el-tooltip
          :open-delay="1000"
          :hide-after="10000"
          class="item"
          effect="dark"
          content="Authorization flow | anyURI"
          placement="top-start"
        >
          <el-form-item label="flow">
            <el-input v-model="secDef.flow" placeholder="flow"></el-input>
          </el-form-item>
        </el-tooltip>
      </div>
    </el-form>

    <v-jsoneditor
      v-model="mapperTDfromForm"
      :plus="false"
      height="400px"
    ></v-jsoneditor>
    <br />
    <!-- <v-jsoneditor
      v-model="mapperTDtoForm"
      :plus="false"
      height="400px"
    ></v-jsoneditor>
    <br />
    <v-jsoneditor
      v-model="form"
      :plus="false"
      height="400px"
    ></v-jsoneditor>
    <br /> -->

    <el-button type="primary" @click="onSubmit">Create TD</el-button>
    <el-button type="danger">Cancel</el-button>
  </el-form>
</template>

<script>
import VJsoneditor from "v-jsoneditor";

export default {
  name: "TDConfiguration",
  components: {
    VJsoneditor,
  },
  data() {
    return {
      selEditValue: '',
      form: {
        "@context": "",
        "@type": '',
        thingName: "",
        title: "",
        titles: [{}],
        properties: [],
        actions: [],
        events: [],
        description: "",
        descriptions: [{}],
        base: "",
        links: "",
        security: [],
        forms: [],
        securityDefinitions: [{}],
      },
      locsec: [
        { value: "header", label: "header" },
        { value: "query", label: "query" },
        { value: "body", label: "body" },
        { value: "cookie", label: "cookie" },
      ],
      lng: [
        { value: "ar-SA", label: "Arabic Saudi Arabia" },
        { value: "cs-CZ", label: "Czech Czech Republic" },
        { value: "da-DK", label: "Danish Denmark" },
        { value: "de-DE", label: "German Germany" },
        { value: "el-GR", label: "Modern Greek Greece" },
        { value: "en-AU", label: "English Australia" },
        { value: "en-GB", label: "English United Kingdom" },
        { value: "en-IE", label: "English Ireland" },
        { value: "en-US", label: "English United States" },
        { value: "en-ZA", label: "English South Africa" },
        { value: "es-ES", label: "Spanish Spain" },
        { value: "es-MX", label: "Spanish Mexico" },
        { value: "fi-FI", label: "Finnish Finland" },
        { value: "fr-CA", label: "French Canada" },
        { value: "fr-FR", label: "French France" },
        { value: "he-IL", label: "Hebrew Israel" },
        { value: "hi-IN", label: "Hindi India" },
        { value: "hu-HU", label: "Hungarian Hungary" },
        { value: "id-ID", label: "Indonesian Indonesia" },
        { value: "it-IT", label: "Italian Italy" },
        { value: "ja-JP", label: "Japanese Japan" },
        { value: "ko-KR", label: "Korean Republic of Korea" },
        { value: "nl-BE", label: "Dutch Belgium" },
        { value: "nl-NL", label: "Dutch Netherlands" },
        { value: "no-NO", label: "Norwegian Norway" },
        { value: "pl-PL", label: "Polish Poland" },
        { value: "pt-BR", label: "Portuguese Brazil" },
        { value: "pt-PT", label: "Portuguese Portugal" },
        { value: "ro-RO", label: "Romanian Romania" },
        { value: "ru-RU", label: "Russian Russian Federation" },
        { value: "sk-SK", label: "Slovak Slovakia" },
        { value: "sv-SE", label: "Swedish Sweden" },
        { value: "th-TH", label: "Thai Thailand" },
        { value: "tr-TR", label: "Turkish Turkey" },
        { value: "zh-CN", label: "Chinese China" },
        { value: "zh-HK", label: "Chinese Hong Kong" },
        { value: "zh-TW", label: "Chinese Taiwan" },
      ],
      security: [
        { value: "nosec_sc", label: "No authentication" },
        { value: "basic_sc", label: "Basic" },
        { value: "digest_sc", label: "Digest Access" },
        { value: "apikey_sc", label: "API key" },
        { value: "bearer_sc", label: "Bearer Token" },
        { value: "psk_sc", label: "Pre-shared key" },
        { value: "oauth2_sc", label: "OAuth2" },
      ],
    };
  },
  created() {
      this.form = this.mapperTDtoForm
  },
  computed: {
    things() {
      return this.$store.getters.getThings();
    },
    
    listEditableThings() {
        const things = [];
        const tds = this.$store.getters.getThings()

        for (const key of Object.keys(tds)) {
            things.push({value: key, label: key}) 
        }

        return things
    },
    
    mapperTDfromForm() {
      const form = this.form;

      const tdObj = {};
      tdObj.version = {};
      tdObj.version.instance = form.version;

      tdObj.name = form.name;
      tdObj["@context"] = [];
      tdObj["@context"].push(form["@context"]);
      tdObj["@type"] = form["@type"];
      tdObj.thingName = form.thingName;
      tdObj.title = form.title;
      tdObj.titles = form.titles;
      tdObj.forms = form.forms;
      tdObj.description = form.description;
      tdObj.descriptions = form.descriptions;
      tdObj.base = form.base;
      tdObj.links = form.links;
      tdObj.forms = form.forms;
      tdObj.security = form.security;

      tdObj.securityDefinitions = {};
      for (const key in form.securityDefinitions) {
        tdObj.securityDefinitions[form.securityDefinitions[key].scheme] = form.securityDefinitions[
          key
        ];
      }

      tdObj.properties = {};
      for (const key in form.properties) {
        tdObj.properties[form.properties[key].name] = form.properties[
          key
        ];
      }

      if (form.actions.length > 0) {
        tdObj.actions = {};
        for (const key in form.actions) {
          tdObj.actions[form.actions[key].name] = form.actions[key];
        }
      }

      if (form.events.length > 0) {
        tdObj.events = {};
        for (const key in form.events) {
          tdObj.events[form.events[key].name] = form.events[key];
        }
      }

      return tdObj;
    },
    mapperTDtoForm() {
      const tdObj = {};
      //const form = this.mapperTDfromForm;
      const form = this.$store.getters.getThings()[this.selEditValue]
      console.log('mapperTDtoForm')
      console.log(form)
      tdObj.version = form.version.instance;

      tdObj.name =form.name

    //   tdObj["@type"] = form["@type"][0]
      tdObj["@context"] = form["@context"]

      tdObj.thingName = form.name;
      tdObj.title = form.title;
      tdObj.titles = [{}];
      tdObj.forms = form.forms;
      tdObj.description = form.description;
      tdObj.descriptions = [{}];
      tdObj.base = form.base;
      tdObj.links = form.links;
      tdObj.forms = form.forms;
      tdObj.security = form.security;

      tdObj.securityDefinitions = [];
      for (const key of Object.keys(form.securityDefinitions)) {
          tdObj.securityDefinitions.push(form.securityDefinitions[key])
      }

      tdObj.properties = [];

     
for (const key of Object.keys(form.properties)) {
          const properties = form.properties[key];
          properties.name = key
          tdObj.properties.push(properties)
      }
      
      

      tdObj.actions = [];
      if (form.hasOwnProperty('actions')) {
        for (const key of Object.keys(form.actions)) {
            const actions = form.actions[key];
          actions.name = key
          tdObj.actions.push(actions)
        }
      }
      

      tdObj.events = [];
      if (form.hasOwnProperty('events')) {
        for (const key of Object.keys(form.events)) {
            const events = form.events[key];
          events.name = key
            tdObj.events.push(events)
        }
      }

      return tdObj;
    }
  },
  methods: {
    onSubmit() {
      const pr = this.mapperTDfromForm.thingName;
      const obj2 = this.mapperTDfromForm;
      const o = {};
      o[pr] = obj2;
      o.name = obj2.name;
      console.log(o)
    fetch('http://localhost:4000/thing/td', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({data: o}),
    })
    .then(response => response.json())
    .then(data => {
        this.$store.dispatch('fetchThings');
        this.$router.push({ path: `/` })
      console.log('Success:', data);
    })
    .catch((error) => {
      console.error('Error:', error);
    });
    },
    removeProperty(item) {
      var index = this.form.properties.indexOf(item);
      if (index !== -1) {
        this.form.properties.splice(index, 1);
      }
    },
    addProperty() {
      this.form.properties.push({ readOnly: true, forms: [] });
    },
    addPropertyForm(index) {
      this.form.properties[index].forms.push({});
    },
    removePropertyForm(index, item) {
      var ind = this.form.properties[index].forms.indexOf(item);
      if (ind !== -1) {
        this.form.properties[index].forms.splice(ind, 1);
      }
    },
    addActionForm(index) {
      this.form.actions[index].forms.push({});
    },
    removeActionForm(index, item) {
      var ind = this.form.actions[index].forms.indexOf(item);
      if (ind !== -1) {
        this.form.actions[index].forms.splice(ind, 1);
      }
    },
    addEventForm(index) {
      this.form.events[index].forms.push({});
    },
    removeEventForm(index, item) {
      var ind = this.form.events[index].forms.indexOf(item);
      if (ind !== -1) {
        this.form.events[index].forms.splice(ind, 1);
      }
    },
    addActions() {
      this.form.actions.push({ forms: [] });
    },
    addForm(index) {
      this.form.forms.push({});
    },
    removeForm(index, item) {
      var ind = this.form.forms.indexOf(item);
      if (ind !== -1) {
        this.form.forms.splice(ind, 1);
      }
    },
    removeAction(item) {
      var index = this.form.actions.indexOf(item);
      if (index !== -1) {
        this.form.actions.splice(index, 1);
      }
    },
    addEvents() {
      this.form.events.push({ forms: [] });
    },
    removeEvent(item) {
      var index = this.form.events.indexOf(item);
      if (index !== -1) {
        this.form.events.splice(index, 1);
      }
    },
    addDescriptions() {
      this.form.descriptions.push({});
    },
    removeDescriptions(item) {
      var index = this.form.descriptions.indexOf(item);
      if (index !== -1) {
        this.form.descriptions.splice(index, 1);
      }
    },
    addTitles() {
      this.form.titles.push({});
    },
    removeTitles(item) {
      var index = this.form.titles.indexOf(item);
      if (index !== -1) {
        this.form.titles.splice(index, 1);
      }
    },
    addSecurityDefinitions() {
      this.form.securityDefinitions.push({});
    },
    removeSecurityDefinitions(item) {
      var index = this.form.securityDefinitions.indexOf(item);
      if (index !== -1) {
        this.form.securityDefinitions.splice(index, 1);
      }
    },
    selectEDit(){
        this.form = this.mapperTDtoForm
    },
    selectDef(){
        this.form = {
        "@context": "",
        "@type": '',
        thingName: "",
        title: "",
        titles: [{}],
        properties: [],
        actions: [],
        events: [],
        forms: [],
        description: "",
        descriptions: [{}],
        base: "",
        links: "",
        security: [],
        forms: [],
        securityDefinitions: [{}],
      }
    }
  },
};
</script>

<style scoped>
.demo-input-label {
  display: inline-block;
  width: 130px;
}
.del {
  padding-left: 10px;
}
.op-select {
  width: 500px;
}
</style>
