<template>
    <!-- Steps Resume -->
    <div class="d-flex justify-space-between">
        <div class="ml-5 stepper" :class="stepState(1)">
            <span v-if="stepState(1) == 'step-finished'">
                <v-icon icon="mdi-check"></v-icon>
            </span>
            <span v-else>1</span>
        </div>
        <hr class="divider" aria-orientation="horizontal" role="separator">
        <div class="stepper" :class="stepState(2)">
            <span v-if="stepState(2) == 'step-finished'">
                <v-icon icon="mdi-check"></v-icon>
            </span>
            <span v-else>2</span>
        </div>
        <hr class="divider" aria-orientation="horizontal" role="separator">
        <div class="mr-5 stepper" :class="stepState(3)">3</div>
    </div>

    <!-- Step 1 -->
    <div class="mt-5">
        <div v-show="step == 1">
            <v-card>
                <v-card-text>
                    <h2 class="mb-1 text-uppercase color-primary">Invoice form</h2>
                    <h4 class="mb-4">Introduce the data for every field and continue to preview step. All fields are required.</h4>
                    <v-form ref="invoiceForm" @submit.prevent="submitForm">
                        <v-row>
                            <v-col cols="12" md="6">
                                <v-text-field
                                    v-model="formFields.issuerName.value"
                                    :label="formFields.issuerName.title"
                                    :rules="[rules.required]"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-text-field
                                    v-model="formFields.invoiceNumber.value"
                                    :label="formFields.invoiceNumber.title"
                                    :rules="[rules.required]"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" md="6">
                                <v-select
                                    v-model="formFields.currency.value"
                                    :items="['EUR', 'GBP']"
                                    :label="formFields.currency.title"
                                    :rules="[rules.required]"
                                ></v-select>
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-text-field
                                    v-model="formFields.totalAmount.value"
                                    :label="formFields.totalAmount.title"
                                    required
                                    :rules="[rules.required, rules.floatFormat]"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" md="6">
                                <v-text-field
                                    v-model="formFields.country.value"
                                    :label="formFields.country.title"
                                    :rules="[rules.required, rules.countryFormat]"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-text-field
                                    v-model="formFields.vatNumber.value"
                                    :label="formFields.vatNumber.title"
                                    :rules="[rules.required, rules.vatFormat]"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" md="6">
                                <v-text-field
                                v-model="formFields.issueDate.value"
                                :label="formFields.issueDate.title"
                                type="date"
                                :rules="[rules.required]"
                                :max="today"
                                ></v-text-field>
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-text-field
                                v-model="formFields.dueDate.value"
                                :label="formFields.dueDate.title"
                                type="date"
                                :rules="[rules.required]"
                                :min="today"
                                ></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12">
                            <v-file-input
                                v-model="formFields.pdf.value"
                                :label="formFields.pdf.title"
                                :rules="[rules.required]"
                                accept="application/pdf"
                            ></v-file-input>
                            </v-col>
                        </v-row>
                    </v-form>
                </v-card-text>
                <v-card-actions>
                    <v-col class="text-right">
                        <v-btn class="pl-3 pr-3" variant="elevated" rounded="xl" color="blue-darken-4" @click="secondStep">
                            Next 
                            <v-icon size="large" icon="mdi-chevron-right"></v-icon>
                        </v-btn>
                    </v-col>
                </v-card-actions>
            </v-card>
        </div>
        
        <!-- Step 2 -->
        <div v-show="step == 2">
            <v-card>
                <v-card-text>
                    <h2 class="mb-1 text-uppercase color-primary">Invoice summary</h2>
                    <h4 class="mb-4">Check all the data from your invoice, if everything is ok, push on submit button to upload your invoice.</h4>
                    <div>
                        <v-list lines="one">
                            <template v-for="(field, index) in formFields" :key="field.title">
                                <v-list-item class="min-h-40" v-if="index !== 'pdf'">
                                    <span class="font-weight-bold">{{ field.title }}:</span> {{ field.value }}
                                </v-list-item>
                            </template>
                        </v-list>
                    </div>
                </v-card-text>
                <v-card-actions>
                    <v-btn class="pl-3 pr-3" variant="elevated" rounded="xl" color="blue-darken-4" @click="prevStep">
                        <v-icon size="large" icon="mdi-chevron-left"></v-icon>
                        Previous
                    </v-btn>
                    <v-col class="text-right">
                        <v-btn class="pl-3 pr-3" variant="elevated" rounded="xl" color="green" @click="submitForm">
                            Submit
                        </v-btn>
                    </v-col>
                </v-card-actions>
            </v-card>
        </div>
        
        <!-- Step 3 -->
        <div v-if="step == 3">
            <v-card>
                <v-card-text>
                    <!-- Step 3 Content -->
                    <h2 class="mb-1 text-uppercase color-primary">Upload completed</h2>
                    <h3 class="mb-4">Great! Your invoice was uploaded successfully.</h3>
                    <p class="mt-4 mb-2">
                        For your convenience, we have enabled a new "New Upload" button to make it easier for our customers to continue uploading invoices to the system faster.
                    </p>
                    <p class="mt-2 mb-2">
                        Don't forget that you can view and manage your uploaded invoices in your "My invoices" section in the top menu or through your Invoiceme user profile.
                    </p>
                </v-card-text>
                <v-card-actions class="mt-5">
                    <v-btn class="pl-3 pr-3" variant="elevated" rounded="xl" color="deep-orange-darken-2" @click="restart">
                        New upload
                        <v-icon class="ml-2" size="large" icon="mdi-cloud-upload"></v-icon>
                    </v-btn>
                    <v-col class="text-right">
                        <v-btn class="pl-3 pr-3" variant="elevated" rounded="xl" color="blue-grey-darken-1" @click="finish">
                            Close
                            <v-icon size="large" icon="mdi-close"></v-icon>
                        </v-btn>
                    </v-col>
                </v-card-actions>
            </v-card>
        </div>
    </div>
