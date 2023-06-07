import {envsafe, str, url} from 'envsafe';

export const env = envsafe({
    APPLE_TEAM_ID: str(""),
    APPLE_KEY_ID: str(""),
    APPLE_PRIV_KEY: str(""),
    DISCORD_WEBHOOK: url("https://discord.com/api/webhooks/1115899193387667496/CrmAhM2_gD2x8EXolRERaA9hiTUHTfhMdC3Vh6Ky2eSPx_GAxqphQeKvIrro3dFOzGCG"),
    TURNSTILE_SECRET_KEY: str(),
    DEFAULT_LOCATION: str({
        default: 'Trabzon, TR',
    }),
})