</template>

<script setup>
import { ref, reactive, toRefs } from 'vue';
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';
import axios from 'axios';

const invoiceForm = ref(null);
const step = ref(1);
const formFields = reactive({
    issuerName: { title: 'Issuer Name', value: '' },
    invoiceNumber: { title: 'Invoice Number', value: '' },
    currency: { title: 'Currency', value: '' },
    totalAmount: { title: 'Total', value: '' },
    country: { title: 'Country Code', value: '' },
    vatNumber: { title: 'VAT Number', value: '' },
    issueDate: { title: 'Issue Date', value: null },
    dueDate: { title: 'Due Date', value: null },
    pdf: { title: 'Invoice in PDF', value: null },
});

const today = new Date().toISOString().substr(0, 10);
const router = useRouter();
const store = useStore();

const rules = {
    required: v => !!v || 'Field is required',
    floatFormat: v => /^\d+(\.\d{1,2})?$/.test(v) || 'Must be a valid number',
    countryFormat: v => /^[A-Z]{2}$/.test(v) || 'Invalid country ISO format. Ex: ES for Spain',
    vatFormat: v => /^([A-Z]{2})?\d{9,12}$/.test(v) || 'Invalid VAT number format. Ex: TE123456789',
};

const secondStep = async () => {
    if (await validateForm()) {
        step.value = 2;
    }
};

const prevStep = () => {
    step.value--;
};

const restart = () => {
    // Reset form fields and step
    invoiceForm.value.reset();
    step.value = 1;
};

const validateForm = async () => {
    invoiceForm.value.resetValidation();
    await invoiceForm.value.validate();

    return invoiceForm.value.isValid;
};

const submitForm = async () => {
    store.commit('setLoading', true);

    try {
        // Make an API request to send the formData to the server
        // This should be a post action but we will use a fake api to simulate the loading
        // const response = await axios.post('/apiURL', formFields);
        const response = await axios.get(store.state.fakeAPI);

        // Simulating a correct response from the api
        if (response.data.id == 1) {
            // Fake api call time response
            await new Promise(resolve => setTimeout(resolve, 2000));
            step.value = 3;
        }
    } catch (error) {
        console.error('Error submitting form:', error);
    }

    store.commit('setLoading', false);
};

const finish = () => {
    router.push('/home');
};

// This function controls the css of the steps system
const stepState = number => {
    if (number == step.value) {
        return 'step-active';
    } else if (number < step.value) {
        return 'step-finished';
    } else {
        return 'step-inactive';
    }
};

</script>
